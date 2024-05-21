import { removeLikeItem } from "@/redux/reducers/like-product-reducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./product-modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RootState } from "@/redux/store";
import { add, remove } from "@/redux/reducers/product-reducer";
import { toast } from "@/components/ui/use-toast";

interface propsType {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  description: string;
  category: string;
  product: number;
  attribute_value: [];
  images: {
    order: number;
    image: string;
  }[];
  userCount: number;
  userPrice: number;
  other_detail: string;
  price_with_discount: string;
  quantity: number;
}

const LikeItem = (product: propsType) => {
  const dispatch = useDispatch();
  const removeLike = (id: number) => {
    dispatch(removeLikeItem({ id }));
    console.log(true);
  };

  const { products } = useSelector((state: RootState) => state.product);
  const myCard = products.find((item) => item.id === product.id);

  const deleteProduct = (id: number) => {
    dispatch(remove({ id }));
  };

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  const addProduct = () => {
    try {
      dispatch(add(product));
      toast({
        title: "Product successfully added!",
      });
    } catch (e) {
      toast({
        title: "Error!",
      });
      console.log(e);
    }
  };

  return (
    <div>
      <div
        key={product.id}
        className="w-[250px]   h-[339px] bg-whiteColor2 group rounded-[5px] overflow-hidden relative  "
      >
        <div>
          <div>
            <img
              className="w-[223px] h-[223px] ml-auto mr-auto object-contain block opacity-100 transition-opacity duration-500 group-hover:opacity-0"
              src={product.images[0]?.image}
              alt="image"
            />
            <img
              className="w-[223px] h-[223px] ml-auto mr-auto object-contain absolute left-[15px] top-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              src={product.images[1]?.image}
              alt="image"
            />
            <div className=" flex-col gap-[15px]  group-hover:flex absolute top-[15px] right-[10px] group-hover:translate-x-0 translate-x-[50px] group-hover:duration-300 duration-300  ">
              <ProductModal {...product} />
              <button onClick={() => removeLike(product.id)} className="w-[40px] h-[40px] bg-bodyColor border-[1px] border-borderColor text-[18px] hover:border-none hover:bg-mainColor flex items-center justify-center rounded-[50%] ">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
          <div className="p-[15px]">
            <div className="group-hover:hidden">
              <h1 className=" font-medium text-[14px] text-productText text-center ">
                {truncateText(product.title, 30)}
              </h1>
              <strong className="text-[18px] font-extrabold flex items-center justify-center text-buttonColor">
                ${product.price}
              </strong>
            </div>
            {!myCard ? (
              <div className="pt-[15px] border-t-[1px] border-mainColor  flex items-center justify-center transition-all duration-500 group-hover:duration-500 group-hover:translate-y-0 translate-y-[70px]  ">
                <button
                  onClick={() => addProduct()}
                  className="py-[7px] px-[30px] bg-mainColor rounded-[30px] "
                >
                  Add To Cart
                </button>
              </div>
            ) : (
              <div className="pt-[15px] border-t-[1px] border-red-500  flex items-center justify-center transition-all duration-500 group-hover:duration-500 group-hover:translate-y-0 translate-y-[70px]  ">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="py-[7px] px-[30px] bg-red-500 dark:text-textColor text-textColor rounded-[30px] "
                >
                  Remove To Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
