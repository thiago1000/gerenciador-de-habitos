'use client';

import Image from 'next/image';

import { deleteHabit } from '@/app/actions';

const DeleteButton = ({ habit }: { habit: string }) => {
  return (
    <button onClick={() => deleteHabit(habit)}>
      <Image
        src="/images/trash.svg"
        width={20}
        height={20}
        alt="Ícone de lixeira vermelha"
      />
    </button>
  );
};

export default DeleteButton;
