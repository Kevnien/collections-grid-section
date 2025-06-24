import collectionsData from "../data/collections.json";

const apiEndpoint =
  "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections";

export type CollectionType = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
};

const DataService = {
  async getCollections(): Promise<CollectionType[]> {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        console.error(new Error(`HTTP error! status: ${response.status}`));
        console.error("Using local data instead.");
        return collectionsData;
      }
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error("Failed to load collections:", error);
      return [];
    }
  },
};

export default DataService;
