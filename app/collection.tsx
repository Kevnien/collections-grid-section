import Image from "next/image";
import type { CollectionType } from "./data-service";

interface CollectionProps {
  collection: CollectionType;
  size?: "small";
}

const smallClasses = "h-[25vh] sm:row-span-1 sm:h-auto";
const largeClasses = "h-[50vh] sm:row-span-2 sm:h-[50vh]";

export default function Collection({ collection, size }: CollectionProps) {
  return (
    <div
      className={`collection-item flex flex-col items-center relative p-4 hover:scale-105 focus:scale-105 transition-transform duration-200 ${
        size === "small" ? smallClasses : largeClasses
      }`}
      tabIndex={0}
      aria-label={`Collection: ${collection.name}`}
    >
      <Image
        src={collection.image_url}
        alt={collection.name}
        className="rounded-md object-cover"
        fill
      />
      <div className="collection-item__text absolute bottom-0 left-0 p-3">
        <h2 className="text-white text-xs">{collection.name}</h2>
        <p className="text-white text-md font-semibold">
          {collection.description}
        </p>
      </div>
    </div>
  );
}
