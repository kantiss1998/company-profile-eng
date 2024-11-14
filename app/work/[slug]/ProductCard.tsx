'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    material: string;
    deskripsi: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    if (!isPopupVisible) {
      setIsPopupVisible(true);
      setTimeout(() => setAnimationClass('popup-active'), 1000);
    } else {
      setAnimationClass('');
      setTimeout(() => setIsPopupVisible(false), 300); // Match transition duration
    }
  };

  useEffect(() => {
    if (isPopupVisible && cardRef.current && popupRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      popupRef.current.style.setProperty('--start-top', `${cardRect.top}px`);
      popupRef.current.style.setProperty('--start-left', `${cardRect.left}px`);
      popupRef.current.style.setProperty('--start-width', `${cardRect.width}px`);
      popupRef.current.style.setProperty('--start-height', `${cardRect.height}px`);
    }
  }, [isPopupVisible]);

  return (
    <div className="relative">
      <motion.div 
        ref={cardRef}
        className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={togglePopup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover object-center"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">Size: {product.material}</p>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div 
            ref={popupRef}
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${animationClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePopup}
          >
            <motion.div 
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto popup-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              layoutId={`product-${product.name}`}
            >
              <motion.button 
                onClick={togglePopup}
                className="float-right text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div 
                  className="md:w-1/2"
                  layoutId={`product-image-${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
                <div className="md:w-1/2">
                  <motion.h2 
                    className="text-2xl font-bold mb-4"
                    layoutId={`product-name-${product.name}`}
                  >
                    {product.name}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Size: {product.material}
                  </motion.p>
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Deskripsi:
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {product.deskripsi}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .popup-content {
          transition: all 0.5s ease-out;
          opacity: 0;
          transform: scale(0.8);
        }
        .popup-active .popup-content {
          opacity: 1;
          transform: scale(1);
        }
        .fixed {
          transition: all 0.5s ease-out;
          clip-path: inset(
            calc(var(--start-top) * 1px) 
            calc(100% - var(--start-left) * 1px - var(--start-width) * 1px) 
            calc(100% - var(--start-top) * 1px - var(--start-height) * 1px) 
            calc(var(--start-left) * 1px)
          );
        }
        .popup-active {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
    </div>
  );
}

