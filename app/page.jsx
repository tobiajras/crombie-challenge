"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Home from "@/components/Home";
import RatingStars from "@/components/RatingStars";

const page = () => {
  const params = useSearchParams();
  const queryParam = params.get("query");

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${
          queryParam
            ? `https://dummyjson.com/products/search?q=${queryParam}`
            : "https://dummyjson.com/products?limit=24"
        }`
      );
      return response.data.products;
    } catch (err) {
      throw new Error(err);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", queryParam],
    queryFn: getProducts,
  });
  console.log(data);

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <main className="flex justify-center">
      <div className="max-w-[1200px]">
        <Home />
        {isLoading ? (
          <h4 className="text-center">Cargando...</h4>
        ) : data.length > 0 ? (
          <section className="grid grid-cols-3 gap-10 m-12">
            {data.map((product, idx) => (
              <article className="" key={product.id}>
                <div className="h-80 w-full">
                  <Image
                    className="w-full h-full object-cover object-center rounded-lg"
                    src={product.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </div>
                <h3 className="mt-5">{product.title}</h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="flex gap-2">
                    <RatingStars
                      rating={product.rating}
                      starClassName="w-5 h-5"
                    />
                  </span>

                  <span className="text-xl text-bold">${product.price}</span>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <h4 className="text-center bg-white/10 rounded p-5">
            No hay resultados para la busqueda: "{queryParam}"
          </h4>
        )}
      </div>
    </main>
  );
};

export default page;
