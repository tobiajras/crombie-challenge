"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import RatingStars from "@/components/RatingStars";
import { useEffect } from "react";

const Page = () => {
  const params = useSearchParams();
  const queryParam = params.get("query");
  const limitPerPage = 24;

  const getProducts = async ({ pageParam = 0 }) => {
    const skip = pageParam * limitPerPage;
    const url = `https://dummyjson.com/products${
      queryParam ? `/search?q=${queryParam}&` : "?"
    }skip=${skip}&limit=${limitPerPage}`;
    const response = await axios.get(url);
    return response.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["productsGroup", queryParam],
    queryFn: getProducts,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < lastPage.total / limitPerPage) {
        return pages.length;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [queryParam, refetch]);

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <main className='flex justify-center'>
      <div className='max-w-[1200px] w-full'>
        {isLoading ? (
          <h4 className='text-center'>Cargando...</h4>
        ) : data.pages.length > 0 ? (
          <>
            <section>
              {data.pages.map((group, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 sm:p-10'
                >
                  {group.products.map((product) => (
                    <Link
                      href={`/product-details?productId=${product.id}`}
                      key={product.id}
                    >
                      <div className='h-64 w-full sm:h-80'>
                        <Image
                          priority={product.id < 24 ? true : false}
                          className='w-full h-full object-cover object-center rounded-lg'
                          src={product.images[0]}
                          alt={product.title}
                          width={300}
                          height={300}
                        />
                      </div>
                      <h3 className='mt-5'>{product.title}</h3>
                      <div className='flex justify-between items-center mt-3'>
                        <span className='flex gap-2'>
                          <RatingStars
                            rating={product.rating}
                            starClassName='w-5 h-5'
                          />
                        </span>

                        <span className='text-xl text-bold'>
                          ${product.price}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </section>
            <div className='flex justify-center mb-20'>
              {hasNextPage && (
                <button
                  className='py-3 px-5 font-semibold rounded bg-white text-black'
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? "Cargando más..."
                    : "Cargar más productos"}
                </button>
              )}
              {!hasNextPage && (
                <h4 className='text-center bg-white/10 rounded p-5'>
                  No hay más productos
                </h4>
              )}
            </div>
          </>
        ) : (
          <h4 className='text-center bg-white/10 rounded p-5'>
            No hay resultados para la busqueda: &quot;{queryParam}&quot;'
          </h4>
        )}
      </div>
    </main>
  );
};

export default Page;
