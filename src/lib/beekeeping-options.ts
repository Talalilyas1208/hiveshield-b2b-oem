import {
  FabricMaterialCode,
  VeilStyleCode,
  VolumePriceTier,
  ZipperHardwareCode,
} from "@/types/beekeeping.types";

export const PRICE_TIERS: VolumePriceTier[] = [
  { minQty: 50, maxQty: 99, fobUnitUsd: 26.5, leadTimeDays: 18 },
  { minQty: 100, maxQty: 249, fobUnitUsd: 23.0, leadTimeDays: 21 },
  { minQty: 250, maxQty: 499, fobUnitUsd: 19.8, leadTimeDays: 25 },
  { minQty: 500, maxQty: null, fobUnitUsd: 17.5, leadTimeDays: 30 },
];

export interface SuitColorOption {
  id: string;
  name: string;
  hex: string;
}

export const SUIT_COLORS: SuitColorOption[] = [
  { id: "white", name: "Classic White", hex: "#FFFFFF" },
  { id: "natural", name: "Natural Cotton", hex: "#EDE6D6" },
  { id: "khaki", name: "Desert Khaki", hex: "#D2C2A8" },
  { id: "sage", name: "Apiary Olive", hex: "#9BA38E" },
  { id: "amber", name: "Hi-Vis Gold", hex: "#F2B749" },
];

export const FABRIC_CHOICES: Array<{
  code: FabricMaterialCode;
  title: string;
  desc: string;
  priceTag: string;
  badge?: string;
}> = [
  {
    code: "AIRMESH_3LAYER_360GSM",
    title: "3-Layer Ventilated AirMesh",
    desc: "Breathable 4.5mm thick mesh. Keeps you cool while stopping bee stings.",
    priceTag: "+$4.50",
    badge: "Most Popular",
  },
  {
    code: "COTTON_TWILL_310GSM",
    title: "100% Heavy Cotton Twill",
    desc: "Traditional thick ring-spun cotton. Durable and machine washable.",
    priceTag: "+$1.85",
  },
  {
    code: "AIRMESH_ULTRALIGHT_320GSM",
    title: "Lightweight Summer AirMesh",
    desc: "Extra light 4.0mm mesh designed for hot commercial apiaries.",
    priceTag: "+$3.20",
  },
  {
    code: "POLYCOTTON_260GSM",
    title: "Standard Poly-Cotton",
    desc: "Everyday commercial blend. Wrinkle-resistant and budget-friendly.",
    priceTag: "Included",
  },
];

export const VEIL_CHOICES: Array<{
  code: VeilStyleCode;
  title: string;
  desc: string;
  priceTag: string;
}> = [
  {
    code: "FENCING_COLLAPSIBLE",
    title: "Fencing Veil Hood",
    desc: "Folds flat with front zipper access. Easy to pack and store.",
    priceTag: "Included",
  },
  {
    code: "ROUND_BRIM_360",
    title: "360° Round Brim Veil",
    desc: "Wide circular hat keeps mesh completely away from your face.",
    priceTag: "+$0.95",
  },
];

export const ZIPPER_CHOICES: Array<{
  code: ZipperHardwareCode;
  title: string;
  desc: string;
  priceTag: string;
}> = [
  {
    code: "YKK_BRASS_5_HEAVY",
    title: "Heavy Metal Brass Zippers (YKK)",
    desc: "Long-lasting metal zippers that never jam with propolis or wax.",
    priceTag: "+$2.35",
  },
  {
    code: "STANDARD_NYLON_COIL",
    title: "Standard Nylon Zippers",
    desc: "Smooth everyday coil zippers.",
    priceTag: "Included",
  },
];

