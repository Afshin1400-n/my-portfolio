import { Suspense } from "react";
import type { ReactElement } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Navbar />
        <Skill />

        <Suspense
          fallback={
            <div className="text-center py-20 text-neutral-500">
              Loading projects...
            </div>
          }
        >
          <Product />
        </Suspense>

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}