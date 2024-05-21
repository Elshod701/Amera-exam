import React from "react";
import { getProductsVariant } from "@/service/getProductVariant";
import { StarIcon } from "@/assets/icons/star-icon";
import { SaleIcon } from "@/assets/icons/sale-icon";
import Link from "next/link";

export default async function ProductNewCard() {
  const data = await getProductsVariant();
  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  return (
    <>
      {data.results.map((product) => (
        <div
          key={product.id}
          className="2xl:max-w-[735px] xl:max-w-[735px] lg:max-w-[635px] md:max-w-[535px] sm:max-w-[435px] max-w-[450px]  w-[100%]  bg-whiteColor2 py-[30px] pl-[20px] pr-[28px] "
        >
          <div className="flex md:flex-row lg:flex-row  xl:flex-row  2xl:flex-row  flex-col gap-[50px]">
            <div>
              <img
                className="w-[315px] h-[315px] object-cover relative "
                src={product.images[0].image}
                alt="image"
              />
              <div className="absolute top-[45px] pl-[10px]">
                <SaleIcon />
              </div>
            </div>
            <div>
              <span className=" font-normal text-[12px] text-linkColor mb-[10px] ">
                Best Products
              </span>
              <Link href={`/shop-single/${product.id}`}>
                <p className=" font-medium text-[20px] text-productText mb-[12px] hover:underline ">
                  {truncateText(product.title, 30)}
                </p>
              </Link>
              <div className="flex items-center gap-[3px] mb-[10px] ">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="text-[22px] font-bold mb-[5px] ">
                $ {product.price}
              </p>
              <p className="text-[15px] font-medium text-linkColor mb-[15px] max-w-[350px]">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit eorum claritatem. Investigationes…
              </p>
              <strong className="font-semibold text-[16px] mb-[10px] ">
                Hurry up! Special offer:{" "}
              </strong>
              <div className="flex items-center gap-[10px] pt-[10px]">
                <div className=" bg-[#F0F1F3] dark:bg-[#606162] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[16px] font-semibold dark:text-[#dad7d7] ">
                      420
                    </p>
                    <p className="text-[11px] text-linkColor">DAYS</p>
                  </div>
                </div>
                <div className=" bg-[#F0F1F3] dark:bg-[#606162] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[16px] font-semibold dark:text-[#dad7d7] ">
                      17
                    </p>
                    <p className="text-[11px] text-linkColor">HRS</p>
                  </div>
                </div>
                <div className=" bg-[#F0F1F3] dark:bg-[#606162] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[16px] font-semibold dark:text-[#dad7d7] ">
                      36
                    </p>
                    <p className="text-[11px] text-linkColor">MINS</p>
                  </div>
                </div>
                <div className=" bg-[#F0F1F3] dark:bg-[#606162] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[16px] font-semibold dark:text-[#dad7d7] ">
                      12
                    </p>
                    <p className="text-[11px] text-linkColor">SEC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
