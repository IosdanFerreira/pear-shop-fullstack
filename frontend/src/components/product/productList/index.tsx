'use client';
import React from 'react';
import { IProduct } from '@/@types';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../productCard';
import { motion, useAnimation } from 'framer-motion';

interface IProductList {
    productList: IProduct[]
    seeMoreOnClick?: () => void
}

export default function ProductList({ productList, seeMoreOnClick }: IProductList) {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      translateY: [0, -2, 2, -2, 2, -2, 2, 0],
      transition: { duration: 1 }
    });
  };

  return (
    <>
      <div className='grid grid-cols-2 md:flex flex-wrap justify-evenly gap-1'>
        {productList?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      <div className='flex justify-center items-center w-full mt-6'>
        {productList.length >= 20 && (
          <motion.button
            onHoverStart={startAnimation}
            className='flex items-center justify-center gap-2 border-[1px] border-[#242424] py-[6px] px-[25px] rounded-md font-semibold'
            onClick={seeMoreOnClick}
          >
            Veja mais 
            <motion.div
              className='flex items-center justify-center'
              animate={controls}
            >
              <ChevronDown className='w-[18px]'/>
            </motion.div>
          </motion.button>
        )}
      </div>
    </>
  );
}
