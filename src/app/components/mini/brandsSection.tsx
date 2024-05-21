import React from "react";
import { getBrand } from "@/service/getBrand";
import BrandSlider1 from "./brand-slider1";
import BrandSlider2 from "./brandSlider2";

const BrandsSection = async () => {
  const brands = await getBrand();
  return (
    <div>
      <div>
        <div className="max-w-[1300px] w-[100%] ml-auto mr-auto mb-[40px] " >
          <BrandSlider1>
            {brands.results.map((brand) => (
              <div key={brand.id}>
                <img
                  className="w-[100px] h-[100px] rounded-[50%] overflow-hidden "
                  src={brand.image}
                  alt="image"
                />
              </div>
            ))}
          </BrandSlider1>
        </div>
        <div className="max-w-[1140px] w-[100%] ml-auto mr-auto pb-[75px]" >
          <BrandSlider2>
            {brands.results.slice(8).map((brand) => (
              <div key={brand.id}>
                <img
                  className="w-[100px] h-[100px] rounded-[50%] overflow-hidden "
                  src={brand.image}
                  alt="image"
                />
              </div>
            ))}
          </BrandSlider2>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
