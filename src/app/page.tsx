import { getBanner } from "@/service/getBanner";
import { SliderLine } from "./components/mini/slider";
import { getCategory } from "@/service/getCategory";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { TruckIcon } from "@/assets/icons/truck-icon";
import { CardIcon } from "@/assets/icons/card-icon";
import { PayIcon } from "@/assets/icons/pay-icon";
import { MessageIcon } from "@/assets/icons/message-icon";
import { FigureIcon } from "@/assets/icons/figure-icon";
import CategorySub from "./components/category";
import { SliderProductsComponents } from "./components/mini/slider-products-components";
import SubCategorySection from "./components/mini/subCategorySection";
import BrandsSection from "./components/mini/brandsSection";

export default async function Home() {
  const data = await getBanner();
  const categoryData = await getCategory();

  return (
    <div className="bg-bodyColor">
      <section>
        <div className="container">
          <div className=" flex  items-start gap-[30px] py-[30px] ">
            <div className="w-[275px] bg-whiteColor2 hidden lg:block xl:block 2xl:block  py-[18px] px-[20px] rounded-[3px] ">
              <div className=" flex items-center gap-[16px] border-b pb-[18px]">
                <TfiMenuAlt className="text-2xl" />
                <strong className="text-[15px] font-medium text-linkColor">
                  SHOP BY DEPARTMENT
                </strong>
              </div>
              <Menubar className="h-[460px] overflow-y-scroll  ">
                {categoryData.results.map((category) => (
                  <div key={category.id}>
                    <MenubarMenu>
                      <div className="p-[10px] border-b">
                        <MenubarTrigger>{category.title}</MenubarTrigger>
                      </div>
                      {category.children.length > 0 ? ( 
                        
                      <MenubarContent className="w-[700px] ml-[250px]  relative h-[400px] overflow-y-scroll px-[60px] py-[40px] ">
                      <div>
                        {category.children.map((child) => (
                          <div key={child.id} className="flex">
                            <Link href={`/products/${child.id}`}>
                              <h2 className=" hover:text-mainColor hover:underline text-[18px] font-semibold text-linkColor  mb-[10px]">
                                {child.title}
                              </h2>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <img
                        src={category.image}
                        className="w-[200px] h-[200px] absolute bottom-[20px] right-[50px] "
                        alt="image"
                      />
                    </MenubarContent>
                      ): null}
                    </MenubarMenu>
                  </div>
                ))}
              </Menubar>
            </div>
            <div className="2xl:max-w-[1030px] xl:max-w-[945px] lg:max-w-[780px]  w-[100%]">
              <SliderLine>
                {data.results.map((banner) => (
                  <div className=" relative " key={banner.id}>
                    <img
                      src={banner.image}
                      alt="image"
                      className=" w-full rounded-[3px] h-[539px] object-cover  "
                    />
                    <h1 className="absolute top-20 left-20  text-[60px] font-semibold  text-whiteColor">
                      {banner.title}
                    </h1>
                    <strong
                      dangerouslySetInnerHTML={{ __html: banner.description }}
                      className=" max-w-[550px] w-full absolute top-[170px] left-20 text-[20px] font-medium text-whiteColor"
                    ></strong>
                  </div>
                ))}
              </SliderLine>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="flex items-center justify-center gap-[40px] py-[30px] px-[50px] bg-whiteColor2 mb-[30px] flex-wrap ">
            <div className="flex items-center gap-3  ">
              <TruckIcon />
              <div>
                <strong className="font-bold text-[13px] text-linkColor ">
                  FREE DELIVERY
                </strong>
                <p className=" text-[12px] font-normal text-linkColor ">
                  Free all ordersover $120
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3  ">
              <CardIcon />
              <div>
                <strong className="font-bold text-[13px] text-linkColor ">
                  SAFE PAYMENT
                </strong>
                <p className=" text-[12px] font-normal text-linkColor ">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3   ">
              <PayIcon />
              <div>
                <strong className="font-bold text-[13px] text-linkColor ">
                  SHOP WITH CONFIDENCE
                </strong>
                <p className=" text-[12px] font-normal text-linkColor ">
                  If goods have problems{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3  ">
              <MessageIcon />
              <div>
                <strong className="font-bold text-[13px] text-linkColor ">
                  24/7 HELP CENTER
                </strong>
                <p className=" text-[12px] font-normal text-linkColor ">
                  Dedicated 24/7 support
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pr-[25px] ">
              <FigureIcon />
              <div>
                <strong className="font-bold text-[13px] text-linkColor ">
                  FRIENDLY SERVICES
                </strong>
                <p className=" text-[12px] font-normal text-linkColor ">
                  30 day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-[20px] mb-[55px] justify-center flex-wrap ">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3  place-content-center  gap-[10px]   ">
              <div className="max-w-[486px] w-[100%] relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner11.jpg"
                  alt=""
                  className="max-w-[486px] w-[100%]  h-auto relative z-0 rounded-lg transition-all duration-300"
                />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </div>
              <div className="max-w-[486px] w-[100%] relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner12.jpg"
                  alt=""
                  className="max-w-[486px] w-[100%] h-auto relative z-0 rounded-lg transition-all duration-300"
                />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </div>
              <div className="max-w-[486px] w-[100%] relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="	https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner13.jpg"
                  alt=""
                  className="max-w-[486px] w-[100%] h-auto relative z-0 rounded-lg transition-all duration-300"
                />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-between gap-[12px] mb-[30px] ">
              <h2 className="text-[23px] font-light text-nowrap ">
                <strong className=" font-bold text-[23px]">
                  Top Categories{" "}
                </strong>
                Of The Month
              </h2>
              <span className="max-w-[990px] w-[100%] h-[2px] bg-borderColor block"></span>
            </div>
            <div>
              <CategorySub />
            </div>
          </div>
        </div>
      </section>
      <section>
        <SliderProductsComponents />
      </section>
      <section className="mb-[55px]">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  place-content-center  gap-[10px] ">
            <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner14.jpg"
                alt=""
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300"
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
            <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner15.jpg"
                alt=""
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300"
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SubCategorySection />
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3  place-content-center  gap-[10px]  mb-[60px] ">
            <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
              <img
                src="	https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner16.jpg"
                alt=""
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300"
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
            <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
              <img
                src="	https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner17.jpg"
                alt=""
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300"
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
            <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://demo.lion-themes.net/amera/wp-content/uploads/2019/07/banner18.jpg"
                alt=""
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300"
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <BrandsSection />
        </div>
      </section>
    </div>
  );
}
