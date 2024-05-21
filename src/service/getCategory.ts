interface CategoryType {
  count: number;
  next: string;
  previous: string;
  results: {
      id: number;
      title: string;
      image: string;
      children: {
        id:number;
        title:string;
        image:string;
      }[];
  }[];
}

export const getCategory = async (): Promise<CategoryType> => {
  try {
    const response = await fetch("http://135.181.108.207/category/", {next: {revalidate: 10}});
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
