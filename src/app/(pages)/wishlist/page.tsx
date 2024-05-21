"use client";
import LikeItem from "@/app/components/mini/like-item";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { TiStarFullOutline } from "react-icons/ti";

const WishlistPage = () => {
  const { likeItem } = useSelector((state: any) => state.like);
  const { likeCount } = useSelector((state: any) => state.like);
  return (
    <div className="bg-bodyColor">
      <div className="pt-[30px] pb-[50px]">
        <div className="container">
          {likeItem.length ? (
            <div>
              <h1 className="font-medium text-[30px]  mb-[25px] ">
                Featured Products:{" "}
                <span className="font-extrabold">{likeCount}</span>
              </h1>
              <div className="flex items-start  justify-center gap-[21px] flex-wrap" >
                {likeItem.map((item: any) => (
                  <LikeItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center mb-[10px]">
                <TiStarFullOutline className="text-4xl text-mainColor " />
              </div>
              <div>
                <h1 className="font-extrabold text-[28px] text-center ">
                  The cart is empty
                </h1>
                <p className="font-semibold text-[15px] text-center mb-[20px] ">
                  But you can always fill it
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href={"/"}
                  className="py-[10px] px-[18px] bg-mainColor rounded-[8px] text-[15px] font-semibold text-buttonColor "
                >
                  To the main page
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
