"use client";

import { Image as ImageType } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Circle, CircleDot } from "lucide-react";

interface ImageCarouselProps {
  images: ImageType[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [curr, setCurr] = useState(0);

  function prevImage() {
    setCurr(curr === 0 ? images.length - 1 : curr - 1);
  }

  function nextImage() {
    setCurr(curr === images.length - 1 ? 0 : curr + 1);
  }

  return (
    <div className="relative">
      <div className="flex aspect-square overflow-hidden">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt="product image"
            className="object-cover aspect-square"
            width={800}
            height={800}
            style={{
              translate: `${-100 * curr}%`,
            }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div>
          <button
            className="group px-1 absolute left-0 transition inset-y-0 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-10"
            onClick={prevImage}
          >
            <ChevronLeft
              size={40}
              color="white"
              className="group-hover:scale-110"
            />
          </button>
          <button
            className="group px-1 absolute right-0 transition inset-y-0 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-10"
            onClick={nextImage}
          >
            <ChevronRight
              size={40}
              color="white"
              className="group-hover:scale-110 "
            />
          </button>
        </div>
      )}
      <div className="absolute bottom-0 pb-2 left-1/2 transform -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className="hover:scale-110 transition ease-in-out"
          >
            {curr === index ? (
              <CircleDot color="white" />
            ) : (
              <Circle color="white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
