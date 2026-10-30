/**
 * HiveShield B2B — Core Beekeeping OEM/ODM Domain Types
 * Single Source of Truth for Storefront, 5-Step OEM Studio, Pricing & CBM Calculators
 */

export type BeekeepingCategorySlug =
  | "full-ventilated-suits"
  | "pullover-jackets-smocks"
  | "goatskin-apiary-gloves"
  | "replacement-veils-hoods"
  | "youth-commercial-suits";

export type FabricMaterialCode =
  | "AIRMESH_3LAYER_360GSM"   // 4.5mm 3-layer poly/EVA spacer mesh (flagship)
  | "AIRMESH_ULTRALIGHT_320GSM" // 4.0mm tropical commercial mesh
  | "COTTON_TWILL_310GSM"     // 100% ring-spun unbleached/optic white heavy cotton
  | "POLYCOTTON_260GSM"       // 65/35 commercial apiary blend
  | "GOATSKIN_DRUM_DYED_09MM" // Grade-A supple queen-handling leather
  | "COWHIDE_SPLIT_12MM";     // Heavy duty commercial sting-proof leather

export type VeilStyleCode =
  | "FENCING_COLLAPSIBLE"     // Front-hinged dual-ring collapsible fencing hood
  | "ROUND_BRIM_360"          // Self-supporting 360-degree brimmed hat & veil
  | "SHERIFF_DUAL_RING"       // Structured commercial sheriff style
  | "DUAL_INTERCHANGEABLE";   // Shipped with BOTH Fencing + Round veils in carry bag

export type ZipperHardwareCode =
  | "YKK_BRASS_5_HEAVY"       // Heavy-duty #5 metal brass zippers (20+ yr lifespan)
  | "YKK_ACETAL_5_DELRIN"     // Smooth molded polyacetal resin zippers
  | "STANDARD_NYLON_COIL";    // Economy commercial coil zipper

export type BrandingMethodCode =
  | "EMBROIDERY_DIRECT_CHEST" // Flat high-density stitch logo (up to 12,000 stitches)
  | "EMBROIDERY_BACK_YOKE"    // Large commercial apiary name across upper back
  | "SILICONE_PVC_RUBBER_PATCH" // Stitched 3D washable rubber badge
  | "WOVEN_APPLIQUE_PATCH"    // Merrowed-edge woven badge
  | "HEAT_TRANSFER_REFLECTIVE"; // High-vis reflective transfer for night pollination crews

export type GarmentColorZoneId =
  | "main_body"
  | "knee_elbow_reinforcement"
  | "pocket_trim_flaps"
  | "veil_mesh_trim"
  | "wrist_ankle_cuffs";

export type SuitSizeCode =
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "2XL"
  | "3XL"
  | "4XL"
  | "5XL_TALL";

export type IncotermCode = "EXW" | "FOB" | "CIF" | "DDP";

export interface PantoneColorSwatch {
  id: string;
  name: string;        // e.g., "Optic Apiary White", "Unbleached Raw Cotton", "Olive Sage"
  hex: string;         // e.g., "#F8FAFC"
  pantoneCode: string; // e.g., "Pantone 11-0601 TCX"
  isStandardStock: boolean; // True = 50 MOQ, False = custom vat dye (150 MOQ)
}

export interface VolumePriceTier {
  minQty: number;
  maxQty: number | null; // null represents 500+ or 1000+ open-ended tier
  fobUnitUsd: number;
  leadTimeDays: number;
}

export interface MasterCartonSpec {
  lengthCm: number;           // Standard: 60 cm
  widthCm: number;            // Standard: 40 cm
  heightCm: number;           // Standard: 40 cm
  unitsPerCarton: number;     // 15 pcs for 3-Layer AirMesh Suits, 80 pairs for Gloves
  cartonTareWeightKg: number; // 1.2 kg double-wall 5-ply export corrugated box
}

export interface BeekeepingTechnicalSpec {
  fabricCode: FabricMaterialCode;
  fabricComposition: string;   // e.g., "100% Polyester 3-Layer Spacer Mesh + EVA Core"
  fabricWeightGsm: number;     // e.g., 360
  meshThicknessMm: number;     // e.g., 4.5 (Honeybee stinger is 1.5 - 3.0mm)
  veilMeshCount: string;       // e.g., "18x16 Flame-Retardant Matte Black Fiberglass"
  stitchIsoClass: string;      // e.g., "ISO 4915 Class 301 & 401 Safety Overlock (12 SPI)"
  zipperSpec: ZipperHardwareCode;
  ceCertification: string;     // e.g., "CE Category II PPE (EU) 2016/425 | EN ISO 13688:2013"
  hsCode: string;              // e.g., "6211.33.00" or "4203.29.00"
  reinforcedZones: string[];   // e.g., ["Kevlar Hive-Tool Holster", "Padded Knees", "Thumb Stirrups"]
}

export interface BeekeepingProduct {
  id: string;
  sku: string;
  slug: string;
  title: string;
  shortSummary: string;
  category: BeekeepingCategorySlug;
  moqMinimum: number;
  samplePriceUsd: number;
  sampleRefundableOnBulk: boolean;
  unitWeightKg: number;
  masterCarton: MasterCartonSpec;
  priceTiers: VolumePriceTier[];
  technicalSpec: BeekeepingTechnicalSpec;
  availableVeils: VeilStyleCode[];
  availableColors: PantoneColorSwatch[];
  recommendedRetailUsd: number; // Used by MOQ Margin Calculator to show distributor ROI
  galleryImages: string[];
  isFlagship: boolean;
}

export interface BrandingPlacementItem {
  zoneId: "left_chest" | "right_chest" | "back_shoulder_yoke" | "left_sleeve" | "thigh_holster";
  method: BrandingMethodCode;
  artworkFileUrl?: string;
  widthCm: number;
  heightCm: number;
  pantoneThreadOrInkColors: string[];
}

export interface PrivateLabelTrimSelection {
  customWovenNeckLabel: boolean;     // +$0.25/pc
  customHangtag600Gsm: boolean;      // +$0.30/pc
  fbaBarcodeZipPolybag: boolean;     // +$0.35/pc
  zipperedCanvasCarryTote: boolean;  // +$1.60/pc (Beekeepers love storing suits in canvas bags)
}

export interface OemTechPackConfiguration {
  referenceNumber: string; // e.g., "TP-HIVE-2026-0104"
  baseProductSlug: string;
  customBrandStyleName: string;
  fabricCode: FabricMaterialCode;
  veilStyle: VeilStyleCode;
  zipperHardware: ZipperHardwareCode;
  zoneColors: Record<GarmentColorZoneId, PantoneColorSwatch>;
  brandingPlacements: BrandingPlacementItem[];
  privateLabelTrim: PrivateLabelTrimSelection;
  includeKneePads: boolean;
  includeMetalHiveToolPocket: boolean;
  sizeQuantities: Record<SuitSizeCode, number>;
  specialFactoryNotes?: string;
}

