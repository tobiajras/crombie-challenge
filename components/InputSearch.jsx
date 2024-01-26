"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const InputSearch = () => {
  const params = useSearchParams();
  const queryParam = params.get("query");

  const [search, setSearch] = useState(queryParam ? queryParam : "");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?query=${search}`);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  return (
    <form
      className='w-full flex justify-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className='appearance-none outline-none bg-white py-3 px-5 rounded text-lg sm:text-2xl w-full sm:w-[500px] text-black'
        value={search}
        onChange={(e) => handleInputChange(e)}
        type='text'
        placeholder='Macbook Pro...'
      />
    </form>
  );
};

export default InputSearch;
