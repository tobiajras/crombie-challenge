import Image from "next/image";
import React from "react";
import InputSearch from "./InputSearch";
import Link from "next/link";

import { RiContactsFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <section className='flex justify-center m-5 sm:m-12'>
      <article className='w-full'>
        <Link href='/' className='flex items-center justify-center'>
          <span>
            <Image
              className='w-16 sm:w-20'
              src='/assets/crombie-logo.jpeg'
              alt='crombie-logo'
              width={80}
              height={80}
            />
          </span>
          <span className='text-xl sm:text-3xl'>Crombie Challenge</span>
        </Link>
        <InputSearch />
        <div className='flex gap-10 justify-center mt-6 text-white/70 max-[450px]:gap-5'>
          <Link
            className='flex items-center gap-2 text-xl max-[450px]:text-base'
            href='https://tobiasajras.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiContactsFill />
            <span>Tobias Ajras</span>
          </Link>
          <Link
            className='flex items-center gap-2 text-xl max-[450px]:text-base'
            href='https://github.com/tobiajras/crombie-challenge'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaCode />
            <span>Repositorio</span>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Home;
