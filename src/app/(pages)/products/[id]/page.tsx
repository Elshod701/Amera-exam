import { NextPage } from "next";
import React, { Suspense } from "react";
import { getProductsVariants } from "@/service/getProductsVariants";
import dynamic from "next/dynamic";
import img from "../../../../../public/noProductImg.png";
const ProductCard2 = dynamic(
  () => import("@/app/components/mini/product-card2"),
  {
    ssr: false,
  }
);
const Products: NextPage<{ params: { id: string } }> = async ({ params }) => {
  const data = await getProductsVariants(params.id);


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-bodyColor">
        <section className="py-[50px]">
          <div className="container">
            <div>
              {data.results.length ? (
                <div className=" flex items-start gap-[20px] flex-wrap">
                  {data.results.map((product) => (
                    <ProductCard2 {...product} />
                  ))}
                </div>
              ) : (
                <div>
                  <h1 className="font-bold text-[30px] text-mainColor text-center pl-[50px] ">
                    Product Not Found
                  </h1>
                  <img
                    className="ml-auto mr-auto w-[450px] h-[450px] "
                    src={img.src}
                    alt="image"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default Products;
