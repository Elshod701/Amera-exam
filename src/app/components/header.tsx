import React from "react";
import { OperatorIcon } from "@/assets/icons/operator-icon";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LogoIcon } from "@/assets/icons/logo-icon";
import BottomButton from "./mini/bottomButton";
import dynamic from "next/dynamic";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import InputSup from "./mini/input-sup";
const ModeToggle = dynamic(() => import("../../components/mode-toggle"), {
  ssr: false,
});

const MiniHeaderSup = dynamic(() => import("./mini/mini-header-sup"), {
  ssr: false,
});

const Header = async () => {
  return (
    <div className="w-full fixed bg-whiteColor2 z-10">
      <div className="border border-b hidden md:block  ">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <p className="text-[16px] text-linkColor font-normal ">
              Welcome to Worldwide Electronics Store
            </p>
            <div className="flex items-center gap-[20px]">
              <ul className="flex items-center ">
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] text-linkColor font-normal px-[20px]  border-r-[1px] border-r-[#666] "
                  >
                    My account
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] text-linkColor font-normal px-[20px]  border-r-[1px] border-r-[#666] "
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] text-linkColor font-normal px-[20px]  border-r-[1px] border-r-[#666] "
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/wishlist"}
                    className="text-[16px] text-linkColor font-normal px-[20px] "
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-b">
        <div className="container">
          <div className="flex items-center justify-between  py-[27px] ">
            {/* <img src={logo.src} alt="logo" /> */}
            <Link href={"/"}>
              <LogoIcon />
            </Link>
            <Drawer direction="left">
              <DrawerTrigger className=" md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center gap-[15px] ">
                <ModeToggle />
                <GiHamburgerMenu className="text-3xl  " />
              </DrawerTrigger>
              <DrawerContent className="h-screen w-[350px] sm:w-[350px] md:w-[550px] lg:w-[850px] rounded-none p-[10px] ">
                <div className="flex items-center justify-between p-2 border-mainColor border-[1px] my-[20px]  ">
                  <Input
                    className="outline-none border-none "
                    placeholder="Search Products..."
                  />
                  <Button className="text-buttonColor bg-transparent  ">
                    Search
                  </Button>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      HOME
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      SHOP
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      BLOG
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      PORTFOLIO
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      PAGE
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500 ">
                      CONTACT
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-buttonColor font-bold underline-none hover:text-mainColor transition-all duration-500  ">
                      YOUR RECENTLY VIEWED
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DrawerContent>
            </Drawer>

            <div className=" hidden xl:flex items-center gap-[12px]">
              <OperatorIcon />
              <div className="h-[50px]  items-center flex-col ">
                <p className="text-linkColor text-[15px] mb-[7px] font-normal">
                  Hotline Free:
                </p>
                <strong className="text-linkColor">06-900-6789-00</strong>
              </div>
            </div>
            <div>
              <InputSup />
            </div>
            <MiniHeaderSup />
          </div>
        </div>
      </div>
      <BottomButton />
    </div>
  );
};

export default Header;
