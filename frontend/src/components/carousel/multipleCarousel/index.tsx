import React from 'react';
import Slider, { Settings } from 'react-slick';
import PrevArrow from './components/prevArrow';
import NextArrow from './components/nextArrow';

interface IMultipleCarousel<T> {
  settings: Settings,
  dataList: T[],
  renderComponent: (item: T) => React.ReactNode
}

export default function MultipleCarousel<T>({ settings, dataList, renderComponent }: IMultipleCarousel<T>) {

  const defaultSettings: Settings = {
    dots: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
    ],
    ...settings
  };

  return (
    <Slider {...defaultSettings} className='mb-8'>
      {dataList.map((item, index) => (
        <div key={index} className='px-0'>
          <div>{renderComponent(item)}</div>
        </div>
      ))}
    </Slider>
  );
}
