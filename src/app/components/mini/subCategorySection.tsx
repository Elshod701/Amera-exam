import React from "react";
import { getProductsVariants } from "@/service/getProductsVariants";
import { getSubCategory } from "@/service/getSubcategory";
import Card from "./card";
import ProductsSliderRow from "./products-slider-row";

const SubCategorySection = async () => {
  const subCategory = await getSubCategory();
  const subId = subCategory.results[0].id;
  const productVariant = await getProductsVariants(subId);
  return (
    <section>
      <div className="mb-[50px]" >
        <div className=" flex items-center gap-[15px] mb-[30px] ">
          <strong className="font-extrabold text-[24px]">
            {subCategory.results[0].title}{" "}
            <span className="font-normal text-[24px]">Products</span>
          </strong>
          <span className="max-w-[1093px] w-[100%] h-[2px] bg-borderColor block"></span>
        </div>
        <div className="flex items-start justify-between">
          <div className=" 2xl:block hidden lg:block    relative">
            <img
              className="max-w-[270px] w-[100%] h-[332px] object-cover object-center  "
              src={subCategory.results[0]?.image}
              alt="image"
            />
            <div className="absolute top-[20px] left-[20px]  flex items-center gap-[10px]">
              <p className=" font-bold text-[20px] ">Best Products</p>
              <span className="w-[25px] h-[5px] block  bg-black  "></span>
            </div>
          </div>
          <div className="max-w-[1050px]  w-[100%]">
            <ProductsSliderRow>
              {productVariant.results.map((product) => (
                <div>
                  <Card key={product.id} {...product}    />
                </div>
              ))}
            </ProductsSliderRow>
          </div>
        </div>
      </div>
      <div className="mb-[50px]" >
        <div className=" flex items-center gap-[15px] mb-[30px] ">
          <strong className="font-extrabold text-[24px]">
            {subCategory.results[0].title}{" "}
            <span className="font-normal text-[24px]">Products</span>
          </strong>
          <span className="max-w-[1093px] w-[100%] h-[2px] bg-borderColor block"></span>
        </div>
        <div className="flex items-start justify-between">
          <div className="max-w-[1050px]  w-[100%]">
            <ProductsSliderRow>
              {productVariant.results.map((product) => (
                <div>
                  <Card key={product.id} {...product} />
                </div>
              ))}
            </ProductsSliderRow>
          </div>
          <div className=" 2xl:block hidden lg:block   relative">
            <img
              className="max-w-[270px] w-[100%] h-[332px] object-cover object-center  "
              src={subCategory.results[0]?.image}
              alt="image"
            />
            <div className="absolute top-[20px] left-[20px]  flex items-center gap-[10px]">
              <p className=" font-bold text-[20px] ">Best Products</p>
              <span className="w-[25px] h-[5px] block  bg-black  "></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[50px]" >
        <div className=" flex items-center gap-[15px] mb-[30px] ">
          <strong className="font-extrabold text-[24px]">
            {subCategory.results[0].title}{" "}
            <span className="font-normal text-[24px]">Products</span>
          </strong>
          <span className="max-w-[1093px] w-[100%] h-[2px] bg-borderColor block"></span>
        </div>
        <div className="flex items-start justify-between">
          <div className=" 2xl:block hidden lg:block   relative">
            <img
              className="max-w-[270px] w-[100%] h-[332px] object-cover object-center  "
              src={subCategory.results[0]?.image}
              alt="image"
            />
            <div className="absolute top-[20px] left-[20px]  flex items-center gap-[10px]">
              <p className=" font-bold text-[20px] ">Best Products</p>
              <span className="w-[25px] h-[5px] block  bg-black  "></span>
            </div>
          </div>
          <div className="2xl:max-w-[1050px] xl:max-w-[1350px]  w-[100%]">
            <ProductsSliderRow>
              {productVariant.results.map((product) => (
                <div>
                  <Card key={product.id} {...product} />
                </div>
              ))}
            </ProductsSliderRow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategorySection;
