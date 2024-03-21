'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import  { ShoppingCart } from 'lucide-react';

// utils
import { transformCurrencyInBRL } from '@/shared/utils';

// interface
import { IProduct } from '@/@types';

interface IProductCard {
    product: IProduct
}

export default function ProductCard({ product }: IProductCard) {
  return (
    <Link 
      href={`/single/${product.id}`}
      className='block p-3 max-w-[315px] rounded-md mb-2 overflow-hidden hover:shadow-md hover:shadow-[#dddddd] hover:transition-all'
    >
      <Image 
        alt={product?.name}
        src={product?.defaultImageUrl}
        width={315}
        height={331}
        className='rounded-sm mb-2'
      />

      <p className='overflow-hidden text-ellipsis whitespace-nowrap text-[.75rem] md:text-[.90rem] font-semibold hover:underline'>{product?.name}</p>

      <p className='overflow-hidden text-ellipsis whitespace-nowrap text-[.80rem] text-[#CC6E00] font-medium'>{product?.sold} itens vendidos</p>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 mt-1'>
          <span className='text-[.80rem] md:text-[1rem] block text-[#fa6338] font-bold'>{transformCurrencyInBRL(product?.priceWithDiscount / 100)}</span>
          <span className='text-[.6rem] block text-[#fa6338] font-bold md:text-[.70rem] border-[1px] border-[#fa6338] rounded-sm px-1'>-{product?.discount}%</span>
        </div>

        <button className='hidden md:flex items-center justify-center border-[1px] border-[#000] rounded-2xl py-[3px] px-3 hover:bg-[#000] hover:text-[#fff]'>
          <ShoppingCart className='w-[20px]' /> +
        </button>
      </div>

      <small className='block text-[#696969] text-[11px] mt-1'>{product?.UfOrigin}</small>
    </Link>
  );
}
