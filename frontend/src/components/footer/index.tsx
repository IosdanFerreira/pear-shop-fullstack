import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#ecebeb]'>
      <div className='container mt-10 py-8 flex items-start flex-wrap'>
        <div className='flex flex-wrap md:flex-nowrap justify-start md:w-8/12 lg:w-6/12 gap-7'>
          <ul>
            <li>
              <h3 className='uppercase text-[13px] font-bold text-[#000] mb-2'>Informações da empresa</h3>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Sobre a Pear Shop</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Blog</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Termos e condições</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Anúncios</p>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <h3 className='uppercase text-[13px] font-bold text-[#000] mb-2'>Ajuda e suporte</h3>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Políticas de Frete</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Devolução</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Como Rastrear</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Como Pedir</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Guia de Tamanhos</p>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <h3 className='uppercase text-[13px] font-bold text-[#000] mb-2'>Atendimento ao Cliente</h3>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Contate-nos</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Métodos de pagamento</p>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <p className='uppercase text-[10px] font-bold text-[#333333] hover:underline mb-1'>Como Rastrear</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='mt-6 lg:mt-0 grid grid-cols-1 md:w-11/12 lg:w-6/12'>
          <h3 className='uppercase text-[12px] font-bold text-[#000] mb-2'>Encontre-nos em:</h3>

          <ul className='flex items-center gap-5 mt-3'>
            <li>
              <Link className='block' href='/'><Facebook /></Link>
            </li>
            <li>
              <Link className='block' href='/'><Instagram /></Link>
            </li>
            <li>
              <Link className='block' href='/'><Twitter /></Link>
            </li>
            <li>
              <Link className='block' href='/'><Youtube /></Link>
            </li>
            <li>
              <Link className='block' href='/'><Linkedin /></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='container flex md:items-center  md:justify-center flex-col pb-5'>
        <p className='text-[.9rem]'>@{currentYear} Todos os direitos reservados PEAR-SHOP</p>

        <ul className='md:flex gap-4 mt-3'>
          <li className='mb-1 md:mb-0'>
            <Link href='/' className='flex gap-4 text-[.8rem] hover:underline after:block after:w-[1px] after:h-[20px] after:bg-[#5f5f5f] after:content-[""]'>Centro de Privacidade</Link>
          </li>
          <li className='mb-1 md:mb-0'>
            <Link href='/' className='flex gap-4 text-[.8rem] hover:underline after:block after:w-[1px] after:h-[20px] after:bg-[#5f5f5f] after:content-[""]'>Política de Privacidade e Cookies</Link>
          </li>
          <li className='mb-1 md:mb-0'>
            <Link href='/' className='flex gap-4 text-[.8rem] hover:underline'>Termos e condições</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
