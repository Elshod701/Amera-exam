import { NextPage } from "next";
import React from "react";
import { getSingleProduct } from "@/service/getSingleProduct";
import { StarIcon } from "@/assets/icons/star-icon";
import SingleProductSlider from "@/app/components/mini/singleProductSlider";

  import dynamic from "next/dynamic";

  const SingleProductButton = dynamic(
    () => import("@/app/components/mini/single-product-button"),
    {
      ssr: false,
    }
  );

const SingleProduct: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getSingleProduct(params.id);

  return (
    <div>
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-wrap items-start justify-center  gap-[80px]">
            <div>
              <div className="max-w-[300px] sm:max-w-[500px] w-[100%]">
                {data.images.length === 1 ? (
                  <img
                    className="max-w-[450px] w-[100%]"
                    src={data.images[0].image}
                  />
                ) : (
                  <SingleProductSlider>
                    {data.images.map((image) => (
                      <div className="flex justify-center items-center" >
                        <img
                        className="max-w-[280px] sm:max-w-[420px]  w-[100%]"
                        src={image.image}
                        alt="image"
                      />
                      </div>
                    ))}
                  </SingleProductSlider>
                )}
              </div>
              <div className="flex items-start gap-[20px] flex-wrap">
                {data.images.slice(1).map((image) => (
                  <img
                    className="max-w-[80px] w-[100%] mt-[50px] border-[1px] border-borderColor rounded-[5px] p-[5px] "
                    src={image.image}
                    alt="image"
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className=" font-normal text-[38px]">{data.title}</h1>
              <div className=" flex items-center gap-[5px] pt-[15px] pb-[15px] ">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <strong className="font-bold text-[28px] mb-[15px] block ">
                ${data.price}
              </strong>
              <div
                className="max-w-[780px] w-[100%] text-[16px] font-semibold text-linkColor "
                dangerouslySetInnerHTML={{ __html: data.other_detail }}
              ></div>
              <div >
                <SingleProductButton product={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
