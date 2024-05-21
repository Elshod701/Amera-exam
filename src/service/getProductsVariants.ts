interface ProductVariantType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    is_available: boolean;
    title: string;
    description: string;
    category: string;
    images: {
      image: string;
      order: number;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price:  number;
    price_with_discount: string;
    quantity: number;
    userCount: number;
    userPrice: number;
  }[];
}

export const getProductsVariants = async (
  id: string
): Promise<ProductVariantType> => {
  try {
    const response = await fetch(
      `http://135.181.108.207/product_variant/?product__category=${id}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
