type VendorFacilitiesObject = {
  vendor_info: {
    address: string | null;
    google_map_location: string | null;
  };
  vendor_category: string;
  vendor_options: string[];
  features: string[];
};

type DecorationThemeObject = {
  _id: string;
  name: string;
  description: string;
};

type SeremonyMomentObject = {
  _id: string;
  name: string;
  description: string;
};

type SpecialExperienceObject = {
  _id: string;
  name: string;
  description: string;
};

export type PackageMetadataResponse = {
   metadata: {
    openGraph: {
      type: string;
      title: string;
      description: string;
    };
    slug: string;
    title: string;
    description: string;
  };
  _id: string;
}

export type SinglePackageType = {
  metadata: {
    openGraph: {
      type: string;
      title: string;
      description: string;
    };
    slug: string;
    title: string;
    description: string;
  };
  _id: string;
  event_categories: {
    _id: string;
    name: string;
    slug: string;
  };
  package_name: string;
  venue_types: {
    _id: string;
    name: string;
    code: string;
  };
  recommended: number;
  include_venue: boolean;
  include_catering: boolean;
  quantity_pax: number;
  facilities: VendorFacilitiesObject[];
  normal_price: number;
  sale_price: number;
  package_theme: {
    _id: string;
    name: string;
    slug: string;
  };
  banner_image: string;
  decoration_themes: DecorationThemeObject[];
  images: string[] | [];
  package_description: string | null;
  package_overview: string | null;
  seremony_moments: SeremonyMomentObject[] | [];
  special_experience: SpecialExperienceObject[] | [];
};

export type EventPackagesGroupByThemeTypeResponse = {
  package_theme?: string;
  packages: SinglePackageType[];
};

export type SingleSeremonyEvent = {
  _id: string;
  name: string;
  banner_image: string;
  slug: string;
  event_start: {
    date: string;
    time: string;
  };
  event_end: {
    date: string;
    time: string;
  };
  event_location: {
    location_name: string;
    address: string;
    gmap_url: string;
  };
}