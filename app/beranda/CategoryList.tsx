import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { EventCategoryType } from './homePageServices';

type Props = {
  categories: EventCategoryType[]
}

const CategoryList = ({
  categories,
}: Props) => {
  return (
    <div className="mx-auto mt-12">
      <h2 className="text-4xl font-semibold text-center text-black">Ragam Kategori Event</h2>
      <div className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {categories.map((event, idx) => {
            return (
              <Link href={`/katalog/${event.slug}`} key={`event-category_${idx}`} className="flex flex-col items-center justify-center gap-2 group">
                <Image
                  src={`/icons/category-icon-${event.icon}`}
                  alt={event.slug}
                  height={48}
                  width={48}
                  className="h-12 w-auto group-hover:scale-120 transition-all ease-in-out duration-300"
                />
                <h3 className="text-center text-[20px] tracking-tight group-hover:text-primary-orange transition-all ease-in-out duration-300">{event.name}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryList