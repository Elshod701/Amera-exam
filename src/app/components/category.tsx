import React from "react";
import { getCategory } from "@/service/getCategory";

export default async function CategorySub() {
  const data = await getCategory();
  return (
    <div>
      <div className=" flex items-start justify-center flex-wrap mb-[50px] " >
        {data.results.slice(0,10).map((category) => (
          <div className="p-[20px] border-borderColor border-[1px] w-[267.2px] h-[140px] bg-whiteColor2 flex items-center justify-between " key={category.id} >
            <div>
              <h1 className="text-[14px] font-semibold hover:text-mainColor " >{category.title}</h1>
              <p className="text-[14px] font-normal text-linkColor" >({category.children.length} items)</p>
            </div>
            <img className="w-[80px] h-[80px]" src={category.image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
