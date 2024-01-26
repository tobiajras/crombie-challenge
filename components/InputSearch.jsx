import { useRouter } from "next/navigation";
import { useState } from "react";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products?query=${search}`);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className='appearance-none bg-transparent  border-b border-teal-500'
        value={search}
        onChange={(e) => handleInputChange(e)}
        type='text'
        placeholder='Macbook Pro...'
      />
    </form>
  );
};

export default InputSearch;
