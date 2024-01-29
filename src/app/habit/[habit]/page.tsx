import Link from 'next/link';

import ArrowIcon from '@/components/ArrowIcon';
import Calendar from '@/components/Calendar';
import { kv } from '@vercel/kv';

const Habit = async ({ params: { habit } }: { params: { habit: string } }) => {
  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    'habits',
    decodedHabit
  );

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16 md:max-w-3xl">
      <h1 className="text-2xl font-light text-neutral-300 font-display text-center">
        {decodedHabit}
      </h1>
      <Link
        href={'/'}
        className="flex items-center font-sans text-xs text-white gap-2"
      >
        <ArrowIcon width={12} height={12} />
        Voltar
      </Link>

      <Calendar habit={decodedHabit} habitStreak={habitStreak} />
    </main>
  );
};

export default Habit;
