 export interface ProductVariantType {
  count: number;
  next: string;
  previous: string;
  results: {
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
  }[];
}

export const getProductsVariant = async (): Promise<ProductVariantType> => {
  try {
    const response = await fetch(`http://135.181.108.207/product_variant/?limit=3`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
