import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { kv } from '@vercel/kv';

const NewHabit = () => {
  async function newHabit(formData: FormData) {
    'use server';
    const habit = formData.get('habit');
    await kv.hset('habits', { [habit as string]: {} });

    revalidatePath('/');
    redirect('/');
  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-white font-display text-center">
        Novo hábito
      </h1>
      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 font-sans text-white rounded-md bg-neutral-800"
        />
        <button
          type="submit"
          className="bg-[#45EDAD] font-display text-neutral-900 font-regular rounded-md text-2xl p-2 mt-8"
        >
          Cadastrar
        </button>
        <button className="bg-neutral-800 text-[#F85858] font-display font-regular rounded-md text-2xl p-2">
          Cancelar
        </button>
      </form>
    </main>
  );
};

export default NewHabit;
