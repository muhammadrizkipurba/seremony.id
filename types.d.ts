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

export type EventSitemapResponse = {
  _id: string;
  slug: string;
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
};

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
};

export type VendorDecisionChangeLog = {
  _id: string;
  booking_code: string;
  meeting_phase: string;
  previous_data: {
    vendor_category_code: string | null;
    vendor_category_label: string | null;
    vendor_name: string | null;
    status: "locked" | "pending" | "waiting_confirmation" | "waiting_vendor";
    notes: string | null;
  },
  current_data: {
    vendor_category_code: string;
    vendor_category_label: string;
    vendor_name: string | null;
    status: "locked" | "pending" | "waiting_confirmation" | "waiting_vendor";
    notes: string | null;
  },
  updated_date: string;
  updated_by: string;
};

export type ChangeOrderSummary = {
  _id: string;
  booking_code: string;
  meeting_phase: string;
  vendor_category_code: string;
  vendor_category_label: string;
  vendor_name: string;
  item_name: string;
  status: "locked" | "pending" | "waiting_confirmation" | "waiting_vendor";
  notes: string | null;
  is_new_request: boolean;
  inquiry_date: string;
  approval_date: string | null;
  price_impact: number;
};

export type SingleMeetingDataProps = {
  code: string;
  title: string;
  agendas: {
    name: string;
    description: string;
  }[];
  meeting_date: string;
  meeting_location: string;
};

type EventDataResponse = {
    event_date: string;
    total_pax: number;
    event_location: string;
    event_concept: string;
    decoration_dominant_color: string;
    maximum_budget: number;
    contract_value: number;
    package_type: "package" | "custom";
    package_id: {
      _id: string;
      package_name: string;
    };
};

export type DecitionLockDataType = {
  vendor_category_code: string;
  vendor_category_label: string;
  vendor_name: string;
  status: string;
  notes: string;
  last_update_meeting_phase: string;
  approval_date: string;
  _id: string;
};

export type BookingDataResponse = {
  event_data: EventDataResponse;
  _id: string;
  booking_code: string;
  inquiry_date: string;
  event_date_estimation: string;
  decision_lock_vendors: DecitionLockDataType[];
  meeting_tracker_id: {
    _id: string;
    meeting_data: {
      code: string;
      title: string;
      meeting_date: string;
      meeting_location: string;
      agendas: {
        name: string;
        description: string;
        _id: string;
      }[];
      _id: string;
    }[];
    change_logs: VendorDecisionChangeLog[];
    change_order_summary: ChangeOrderSummary[];
  };
  production_tracker_id: {
    _id: string;
    trackers: {
      vendor_category_code: string;
      vendor_category_label: string;
      vendor_name: string;
      stages: {
        phase: string;
        tasks: {
          name: string;
          status: string;
          notes: string;
          image: string;
          _id: string;
        }[];
        _id: string;
      }[];
      _id: string;
    }[];
  };
};
