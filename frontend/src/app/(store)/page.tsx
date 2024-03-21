'use client';
import Link from 'next/link';
import Image from 'next/image';

// components
import MultipleCarousel from '@/components/carousel/multipleCarousel';
import UniqueCarousel from '@/components/carousel/uniqueCarousel';
import CategoryList from '@/components/category/categoryList';
import ProductList from '@/components/product/productList';

// shared
import { carouselMock, collectionMock, productsMock } from '@/shared/mocks';
import { categoryMock } from '@/shared/mocks/category';

// function PrudctCard() {
//   const products = useSuspenseRequestQuery<IProduct[]>({ 
//     queryKey: ['storeProducts'],
//     queryFn: () => fetchProducts(1, 10),
//   });

//   return <div>
//     {productsMock?.map((item) => (
//       <div key={item?.id}>
//         <h2>{item?.name}</h2>
//         <div>{item?.description}</div>
//         <div>{item?.categories?.[0]?.category?.name}</div>
//       </div>
//     ))}
//   </div>;
// }

export default function Home() {
  return (
    <main className='container'>
      <UniqueCarousel images={carouselMock} />

      <figure className='flex justify-center items-center'>
        <Image 
          alt='Cupons de desconto'
          src='/images/assets/cupons.webp'
          width={666}
          height={173}
        />
      </figure>

      <CategoryList categories={categoryMock} />

      <MultipleCarousel
        settings={{
          slidesToShow: 4,
          slidesToScroll: 1,
        }}
        dataList={collectionMock}
        renderComponent={(item) => {
          return (
            <Link href='/' className='block rounded-sm overflow-hidden px-2'>
              <figure>
                <Image 
                  alt={item?.name}
                  src={item?.imageUrl}
                  width={432}
                  height={462}
                />
              </figure>
            </Link>
          );
        }}
      />

      <ProductList productList={productsMock}/>
    </main>
  );
}
