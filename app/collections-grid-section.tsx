"use client";
import { useEffect, useState } from "react";
import DataService, { CollectionType } from "./data-service";
import Collection from "./collection";

const title = "Our Collections";

export default function CollectionsGridSection() {
  const [collections, setCollections] = useState<CollectionType[]>([]);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await DataService.getCollections();
        setCollections(response);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    }
    fetchCollections();
  }, []);

  useEffect(() => {
    console.log(collections);
  }, [collections]);

  return (
    <div className="collections justify-start w-screen p-4 flex flex-col text-neutral-900 mb-4">
      <h1 className="font-semibold sm:text-5xl text-3xl mb-4">{title}</h1>
      {collections.length && (
        <div className="collections-container flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
          {collections.map((collection, index) => (
            <Collection
              key={collection.collection_id}
              collection={collection}
              size={index > 0 ? "small" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
