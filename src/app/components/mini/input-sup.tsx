"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface typeForSearch {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    order: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: string;
  quantity: number;
}

const InputSup = () => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<typeForSearch[]>([]);
  const [active, setActive] = useState<boolean>(true);

  const location = window.location.pathname;

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    return () => {
      setValue("");
    };
  }, [location]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://135.181.108.207/product_variant/?search=${debouncedSearch}`,
          {
            next: { revalidate: 100 },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data.results);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    if (debouncedSearch.length > 1) {
      getData();
    }
  }, [debouncedSearch]);

  return (
    <div>
      <div className=" relative hidden max-w-[450px] w-[100%] border-[2px] border-mainColor rounded-[30px] h-[60px]  overflow-hidden lg:flex items-center justify-between ">
        <Input
          onChange={(e) => {
            setValue(e.target.value);
            setSearch(e.target.value);
          }}
          value={value}
          className="w-[100%] border-none outline-none bg-transparent text-[18px] font-medium pl-[20px] "
          placeholder="Search..."
        />
        <Button className="bg-mainColor text-buttonColor h-[100%] rounded-l-none px-10  font-semibold text-[18px]  ">
          Search
        </Button>
      </div>
      {value.length >= 2 && (
        <div className="absolute top-[180px] max-w-[500px] h-auto  overflow-y-scroll left-[55%] translate-x-[-45%] py-[25px] px-[20px] border-[2px] border-mainColor rounded-[30px] w-[100%] bg-white">
          {value.length >= 2 ? (
            data.length > 0 ? (
              data.map((item) => (
                <Link href={`/shop-single/${item.id}`}>
                  <div
                    key={item.id}
                    className="flex items-center gap-[50px] border-[1px] py-[20px] px-[25px] border-mainColor rounded-[10px] mb-[10px] "
                  >
                    <div>
                      <img
                        className="w-[80px] h-[80px]"
                        src={item.images[0].image}
                        alt="image"
                      />
                    </div>
                    <div>
                      <Link href={`/shop-single/${item.id}`}>
                        <h2 className="text-[18px] font-semibold hover:underline hover:text-mainColor">
                          {item.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-[18px] font-semibold text-mainColor text-center ">
                No products found
              </p>
            )
          ) : null}
        </div>
      )}
    </div>
  );
};

export default InputSup;
