import Image from "next/image";
import React from "react";
import InputSearch from "./InputSearch";
import Link from "next/link";

import { RiContactsFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex justify-center m-12">
      <article className="w-full">
        <Link href="/" className="flex items-center justify-center mt-5">
          <span>
            <Image
              src="/assets/crombie-logo.jpeg"
              alt="crombie-logo"
              width={80}
              height={80}
            />
          </span>
          <span className="text-3xl">Crombie Challenge</span>
        </Link>
        <InputSearch />
        <div className="flex gap-10 justify-center mt-6 text-white/70">
          <Link
            className="flex items-center gap-2 text-xl"
            href="https://tobiasajras.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiContactsFill />
            <span>Tobias Ajras</span>
          </Link>
          <Link
            className="flex items-center gap-2 text-xl"
            href="https://github.com/tobiajras/crombie-challenge"
            target="_blank"
            rel="noopener noreferrer"
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
