import CTA from "@/componens/CTA";

import Footer from "@/componens/Footer";
import Hero from "@/componens/Hero";
import Navbar from "@/componens/Navbar";
import Process from "@/componens/Process";
import Products from "@/componens/Products";
import Showroom from "@/componens/Showroom";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Process/>
      <Products/>
      <CTA/>

      <Showroom/>
      
      <Footer/>

      
     
    </div>
  );
}
