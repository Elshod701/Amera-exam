interface BrandType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    image: string;
    title: string;
  }[];
}

export const getBrand = async (): Promise<BrandType> => {
  try {
    const response = await fetch("http://135.181.108.207/brand/");
    if (!response.ok) {
      throw new Error("Failed to fetch brands");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch brands");
  }
};
