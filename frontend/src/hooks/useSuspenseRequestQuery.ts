import { QueryFunction, useSuspenseQuery   } from '@tanstack/react-query';

interface IUseRequestQuery<T> {
    queryKey: string[],
    queryFn?: QueryFunction<T, string[], never> | undefined
}

export function useSuspenseRequestQuery<T>({ queryKey, queryFn }: IUseRequestQuery<T>) {
  return useSuspenseQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });
};

// Esse hook de requisição é específico para buscar dados e exibi-los em conjunto com o componente 'Suspense'
// Isso é feito para que cada componente possa ter seu loading personalizada e otimizar as requisições
// Dessa forma a página contendo o componente que usa esse hook, pode carregar mais rápido, sem que seja necessário as requisições finalizarem