"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Image from "next/image";
import Home from "@/components/Home";

const getProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (err) {
    throw new Error(err);
  }
};

const page = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);

  if (isLoading) return "Cargando...";
  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <main className='flex justify-center'>
      <div className='max-w-[1200px]'>
        <Home />
        <section className='grid grid-cols-3 gap-10 m-12'>
          {data.map((product, idx) => (
            <article key={idx}>
              <Image
                className='object-cover'
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
              />
              <h3>{product.title}</h3>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
