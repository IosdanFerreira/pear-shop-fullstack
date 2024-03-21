'use client';
import { ChevronLeft } from 'lucide-react';
import React, { MouseEventHandler } from 'react';

interface INextArrow {
    onClick?: MouseEventHandler | undefined
}

export default function PrevArrow({ onClick }: INextArrow) {
  return (
    <button
      className='absolute flex items-center justify-center left-[12px] top-[35%] md:top-[45%] bg-[#a7a7a7cb] hover:bg-[#fff] rounded-full p-2 z-10'
      onClick={onClick}
    >
      <ChevronLeft className='text-[#242424] w-[17px] h-[17px] md:w-[23px] md:h-[23px]'/>
    </button>
  );
}
