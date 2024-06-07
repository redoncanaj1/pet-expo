import React from "react";
import { Link } from "react-router-dom";
const Pet = ({ name, img }) => (
   <div className="w-6 relative group py-2">
     <img src={img} className="w-full" />
     <p className="absolute right-0 top-2 mr-[-100%] transition-all duration-500 ease-in-out transform group-hover:ml-0 text-black text-sm opacity-0 group-hover:opacity-100">{name}</p>
   </div>
 );


const Home =() => {


 return <div className="my-12 px-2 sm:px-8 text-center">
<div className="w-full flex text-center justify-between">
   <div className="w-[80vw] justify-center sm:w-1/2">
   <span className="font-bold text-3xl text-center uppercase">
         Your destination <br/> for pets happines
   </span>

   <p className="my-4">
   Welcome to Pet-Expo!<br/>
   Discover a world dedicated to our furry, feathered, and scaly friends. At Pet-Expo, we celebrate all animals, providing you with the latest information, resources, and community for pet enthusiasts. Explore tips, guides, and stories that make pet ownership joyful and fulfilling. Join us in creating a loving environment for pets everywhere!
   </p>
   <button>
   <a href="/contact" className="text-white text-center bg-orange-400 p-2 flex items-center justify-center rounded-xl w-32">Contact Us</a>
   </button></div>
      <div className="w-1/2 hidden sm:block ml-12 flex justify-start">
        <img src="./Img/dog_cat-p.png"></img>
   </div>
</div>

<div className="w-[80vw] sm:w-full">
   <div className="flex items-center justify-center mt-5 text-2xl font-bold mb-4">
      <p>
        Our Pets
      </p>
   </div>



   <div className="flex md:flex-row flex-col sm:flex m-5 justify-center items-center h-full gap-8 md:gap-32">
   <div className="h-full">
   <Link to="/gallery/dogs">
  <button className=" hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black p-4 rounded transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out">
    <img src="/Img/category/dog.png" className="rounded-xl ease-in-out object-cover h-40"></img>
    <p className="font-serif font-bold bg-clip-text text-Black pt-4 text-xl font-black transform ">
      Dogs
    </p>
  </button>
  </Link>
</div>
<div className="h-full">
<Link to="/gallery/cats">
<button className=" hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black p-4 rounded transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out">
    <img src="/Img/category/Cat.png" className="  rounded-xl ease-in-out object-cover h-40"></img>
    <p className="font-serif font-bold bg-clip-text text-black pt-4 text-xl font-black transform ">
      Cats
    </p>
  </button>
  </Link>
</div><div className="h-full">
<Link to="/gallery/birds">
<button className=" hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black p-4 rounded transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out">
    <img src="/Img/category/Bird.png" className="rounded-xl ease-in-out object-cover h-40"></img>
    <p className="font-serif font-bold bg-clip-text text-black pt-4 text-xl font-black transform ">
      Birds
    </p>
  </button>
  </Link>
</div>
   </div>
</div>
 </div>


 
}
export default Home;

