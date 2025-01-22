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
  const products = await fetchData( );
  return (
    <main>
      <Header/>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
       {products.map((product) => (
         <div className="flex flex-col justify-center items-center border shadow-xl cursor-pointer py-10 px-8 m-4" key={product.id}>
          <p className="text-2xl text-ellipsis-violet-500 pt-5 font-serif font-bold ">{product.title}</p>
          
           < Link href={`/product/${product.id}`}>

             <Image 
             
             src={product.image} 
             alt={product.title} 
             width={200} 
             height={200} 
            
            className="cursor-pointer hover:scale-105 transition-all duration-300 border border-spacing-4 rounded-sm h-70 w-auto"/>

           </Link>

          <p>${product.price} </p>
           
           <Link href={'/detailProductspage'}> 
              <button className="px-10 py-2 bg-violet-400 rounded-md hover:bg-violet-300 border border-violet-500 shadow-md transition-all duration-300  pb-4">Explore</button>
           </Link>

         </div>
       ))} 
      
      </div>
    </main>
  )
  
}
