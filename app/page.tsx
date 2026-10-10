

import Header from "./component/Header";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Gap from "./component/Gap";
import About from "./component/About";
import Contact from "./component/Contact";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#fafaf7] text-neutral-900 antialiased
     selection:bg-lime-400 selection:text-black">

      {/* ===== هدر ===== */}
      <Header />

      {/* ===== Hero ===== */}
      <Hero />

      {/* ===== نوار متحرک ===== */}
      <Navbar />

      {/* ===== مهارت‌ها ===== */}
      <Skill />

      {/* ===== پروژه‌ها ===== */}
      <Product/>

      {/* ===== درباره من ===== */}
      <About />

      {/* ===== CTA پایانی ===== */}
      <Gap />


<Contact />
      {/* ===== فوتر ===== */}
      <Footer />

    </div>
  );
}