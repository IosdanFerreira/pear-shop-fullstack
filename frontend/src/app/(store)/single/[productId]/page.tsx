'use client';
import MultipleCarousel from '@/components/carousel/multipleCarousel';
import { UniqueCarousel } from '@/components/carousel/uniqueCarousel';
import { productsMock } from '@/shared/mocks';
import Image from 'next/image';
import React from 'react';

export default function SingleProduct({ params }: { params: { slug: string } }) {
  return (
    <main className='container py-6'>
      <div className='grid grid-cols-12'>

        <div className='col-span-1 w-30 h-20 bg-[#000]'>

        </div>

        <div className='col-span-6 px-2'>
    
          <MultipleCarousel
            settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
            dataList={productsMock}
            renderComponent={(item) => {
              return (
                <>
                  <figure className='relative w-full h-lvh px-2'>
                    <Image 
                      alt={item?.name}
                      src={item?.defaultImageUrl}
                      fill
                      className='absolute'
                    />
                  </figure>
                </>
              );
            }}
          />
        </div>

      </div>
    </main>
  );
}
