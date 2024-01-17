"use client";

import Image from "next/image";
import { urlForImage } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImg, setBigImg] = useState(images[0]);

  const handleImageClick = (image: any) => {
    setBigImg(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: any) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg bg-gray-100 h-[150px]"
          >
            <Image
              src={urlForImage(image).url()}
              alt=""
              className="h-full w-full object-cover object-center cursor-pointer"
              width={200}
              height={200}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-[500px]">
        <Image
          src={urlForImage(bigImg).url()}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg px-3 py-1.5 text-sm uppercase tracking-wider text-white bg-red-500">
          Sale
        </span>
      </div>
    </div>
  );
}
