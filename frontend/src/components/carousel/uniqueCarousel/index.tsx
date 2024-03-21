'use client';
import * as React from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { ICarousel } from '@/@types/carousel';

interface IUniqueCarousel {
    images: ICarousel[]
}

export default function UniqueCarousel({ images }: IUniqueCarousel) {
  return (
    <div className="h-[85px] md:h-[150px] lg:h-[273px] md:mt-4 rounded-sm overflow-hidden">
      <Carousel>
        {images.map((image) => (
          <Image 
            key={image?.id}
            src={image?.url} 
            alt={image?.alt}
            width={1366}
            height={273}
          />
        ))}
      </Carousel>
    </div>
  );
}
