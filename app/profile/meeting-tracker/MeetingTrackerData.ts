import { SingleMeetingDataProps } from "@/types";

const DecisionLockStatusOptions = [
  { value: "pending", label: "pending"},
  { value: "waiting_client_confirmation", label: "Waiting Client Confirmation"},
  { value: "waiting_vendor_confirmation", label: "Waiting Vendor Confirmation"},
  { value: "locked", label: "Locked"}
];

const LeadInformation = {
  customer_id: {
    _id: "1",
    name: "Zainal",
    phone: "81263909779",
  },
  source: "vendor",
  vendor_name: "Sahaja by Fata",
  inquiry_date: "19-02-2026",
  target_event_date: "03-05-2026"
};

const EventData = {
  booking_id: "SR0004",
  event_date: "03-05-2026",
  event_location: "Hall Padang Sidempuan",
  estimate_total_pax: 3000,
  event_concept: "Wedding nasional",
  decoration_dominant_color: "Putih Biru",
  maximum_budget: 200000000,
  contract_value: 203000000,
  package_id: null,
};

const VendorPreferences = [
  {
    category_value: "venue",
    category_label: "Venue",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "wedding_organizer",
    category_label: "Wedding Organizer",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "decoration",
    category_label: "Dekorasi & Styling",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "main_catering",
    category_label: "Catering Utama",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "additional_catering",
    category_label: "Catering Tambahan",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "documentation",
    category_label: "Dokumentasi",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "mua",
    category_label: "Make Up Artist",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "hairdo_bride",
    category_label: "Hairdo Bride",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "hairdo_groom",
    category_label: "Hairdo Groom",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "henna",
    category_label: "Henna",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "attire_bride",
    category_label: "Attire Bride",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "attire_groom",
    category_label: "Attire Groom",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "prosesi_adat",
    category_label: "Adat / Prosesi Adat",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "entertainment_musik",
    category_label: "Entertainment / Musik",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "penari_performance",
    category_label: "Penari / Performance",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "mc",
    category_label: "MC / Host",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "lightning",
    category_label: "Lighting",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "sound_system",
    category_label: "Sound System",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "multimedia",
    category_label: "Multimedia / LED / Screen",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "undangan_fisik",
    category_label: "Undangan Fisik",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "undangan_digital",
    category_label: "Undangan Digital",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "souvernir",
    category_label: "Souvenir / Merchandise",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "wedding_cake",
    category_label: "Wedding Cake",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "seremony_sweet_bar",
    category_label: "Seremony Sweet Bar",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  },
  {
    category_value: "photobooth",
    category_label: "Photobooth / Interactive Exp",
    status: "pending",
    client_reference: null,
    locked_vendor_name: null,
    notes: "",
    is_shown: true,
  }
];

const MeetingsData: SingleMeetingDataProps[] = [
  {
    code: "m0",
    title: "M0 - DISCOVERY, NEED ASSESSMENT & QUOTATION PREPARATION",
    agendas: [
      {
        name: "Discovery kebutuhan acara",
        description: "Menggali kebutuhan dasar acara dari klien"
      },
      {
        name: "Eksplorasi konsep acara",
        description: "Menggali kebutuhan dasar acara dari klien"
      },
      {
        name: "Eksplorasi venue preference",
        description: "Memahami tipe venue yang diinginkan"
      },
      {
        name: "Eksplorasi budget range",
        description: "Mengetahui estimasi budget klien"
      },
      {
        name: "Penjelasan layanan Seremony",
        description: "Menjelaskan paket dan sistem kerja Seremony"
      }
    ],
    changes_log: [
      {
        category_value: "",
        updated_date: "",
        updated_by: "",
        diff: {
          status: "",
          notes: "",
          value: ""
        }
      }
    ],
    change_order_summary: [
      {
        item_name: "",
        description: "",
        price_impact: 0,
      }
    ]
  },
  {
    code: "m1",
    title: "M1 - ALIGNMENT & VENDOR LOCK",
    agendas: [
      {
        name: "Review kebutuhan acara, vendor recommendation, dan arah konsep awal",
        description: "Menyelaraskan kebutuhan klien dengan quotation awal, memastikan vendor recommendation sesuai kebutuhan, serta menyepakati arah konsep awal acara"
      },
      {
        name: "Presentasi moodboard draft",
        description: "Memberikan gambaran visual awal konsep acara kepada klien"
      },
      {
        name: "Konfirmasi vendor utama",
        description: "Vendor utama disepakati untuk diproses booking dan DP"
      },
      {
        name: "Penjelasan tahapan berikutnya",
        description: "Menjelaskan proses pengembangan moodboard menuju konsep final di M2"
      }
    ],
    changes_log: [
      {
        category_value: "",
        updated_date: "",
        updated_by: "",
        diff: {
          status: "",
          notes: "",
          value: ""
        }
      }
    ],
    change_order_summary: [
      {
        item_name: "",
        description: "",
        price_impact: 0,
      }
    ]
  },
  {
    code: "m2",
    title: "M2 - FINAL CONCEPT & MOODBOARD CONFIRMATION",
    agendas: [
      {
        name: "Review keputusan M1, vendor recommendation, dan arah konsep",
        description: "Menyelaraskan kembali seluruh keputusan M1 termasuk vendor yang telah dipilih, perubahan paket, dan arah konsep acara"
      },
      {
        name: "Presentasi moodboard final",
        description: "Menjelaskan konsep visual final acara termasuk ambience, styling, dan nuansa acara"
      },
      {
        name: "Presentasi konsep acara & moments",
        description: "Menjelaskan flow acara dan pengalaman tamu dari kedatangan hingga closing"
      },
      {
        name: "Konfirmasi revisi vendor",
        description: "Menyepakati vendor tambahan atau upgrade vendor jika ada"
      },
      {
        name: "Penjelasan tahap berikutnya",
        description: "Menjelaskan bahwa konsep akan diterjemahkan menjadi desain 3D dan technical planning di M3"
      }
    ],
    changes_log: [
      {
        category_value: "",
        updated_date: "",
        updated_by: "",
        diff: {
          status: "",
          notes: "",
          value: ""
        }
      }
    ],
    change_order_summary: [
      {
        item_name: "",
        description: "",
        price_impact: 0,
      }
    ]
  },
  {
    code: "m3",
    title: "M3 - FINAL DESIGN & TECHNICAL ALIGNMENT",
    agendas: [
      {
        name: "Review keputusan M1 & M2",
        description: "Menyelaraskan kembali seluruh keputusan vendor, konsep acara, dan perubahan yang telah disepakati sebelumnya"
      },
      {
        name: "Presentasi desain 3D final",
        description: "Menunjukkan visualisasi detail venue, dekorasi, dan layout acara"
      },
      {
        name: "Technical alignment vendor",
        description: "Menjelaskan detail teknis masing-masing vendor seperti layout, lighting, multimedia, flow acara"
      },
      {
        name: "Presentasi rundown acara",
        description: "Menjelaskan flow acara secara detail dari persiapan hingga closing"
      },
      {
        name: "Konfirmasi final keputusan",
        description: "Mengunci seluruh keputusan vendor, konsep, dan kebutuhan acara sebelum technical meeting M4"
      }
    ],
    changes_log: [
      {
        category_value: "",
        updated_date: "",
        updated_by: "",
        diff: {
          status: "",
          notes: "",
          value: ""
        }
      }
    ],
    change_order_summary: [
      {
        item_name: "",
        description: "",
        price_impact: 0,
      }
    ]
  },
];

export { DecisionLockStatusOptions, EventData, VendorPreferences, MeetingsData };