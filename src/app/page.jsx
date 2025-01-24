import Link from "next/link";
import Header from "./component/Header";
import axios from "axios";
import Image from "next/image";

async function fetchData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;  // Return the product data
  } catch (error) {
    console.error("Fetching error", error);
    return null;
  }
}

export default async function Home() {
  const products = await fetchData();

  return (
    <main>
    
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {products.map((product) => (
          <div className="flex flex-col justify-center items-center border shadow-xl cursor-pointer py-10 px-8 m-4" key={product.id}>
            <p className="text-2xl text-ellipsis-violet-500 pt-5 font-serif font-bold ">{product.title}</p>
            <Image 
                src={product.image} 
                alt={product.title} 
                width={200} 
                height={200} 
                className="cursor-pointer hover:scale-105 transition-all duration-300 border border-spacing-4 rounded-sm h-70 w-auto"
              />
             
            <p>${product.price}</p>

            <Link href={`/product/${product.id}`}>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button>
           
            </Link>

          </div>
        ))}
      </div>
    </main>
  );
}
