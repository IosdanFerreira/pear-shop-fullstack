'use client';
import React, { MouseEventHandler } from 'react';
import { ChevronRight } from 'lucide-react';

interface INextArrow {
    onClick?: MouseEventHandler | undefined
}

export default function NextArrow({ onClick }: INextArrow) {
  return (
    <button
      className='flex items-center justify-center absolute right-[10px] top-[35%] md:top-[45%] bg-[#a7a7a7cb] hover:bg-[#fff] rounded-full p-2 z-10'
      onClick={onClick}
    >
      <ChevronRight className='text-[#242424] w-[17px] h-[17px] md:w-[23px] md:h-[23px]'/>
    </button>
  );
}
