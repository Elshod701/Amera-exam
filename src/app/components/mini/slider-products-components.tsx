
import React from "react";
import { ProductSlider } from "./product-slider";
import ProductNewCard from "./product-new-card";
import { getProductsVariant2 } from "@/service/getProductVariant2";
import CarouselSup from "./carousel-sup";



export const SliderProductsComponents = async () => {
  const product2 = await getProductsVariant2();
  return (
    <div className="mb-[65px]" >
      <div className="container">
      <div className="flex items-start  justify-center gap-[26px] flex-wrap  ">
        <div>
          <div className="flex items-center gap-[15px] mb-[30px]">
            <h2 className="font-light text-[23px] ">
              <strong className=" font-extrabold text-[23px] ">
                Top Flash{" "}
              </strong>
              Deals
            </h2>
            <span className="max-w-[455px] w-[100%] h-[2px] bg-borderColor block"></span>
          </div>
          <div className="max-w-[290px] md:max-w-[450px] lg:max-w-[650px] xl:max-w-[690px]   w-[100%] ">
            <ProductSlider>
              <ProductNewCard />
            </ProductSlider>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[15px] mb-[28px]">
            <h2 className="font-light text-[23px]">
              <strong className="font-bold text-[22px] ">Recent </strong>
              Products
            </h2>
            <span className="max-w-[370px] w-[100%] h-[2px] bg-borderColor block"></span>
          </div>
          <div className="max-w-[220px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[620px]  w-[100%]  ">
              <CarouselSup {...product2} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
