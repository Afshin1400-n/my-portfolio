"use client"

import Header from "./component/Header";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Gap from "./component/Gap";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#fafaf7] text-neutral-900 antialiased
     selection:bg-lime-400 selection:text-black">

      {/* ===== هدر ===== */}
      <Header name="افشین نوروزی" home="خانه" product="پروؤه ها" about="درباره من" tel="تلفن"/>

      {/* ===== Hero ===== */}
      <Hero />

      {/* ===== نوار متحرک ===== */}
      <Navbar />

      {/* ===== مهارت‌ها ===== */}
      <Skill />

      {/* ===== پروژه‌ها ===== */}
      <Product/>

      {/* ===== CTA پایانی ===== */}
      <Gap />

      {/* ===== فوتر ===== */}
      <Footer />

    </div>
  );
}