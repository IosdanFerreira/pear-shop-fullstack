import { IProduct } from '@/@types';

export const fetchProducts = async (page: number, limit: number, filter=''): Promise<IProduct[] | any> => {
  try {
    const response = await fetch(`http://localhost:3000/api/store/product/getAllProducts?page=${page}&limit=${limit}&filter=${filter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
  
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
  
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Ocorreu um erro ao buscar produtos:', error);
    return { error: 'Ocorreu um erro ao buscar produtos' };
  }
};