import RatingStars from "@/components/RatingStars";
import axios from "axios";
import Image from "next/image";

const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const Page = async ({ params: { slug } }) => {
  const product = await getProductById(slug);

  return (
    <main className='flex justify-center'>
      <div className='max-w-[1200px] w-full m-5 sm:m-10 flex justify-center'>
        {product ? (
          <section className='flex flex-col md:flex-row gap-5 sm:gap-10 md:gap-20'>
            <article>
              <div className='w-full h-full'>
                <Image
                  className='w-full h-full object-cover object-center rounded-lg'
                  src={product.images[0]}
                  alt={product.title}
                  width={300}
                  height={300}
                />
              </div>
            </article>
            <article>
              <h3 className='text-3xl max-[450px]:text-2xl'>{product.title}</h3>
              <p className='text-base mt-3 mr-20 lg:mr-28 sm:text-lg'>
                {product.description}
              </p>
              <div className='text-2xl sm:text-4xl font-bold mt-5'>
                <span>${product.price}</span>
              </div>
              <div className='flex gap-3 items-center mt-5 sm:mt-10'>
                <span className='text-base sm:text-xl'>Rating:</span>
                <span className='flex gap-1 sm:gap-3'>
                  <RatingStars
                    rating={product.rating}
                    starClassName='w-5 sm:w-7 h-5 sm:h-7'
                  />
                </span>
              </div>
              <div className='flex gap-3 mt-3 text-base sm:text-xl'>
                <span>Stock:</span>
                <span>{product.stock}</span>
              </div>
              <div className='flex gap-5 mt-3 text-base sm:text-xl'>
                <span className='text-violet-400 bg-violet-400/20 py-1 px-3 rounded'>
                  {product.brand}
                </span>
                <span className='text-violet-400 bg-violet-400/20 py-1 px-3 rounded'>
                  {product.category}
                </span>
              </div>
            </article>
          </section>
        ) : (
          <h4 className='text-center bg-white/10 rounded p-5'>
            Este producto ya no esta disponible
          </h4>
        )}
      </div>
    </main>
  );
};

export default Page;
