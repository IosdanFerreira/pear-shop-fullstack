/* eslint-disable quotes */
import prisma from '@/lib/db';
import * as Yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Declaração dos parâmetros aceitos na URL
    const page: any = request.nextUrl.searchParams.get('page');
    const filter = request.nextUrl.searchParams.get('filter');
    const limit: any = request.nextUrl.searchParams.get('limit');

    // Esquema de validação dos parâmetros da requisição
    const querySchema = Yup.object().shape({
      page: Yup.number().moreThan(0, "'page' deve ser maior que 0").required("O parâmetro 'page' é obrigatório na URL"),
      limit: Yup.number().moreThan(0, "'limit' deve ser maior que 0").required("O parâmetro 'limit' é obrigatório na URL"),
      filter: Yup.string().notRequired(),
      category: Yup.string().notRequired(),
    });

    // Aplicando esquema de validação
    try {
      await querySchema.validate({ page, limit, filter }, { abortEarly: false });
    } catch (validationError: any) {
      const errors = validationError.inner.reduce((acc: Record<string, string>, err: any) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      return NextResponse.json({ errors }, { status: StatusCodes.BAD_REQUEST });
    }

    // Se o parâmetro 'filter' vier preenchido, realiza a busca filtrando o resultado
    if(filter) {
      const allProductsFiltered = await prisma.product.findMany({
        where: {
          OR: [
            {
              name: {
                contains: filter,
                mode: 'insensitive'
              }
            },
            {
              nameUnnacent: {
                contains: filter,
                mode: 'insensitive'
              }
            },
            {
              description: {
                contains: filter,
                mode: 'insensitive'
              }
            },
            {
              descriptionUnaccent: {
                contains:filter,
                mode: 'insensitive'
              }
            },
            {
              categories: {
                every: {
                  category: {
                    name: {
                      contains: filter,
                      mode: 'insensitive'
                    }
                  }
                }
              }
            },
            {
              categories: {
                every: {
                  category: {
                    nameUnaccent: {
                      contains: filter,
                      mode: 'insensitive'
                    }
                  }
                }
              }
            }
          ]
        },
        include: {
          categories: {
            select: {
              category: true
            }
          },
          secondariesImageUrl: {
            select: {
              url: true
            }
          }
        },
        skip: Number(Number(page) - 1) * Number(limit),
        take: Number(limit)
      });

      return NextResponse.json(allProductsFiltered, {status: StatusCodes.OK});
    }

    // Se não for aplicado nenhum filtro para name ou category, retorna todos os produtos
    const allProducts = await prisma.product.findMany({
      include: {
        categories: {
          select: {
            category: true
          }
        },
        secondariesImageUrl: {
          select: {
            url: true
          }
        }
      },
      skip: Number(Number(page) - 1) * Number(limit),
      take: Number(limit)
    });

    // Retorna todos os produtos
    return NextResponse.json(allProducts, {status: StatusCodes.OK});
    
  } catch (error) {
    console.log('Erro ao consultar todos os produtos do loja', error);

    // Retorna erro caso não for possível realizar a requisição
    return NextResponse.json({ 
      error: error,
      message: 'Erro ao buscar produtos.'
    }, { status: 500 });

  } finally {
    // Desconecta a instância do prisma
    await prisma.$disconnect();
  }
}