"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const MiniHeaderSup = () => {
  const { count } = useSelector((state: any) => state.product);
  const { likeCount } = useSelector((state: any) => state.like);
  const { data } = useSession();
  const [open, setOpen] = React.useState(false);

  const GoogleSign = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  return (
    <div className=" hidden md:flex items-center gap-[30px]">
      {data && data.user ? (
        <button onClick={() => setOpen(true)}>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-[30px] h-[30px] mb-[5px] "
              alt={String(data?.user?.name)}
              src={String(data?.user?.image)}
            />
            <p className="text-linkColor font-medium text-[18px] ">Profile</p>
          </div>
        </button>
      ) : (
        <div className="flex flex-col items-center" onClick={GoogleSign}>
          <FaRegUser className="text-3xl text-linkColor mb-[5px]" />
          <p className="text-linkColor font-medium text-[18px] ">Login</p>
        </div>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full mb-[35px] "
                src={String(data?.user?.image)}
                alt="image"
              />
            </div>
            <strong className="text-[20px] text-black font-bold">
              Name:
              <span className="text-[18px] font-normal">
                {data?.user?.name}
              </span>
            </strong>
            <strong className="text-[20px] text-black block mb-[25px] ">
              Email: <span className="text-[18px]">{data?.user?.email}</span>
            </strong>
            <div className="flex justify-center">
              <button
                className="py-[8px] px-[25px] mt-[20px] font-medium rounded-[8px] bg-red-500  text-white text-[18px] hover:bg-red-400 mr-0"
                onClick={() => signOut()}
              >
                Log out
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Link href={"/wishlist"} className="group">
        <div className="flex flex-col items-center relative ">
          <FaRegStar className="text-3xl text-linkColor mb-[5px] group-hover:text-mainColor " />
          <p className="text-linkColor font-medium text-[18px] group-hover:text-mainColor group-hover:underline ">
            Favorites
          </p>
          {likeCount ? (
            <span className="absolute top-[-10px] right-[-1px] w-[25px] h-[25px] bg-mainColor rounded-full text-white font-bold flex items-center justify-center text-[14px]">
              {likeCount}
            </span>
          ) : null}
        </div>
      </Link>
      <Link href={"/cart"} className="group">
        <div className="flex flex-col items-center relative ">
          <IoBagRemoveOutline className="text-3xl text-linkColor mb-[5px] group-hover:text-mainColor  " />
          <p className="text-linkColor font-medium text-[18px] group-hover:text-mainColor group-hover:underline ">
            My Cart
          </p>
          {count ? (
            <span className="absolute top-[-10px] right-[-3px] w-[25px] h-[25px] bg-mainColor rounded-full text-white font-bold flex items-center justify-center text-[14px]">
              {count}
            </span>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default MiniHeaderSup;
