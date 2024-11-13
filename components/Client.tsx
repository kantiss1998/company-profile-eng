"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "./Button";

interface Product {
  name: string;
  product: string;
  image: string;
  isnew: string;
  link: string;
}

const data: Product[] = [
  {
    name: "Ultrafine",
    product: "Plain Hijab",
    image: "https://i.imgur.com/kcKyGUn.jpeg",
    isnew: "New",
    link: "work/polos",
  },
  {
    name: "Rubiya",
    product: "Plain Hijab",
    image: "https://i.imgur.com/rZWQbL6.jpeg",
    isnew: "New",
    link: "work/polos",
  },
  {
    name: "Silky Versace",
    product: "Plain Hijab",
    image: "https://i.imgur.com/mXeaxB6.jpeg",
    isnew: "Hot",
    link: "work/polos",
  },
  {
    name: "Product",
    product: "Hijab Digital Print",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "New",
    link: "work/motif",
  },
  {
    name: "Product",
    product: "Hijab Digital Print",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "Hot",
    link: "work/motif",
  },
  {
    name: "Product",
    product: "Hijab Digital Print",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "New",
    link: "work/motif",
  },
  {
    name: "Product",
    product: "Pashmina & Bergo",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "Hot",
    link: "work/pashminaBergo",
  },
  {
    name: "Product",
    product: "Prayer Set",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "New",
    link: "work/prayerset",
  },
  {
    name: "Product",
    product: "Apparel",
    image: "https://i.imgur.com/x6uAkV8.jpeg",
    isnew: "New",
    link: "work/apparel",
  },
];

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 3;
  const totalPages = Math.ceil(data.length / productsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage >= data.length
        ? 0
        : prevIndex + productsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - productsPerPage < 0
        ? Math.max(data.length - productsPerPage, 0)
        : prevIndex - productsPerPage
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mt-24 rounded-4xl bg-[#eee7f6] py-2 shadow-md sm:mt-20 sm:py-10 lg:mt-20"
      style={{ boxShadow: "0px -4px 10px #dfd2eb, 0px 4px 10px #dfd2eb" }}
    >
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-neutral-950 mb-4 sm:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A Glimpse of Our Products
          </motion.h2>
          <Link href={"/work"}>
            <Button className="text-base sm:text-base underline" invert>
              See More
            </Button>
          </Link>
        </div>
        <div className="relative">
          <AnimatePresence initial={false}>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 z-50">
              {data
                .slice(currentIndex, currentIndex + productsPerPage)
                .map((product, index) => (
                  <motion.li
                    key={`${product.name}-${currentIndex + index}`}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FadeIn>
                      <Link href={product.link} passHref>
                        <div className="group relative w-full h-64 overflow-hidden rounded-3xl bg-neutral-100 shadow-lg transform transition duration-300 hover:scale-105">
                          <Image
                            alt={product.name}
                            src={product.image}
                            fill
                            style={{ objectFit: "cover" }}
                            className="transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-xl font-semibold tracking-wide text-white">
                              {product.name}
                            </p>
                            <p className="mt-2 text-sm text-white opacity-75">
                              {product.product}
                            </p>
                          </div>
                          <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold py-1 px-3 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {product.isnew}
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  </motion.li>
                ))}
            </ul>
          </AnimatePresence>
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button> */}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === Math.floor(currentIndex / productsPerPage)
                  ? "bg-purple-600"
                  : "bg-purple-300"
              }`}
              onClick={() => setCurrentIndex(index * productsPerPage)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProductSlider;
