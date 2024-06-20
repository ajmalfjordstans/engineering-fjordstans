import About from "@/components/home/about";
import Article from "@/components/home/article";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Works from "@/components/home/works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Works />
      <Article />
      <Contact />
    </div>
  );
}
