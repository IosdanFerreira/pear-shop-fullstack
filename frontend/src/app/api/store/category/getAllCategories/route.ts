/* eslint-disable quotes */
import prisma from '@/lib/db';
import * as Yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Retorna os dados de todas as categorias
    const allCategories = await prisma.category.findMany({});

    // Retorna todos os produtos
    return NextResponse.json(allCategories, {status: StatusCodes.OK});
    
  } catch (error) {
    console.log('Erro ao consultar todos os produtos do loja', error);

    // Retorna erro caso não for possível realizar a requisição
    return NextResponse.json({ 
      error: error,
      message: 'Erro ao buscar categorias.'
    }, { status: 500 });

  } finally {
    // Desconecta a instância do prisma
    await prisma.$disconnect();
  }
}