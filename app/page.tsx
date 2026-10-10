import type { ReactElement } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";
import Product from "./component/Product";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";

export default function Home(): ReactElement {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-neutral-900 antialiased selection:bg-lime-400 selection:text-black">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero ===== */}
      <Hero />

      {/* ===== Marquee ===== */}
      <Navbar />

      {/* ===== Skills ===== */}
      <Skill />

      {/* ===== Projects ===== */}
      <Product />

      {/* ===== About ===== */}
      <About />

      {/* ===== Contact ===== */}
      <Contact />

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}