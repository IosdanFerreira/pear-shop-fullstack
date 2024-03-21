import React from 'react';
import Link from 'next/link';

// icons
import { ShoppingCart } from 'lucide-react';

// components
import SearchForm from './components/searchForm';
import OptionsMenuHeader from './components/optionsMenu';
import SheetMenu from './components/sheetMenu';

// UI
import { oswald } from '../ui/fonts';
import { Button } from '../ui/button';

// types
import { ICategory } from '@/@types';

interface IDefaultCategories extends ICategory{}

export default function Header() {

  const defaultCategories: IDefaultCategories[] = [
    {
      id: 1,
      name: 'Roupas Masculinas',
      nameUnaccent: 'Roupas Masculinas',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 2,
      name: 'Roupas Femininas',
      nameUnaccent: 'Roupas Femininas',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 3,
      name: 'Calçados',
      nameUnaccent: 'Calcados',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 4,
      name: 'Crianças',
      nameUnaccent: 'Criancas',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 5,
      name: 'Beleza e Saúde',
      nameUnaccent: 'Beleza e Saude',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 6,
      name: 'Joias e Acessórios',
      nameUnaccent: 'Joias e Acessorios',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 7,
      name: 'Bolsas e Bagagens',
      nameUnaccent: 'Bolsas e Bagagens',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
  ];

  return (
    <header className='pt-3 flex-col border-b-[1px] border-[#e6e6e6]'>
      <div className='container'>
        <div className='block md:flex items-center justify-between pb-2'>

          <div className='flex items-center justify-between'>
            <SheetMenu />

            <Link href='/'>
              <h2 className={`text-2xl md:text-4xl font-bold uppercase ${oswald.className} text-[#222] pb-0`}>Pear Shop</h2>
            </Link>
          
            <Button variant={'ghost'} className='md:hidden pe-0'>
              <ShoppingCart className='text-[#494949]' />
              <p className='text-[14px] font-bold'>20</p>
            </Button>
          </div>

          <div className='flex items-center'>
            <SearchForm />
          
            <OptionsMenuHeader />
          </div>
        </div>

        <div className='hidden md:block'>
          <nav>
            <ul className='flex items-center'>
              {defaultCategories?.map((category) => (
                <li key={category?.id}>
                  <Link href='/'
                    className='block text-[0.74rem] md:text-[0.7rem] lg:text-[0.9rem] hover:bg-[#ebebeb] md:px-2 lg:px-3 py-1.5'
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
