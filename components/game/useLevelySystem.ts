// components/game/useLevelSystem.ts
import { useState, useEffect, useCallback } from "react";
import { PACKS, LEVELS, type Pack, type Level } from "./gameData";

export interface XPEntry {
  name: string;
  xp: number;
  pack: string;
  level: number;
  date: string;
}

export interface LevelSystemState {
  totalXP: number;
  currentStreak: number; // consecutive correct matches in current game
  dailyStreak: number;   // consecutive days played
  unlockedPacks: string[];
  completedLevels: Record<string, number[]>; // packId → [1,2,3]
  leaderboard: XPEntry[];
}

const STORAGE_KEY = "lugha_v2_state";
const STREAK_DATE_KEY = "lugha_last_played";

const DEFAULT_STATE: LevelSystemState = {
  totalXP: 0,
  currentStreak: 0,
  dailyStreak: 1,
  unlockedPacks: ["soko"],
  completedLevels: {},
  leaderboard: [],
};

function loadState(): LevelSystemState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(s: LevelSystemState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}

// XP awarded per correct match (base)
export const XP_PER_MATCH = 10;
// Combo multiplier thresholds: [streak, multiplier]
export const COMBO_TIERS: [number, number][] = [[1, 1], [3, 2], [5, 3]];

export function getComboMultiplier(streak: number): number {
  let mul = 1;
  for (const [threshold, m] of COMBO_TIERS) {
    if (streak >= threshold) mul = m;
  }
  return mul;
}

export function useLevelSystem() {
  const [state, setState] = useState<LevelSystemState>(DEFAULT_STATE);

  // Load on mount
  useEffect(() => {
    const loaded = loadState();

    // Daily streak logic
    const lastPlayed = localStorage.getItem(STREAK_DATE_KEY);
    const today = new Date().toDateString();
    if (lastPlayed) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (lastPlayed === yesterday) {
        loaded.dailyStreak = (loaded.dailyStreak || 1) + 1;
      } else if (lastPlayed !== today) {
        loaded.dailyStreak = 1;
      }
    }
    localStorage.setItem(STREAK_DATE_KEY, today);

    setState(loaded);
  }, []);

  const updateState = useCallback((updater: (prev: LevelSystemState) => LevelSystemState) => {
    setState((prev) => {
      const next = updater(prev);
      saveState(next);
      return next;
    });
  }, []);

  // Award XP for a correct match, return the XP actually awarded
  const awardMatchXP = useCallback((comboStreak: number): number => {
    const multiplier = getComboMultiplier(comboStreak);
    const xp = XP_PER_MATCH * multiplier;
    updateState((prev) => ({ ...prev, totalXP: prev.totalXP + xp }));
    return xp;
  }, [updateState]);

  // Mark a level completed, unlock next pack if needed
  const completeLevel = useCallback((
    packId: string,
    levelId: number,
    scoreXP: number,
    playerName: string,
  ) => {
    updateState((prev) => {
      const completed = { ...prev.completedLevels };
      completed[packId] = Array.from(new Set([...(completed[packId] || []), levelId]));

      // Unlock next pack when level 1 of current pack is completed
      const unlocked = [...prev.unlockedPacks];
      const packIndex = PACKS.findIndex((p) => p.id === packId);
      if (levelId === 1 && packIndex >= 0 && packIndex < PACKS.length - 1) {
        const nextPack = PACKS[packIndex + 1].id;
        if (!unlocked.includes(nextPack)) unlocked.push(nextPack);
      }

      // Leaderboard entry
      const entry: XPEntry = {
        name: playerName,
        xp: scoreXP,
        pack: packId,
        level: levelId,
        date: new Date().toLocaleDateString(),
      };
      const board = [entry, ...prev.leaderboard]
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 10);

      return {
        ...prev,
        totalXP: prev.totalXP + scoreXP,
        completedLevels: completed,
        unlockedPacks: unlocked,
        leaderboard: board,
      };
    });
  }, [updateState]);

  const isPackUnlocked = useCallback(
    (packId: string) => state.unlockedPacks.includes(packId),
    [state.unlockedPacks],
  );

  const isLevelCompleted = useCallback(
    (packId: string, levelId: number) =>
      (state.completedLevels[packId] || []).includes(levelId),
    [state.completedLevels],
  );

  const resetProgress = useCallback(() => {
    const fresh = { ...DEFAULT_STATE };
    saveState(fresh);
    setState(fresh);
  }, []);

  return {
    state,
    awardMatchXP,
    completeLevel,
    isPackUnlocked,
    isLevelCompleted,
    resetProgress,
  };
}