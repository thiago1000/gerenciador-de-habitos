'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const DayState = ({ day }: { day: boolean | undefined }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialState: [string, string, number?] = [
    '/images/gray-mark.svg',
    'gray',
    12
  ];
  const [image, setImage] = useState(initialState);

  useEffect(() => {
    let newImage: [string, string, number?] = initialState;

    if (day === true) {
      newImage = ['/images/check.svg', 'marca verde', 24];
    } else if (day === false) {
      newImage = ['/images/x.svg', 'marca vermelha', 24];
    }

    // Verifica se a nova imagem é diferente da imagem atual antes de atualizar o estado
    if (JSON.stringify(newImage) !== JSON.stringify(image)) {
      setImage(newImage);
    }
  }, [day, image, initialState]);

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
};

export default DayState;
