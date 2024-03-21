import { ICategory, IProduct } from '@/@types';

export const fetchCategories = async (): Promise<ICategory[]> => {
  
  const response = await fetch('http://localhost:3000/api/store/category/getAllCategories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  
  const data = await response.json();
  return data;
};