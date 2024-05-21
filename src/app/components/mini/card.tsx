import { StarIcon } from '@/assets/icons/star-icon';
import Link from 'next/link';
import React from 'react'

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

const Card: React.FC<propsType> = (item) => {
  return (
    <div className='py-[15px] px-[12px] bg-whiteColor2 rounded-[3px] max-w-[327px] h-[158px] mb-[15px] w-[100%] flex items-start gap-[15px] group ' >
        <div className='relative ' >
            <img className='max-w-[130px] w-[100%] ml-auto mr-auto block opacity-100 transition-opacity duration-500 group-hover:opacity-0  ' src={item.images[0].image} alt="image" />
            <img className='max-w-[130px] w-[100%] ml-auto mr-auto absolute top-[0px] block opacity-0 transition-opacity duration-500 group-hover:opacity-100  '  src={item.images[1].image} alt="image" />
        </div>
        <div>
            <Link href={`/shop-single/${item.id}`} >
            <h2 className='font-semibold text-[18px] text-productText hover:underline ' >{item.title}</h2>
            </Link>
            <div className=' flex items-center gap-[5px] pt-[10px] pb-[10px] ' >
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
            <strong className='text-[18px] font-extrabold' >${item.price}</strong>
        </div>
    </div>
  )
}

export default Card