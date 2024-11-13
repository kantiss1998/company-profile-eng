'use client';

import { useState } from 'react';
import Image from 'next/image';

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer ${img.span || ''}`}
            onClick={() => openModal(img)}
          >
            <div className="relative w-full pt-[100%]">
              <Image
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                width={800}
                height={800}
                priority={index < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full mx-auto">
            <button 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 bg-white rounded-full shadow-md text-xl z-50"
              onClick={closeModal}
            >
              ×
            </button>
            
            <div className="relative">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                width={1200}
                height={800}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {selectedImage.alt}
              </h2>
              {selectedImage.description && (
                <p className="text-gray-600 text-sm">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;