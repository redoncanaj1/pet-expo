import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home =() => {


 return <div>



     <div className="items-center h-full">
      <div className="">
         <p className="absolute sm:mt-36 p-4 m-4  sm:block text-white w-1/3 text-xs sm:text-sm md:text-base lg:text-2xl xl:text-2xl color-white font-bold mt-50">
         Everything Your Pet Need
        
         <a href="/gallery" className="text-white mt-4 sm:mt-8 bg-orange-400 p-2 flex items-center  justify-center rounded-xl w-32 lg:text-xl xl:text-xl">Show More</a>
         </p> </div>
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <img src="/Img/About.png"></img>
      </div>
      </div>

      <div>
         <p>
         </p>

      </div>
      <div>
   <div className="flex items-center justify-center mt-5 text-2xl font-bold font-serif mb-4">
      <p >
Our Products
      </p>
   </div>
   <div className="flex m-5 text-center items-center h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center h-full"> 
        <img className="transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-auto" src="/Img/Acc1.png" alt="Pets Vaccination"></img>
        <p className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-xl font-black mt-2">Pets Vaccination</p>  
        <p className="mt-5 text-teal-700 decoration-slate-100 font-serif text-center px-4">Pet-Expo, we offer a range of vaccines to protect your furry friends from common illnesses and diseases. Our experienced team provides gentle and professional care, giving you peace of mind and your pets a healthier life. Schedule your pet’s vaccination today and keep them safe and happy!</p>
    </div>
    <div className="flex flex-col items-center h-full"> 
        <img className="transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-auto" src="/Img/Acc2.png" alt="Quality Pet Food"></img>
        <p className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-xl font-black mt-2">Quality Pet Food</p>  
        <p className="mt-5 text-teal-700 decoration-slate-100 font-serif text-center px-4">From premium dog kibble to organic cat treats, we offer a wide range of food options to suit every pet's dietary needs. Explore our range and give your pets the nutrition they deserve!</p>
    </div>
    <div className="flex flex-col items-center h-full"> 
        <img className="transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-auto" src="/Img/Acc3.png" alt="Cozy Beds & Furniture"></img>
        <p className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-xl font-black mt-2">Cozy Beds & Furniture</p>  
        <p className="mt-5 text-teal-700 decoration-slate-100 font-serif text-center px-4">At Pet-Expo, we understand the importance of comfort and relaxation for pets. That's why we offer a stylish and functional range of beds, sofas, and scratching posts designed to cater to their needs. Give your pets the ultimate lounging experience and add a touch of comfort to your home.</p>
    </div>
    <div className="flex flex-col items-center h-full"> 
        <img className="transition duration-300 ease-in-out hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-auto" src="/Img/Acc4.png" alt="Pet Care Essentials"></img>
        <p className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-xl font-black mt-2">Pet Care Essentials</p>  
        <p className="mt-5 text-teal-700 decoration-slate-100 font-serif text-center px-4">Equip yourself with everything you need to care for your beloved pets with our range of essential supplies. At Pet-Expo, we offer a curated selection of grooming tools, hygiene products, and healthcare essentials to keep your furry friends happy and healthy. From brushes to flea treatments, we have everything you need to provide top-notch care for your pets.</p>
    </div>
</div>
 
</div>
 </div>


 
}
export default Home;

