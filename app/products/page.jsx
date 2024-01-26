"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  const search = params.get("query");
  console.log(search);

  const getFilterProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(response);
      return response.data.products;
    } catch (err) {
      throw new Error(err);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["filterProducts"],
    queryFn: getFilterProducts,
  });

  if (isLoading) return "Cargando";
  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <section>
      {data.map((product, idx) => (
        <article key={idx}>
          <h3>{product.title}</h3>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={500}
            height={500}
          />
        </article>
      ))}
    </section>
  );
};

export default Page;
