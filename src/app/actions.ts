'use server';

import { revalidatePath } from 'next/cache';

import { kv } from '@vercel/kv';

export async function deleteHabit(habit: string) {
  await kv.hdel('habits', habit);

  revalidatePath('/');
}

type ToggleHabitParams = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
  date: string | null;
  done?: boolean;
};

export async function toggleHabit({
  habit,
  habitStreak,
  date,
  done
}: ToggleHabitParams) {
  if (!habitStreak || !date) {
    return;
  }

  const updatedHabitStreak = {
    [habit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done
    }
  };

  await kv.hset('habits', updatedHabitStreak);
  revalidatePath('/');
}
