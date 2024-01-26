import Image from "next/image";
import React from "react";
import InputSearch from "./InputSearch";

const Home = () => {
  return (
    <section className='flex justify-center'>
      <article>
        <h2 className='text-center'>Buscador de productos</h2>
        <InputSearch />
        <div className='flex items-center'>
          <span>
            <Image
              src='/assets/crombie-logo.jpeg'
              alt='crombie-logo'
              width={50}
              height={50}
            />
          </span>
          <span>Crombie Challenge</span>
        </div>
      </article>
    </section>
  );
};

export default Home;
