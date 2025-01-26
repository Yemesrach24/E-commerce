import Link from "next/link";
import Header from "./component/Header";
import axios from "axios";
import Image from "next/image";

async function fetchData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;  
  } catch (error) {
    console.error("Fetching error", error);
    return null;
  }
}

export default async function Home() {
  const products = await fetchData();

  return (
 <main>
    <div className="container mx-auto py-10 px-4">
 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    
      {products.map((product) => (
      <div
        key={product.id}
        className="flex flex-col justify-between items-center border border-gray-200 rounded-lg shadow-xl cursor-pointer p-6 bg-white transition-all duration-300 ease-in-out hover:shadow-2xl"
      >
    
        <div className="w-full h-48 mb-4 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={200} 
            height={200} 
            className="object-contain" 
          />
        </div>
        
        
        <p className="font-serif font-bold text-lg text-center mt-4 mb-2">{product.title}</p>

    
        <p className="text-lg font-semibold text-gray-800 mb-4">${product.price}</p>

  
        <Link href={`/product/${product.id}`}>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded-md w-full mt-auto transition-all duration-300 ease-in-out">
            Details
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>


    </main>
  );
}
