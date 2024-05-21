"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import AutoPlay from "embla-carousel-autoplay";

import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("./product-card"), {
  ssr: false,
});
interface propstype {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    title: string;
    price: number;
    is_available: boolean;
    description: string;
    category: string;
    product: number;
    attribute_value: [];
    images: {
      order: number;
      image: string;
    }[];
    userCount: number;
    userPrice: number;
    other_detail: string;
    price_with_discount: string;
    quantity: number;
  }[];
}

const CarouselSup: React.FC<propstype> = (product2) => {
  return (
    <div>
      <Carousel plugins={[AutoPlay({ delay: 4000, stopOnInteraction: false })]}>
        <CarouselContent>
          {product2.results.map((product) => (
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3">
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block"> 
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSup;
