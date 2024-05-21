interface SubCategoryType {
    count: number;
    next: string;
    previous: string;
    results: {
        id: string;
        title: string;
        image: string;
        price:string
    }[];
  }
  
  export const getSubCategory = async (): Promise<SubCategoryType> => {
    try {
      const response = await fetch("http://135.181.108.207/api/subcategory/?limit=8", {next: {revalidate: 10}});
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const banners = response.json();
      return banners;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  };
  