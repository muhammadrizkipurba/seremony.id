'use client'

import { SinglePackageType } from "@/types";
import PackageCard from "./PackageCard";
import { useCallback, useEffect, useState } from "react";

type Props = {
  packagesData: SinglePackageType[];
  venueTypeOptions: {
    label: string;
    value: string;
  }[]
};

type SortByType = {
  label: string;
  value: "recommended" | "price";
};

type FilterVenueType = {
  label: string;
  value: string;
};

const PackageCardList = ({
  packagesData,
  venueTypeOptions,
}: Props) => {

  const [filterVenue, setFilterVenue] = useState<FilterVenueType | null>(null);
  const [sortBy, setSortBy] = useState<SortByType>({label: "Recommended", value: "recommended"});

  const renderedData = useCallback(async() => {
    let result = [];
    if(filterVenue) {
      result = packagesData.filter(item => item.venue_types)
    };
  }, []);

  useEffect(() => {
    renderedData();
    return () => {}
  }, [])

  return (
    <div>
      {packagesData.length > 0 ?
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {packagesData.map((packageData: SinglePackageType, idx: number) => {
            // const { NEXT_PUBLIC_API_URL } = process.env;
            return (
              <PackageCard
                key={`package-${idx}-${packageData._id}`}
                packageData={packageData}
                bannerImage={packageData.banner_image ? `https://admin.seremony.id/api/images/banners/${packageData.banner_image}` : "/images/package_banner.png"}
              />
            )
          })}
        </div>
        : null}
    </div>
  )
}

export default PackageCardList