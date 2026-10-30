import {
  BrandingMethodCode,
  BrandingPlacementItem,
  FabricMaterialCode,
  PrivateLabelTrimSelection,
  VeilStyleCode,
  VolumePriceTier,
  ZipperHardwareCode,
} from "@/types/beekeeping.types";

/**
 * Factory Material Upcharges (USD per suit/garment relative to base 260 GSM Poly-Cotton)
 */
export const FABRIC_UPCHARGE_USD: Record<FabricMaterialCode, number> = {
  POLYCOTTON_260GSM: 0.0,
  COTTON_TWILL_310GSM: 1.85,
  AIRMESH_ULTRALIGHT_320GSM: 3.2,
  AIRMESH_3LAYER_360GSM: 4.5, // Flagship 4.5mm sting-proof 3-layer ventilated mesh
  GOATSKIN_DRUM_DYED_09MM: 1.5,
  COWHIDE_SPLIT_12MM: 0.0,
};

/**
 * Interchangeable Veil Hood Engineering Adders (USD per unit)
 */
export const VEIL_STYLE_UPCHARGE_USD: Record<VeilStyleCode, number> = {
  FENCING_COLLAPSIBLE: 0.0, // Included in standard suit price
  ROUND_BRIM_360: 0.95,     // Structured 360-degree fiberglass mesh brim
  SHERIFF_DUAL_RING: 1.25,  // Commercial heavy-duty dual-ring frame
  DUAL_INTERCHANGEABLE: 4.8, // Ships with BOTH Fencing Hood + Round Brim Veil
};

/**
 * Zipper & Hardware Adders (USD per unit)
 */
export const ZIPPER_HARDWARE_UPCHARGE_USD: Record<ZipperHardwareCode, number> = {
  STANDARD_NYLON_COIL: 0.0,
  YKK_ACETAL_5_DELRIN: 1.1,
  YKK_BRASS_5_HEAVY: 2.35, // Heavy-duty YKK #5 metal brass neck/front/leg zippers
};

/**
 * Custom Apiary Logo & Embellishment Costs (Setup Mold/Digitizing Fee + Per-Unit Run Cost)
 * Note: Factory waives all setup fees when totalQty >= 200 units!
 */
export const BRANDING_COSTS_USD: Record<
  BrandingMethodCode,
  { setupFeeUsd: number; perUnitUsd: number }
> = {
  EMBROIDERY_DIRECT_CHEST: { setupFeeUsd: 35, perUnitUsd: 0.85 },
  EMBROIDERY_BACK_YOKE: { setupFeeUsd: 50, perUnitUsd: 1.65 },
  SILICONE_PVC_RUBBER_PATCH: { setupFeeUsd: 65, perUnitUsd: 1.2 },
  WOVEN_APPLIQUE_PATCH: { setupFeeUsd: 45, perUnitUsd: 0.75 },
  HEAT_TRANSFER_REFLECTIVE: { setupFeeUsd: 30, perUnitUsd: 0.65 },
};

export const FREE_SETUP_THRESHOLD_QTY = 200;

export interface BeekeepingPricingInput {
  totalQty: number;
  moqMinimum: number;
  sampleUnitPriceUsd: number;
  priceTiers: VolumePriceTier[];
  fabricCode: FabricMaterialCode;
  veilStyle: VeilStyleCode;
  zipperHardware: ZipperHardwareCode;
  brandingPlacements: BrandingPlacementItem[];
  privateLabelTrim: PrivateLabelTrimSelection;
  includeKneePads?: boolean;
  includeMetalHiveToolPocket?: boolean;
  recommendedRetailUsd?: number;
}

export interface BeekeepingPricingResult {
  orderMode: "SAMPLE_PROTOTYPE" | "WHOLESALE_BULK";
  totalQty: number;
  baseTierUnitUsd: number;
  fabricAdderUsd: number;
  veilAdderUsd: number;
  zipperAdderUsd: number;
  constructionAdderUsd: number;
  brandingUnitAdderUsd: number;
  trimPackageUnitUsd: number;
  finalFobUnitUsd: number;
  rawSetupFeesUsd: number;
  waivedSetupFeesUsd: number;
  payableSetupFeesUsd: number;
  totalOrderFobUsd: number;
  leadTimeDays: number;
  estimatedGrossProfitPerUnitUsd: number;
  estimatedMarginPercent: number;
}

/**
 * Pure deterministic FOB & Private Label Pricing Calculator
 * Runs identically on Client (60fps OEM Builder) and Server (RFQ Validation)
 */
export function calculateBeekeepingOemPricing(
  input: BeekeepingPricingInput
): BeekeepingPricingResult {
  const {
    totalQty,
    moqMinimum,
    sampleUnitPriceUsd,
    priceTiers,
    fabricCode,
    veilStyle,
    zipperHardware,
    brandingPlacements,
    privateLabelTrim,
    includeKneePads = false,
    includeMetalHiveToolPocket = false,
    recommendedRetailUsd = 149.0,
  } = input;

  const safeQty = Math.max(1, Math.floor(totalQty));
  const isSampleMode = safeQty < moqMinimum;

  // 1. Resolve Base Tier Price & Lead Time
  let baseTierUnitUsd = sampleUnitPriceUsd;
  let leadTimeDays = 7; // 7-day express sample turnaround

  if (!isSampleMode && priceTiers.length > 0) {
    const sortedTiers = [...priceTiers].sort((a, b) => a.minQty - b.minQty);
    const matchedTier =
      sortedTiers.find(
        (t) => safeQty >= t.minQty && (t.maxQty === null || safeQty <= t.maxQty)
      ) ?? sortedTiers[sortedTiers.length - 1];

    baseTierUnitUsd = matchedTier.fobUnitUsd;
    leadTimeDays = matchedTier.leadTimeDays;
  }

  // 2. Material, Veil, Zipper & Construction Adders
  const fabricAdderUsd = FABRIC_UPCHARGE_USD[fabricCode] ?? 0;
  const veilAdderUsd = VEIL_STYLE_UPCHARGE_USD[veilStyle] ?? 0;
  const zipperAdderUsd = ZIPPER_HARDWARE_UPCHARGE_USD[zipperHardware] ?? 0;

  let constructionAdderUsd = 0;
  if (includeKneePads) constructionAdderUsd += 0.9; // Cushioned EVA knee reinforcement
  if (includeMetalHiveToolPocket) constructionAdderUsd += 0.55; // Cordura/Kevlar hive tool slot

  // 3. Branding Unit Cost & Mold/Digitizing Setup Fees
  let brandingUnitAdderUsd = 0;
  let rawSetupFeesUsd = 0;

  for (const placement of brandingPlacements) {
    const costSpec = BRANDING_COSTS_USD[placement.method];
    if (costSpec) {
      brandingUnitAdderUsd += costSpec.perUnitUsd;
      rawSetupFeesUsd += costSpec.setupFeeUsd;
    }
  }

  const setupFeeWaived = safeQty >= FREE_SETUP_THRESHOLD_QTY;
  const waivedSetupFeesUsd = setupFeeWaived ? rawSetupFeesUsd : 0;
  const payableSetupFeesUsd = setupFeeWaived ? 0 : rawSetupFeesUsd;

  // 4. Private Label Trim Package (with Bundle Discount when all 3 core trims are selected)
  let trimPackageUnitUsd = 0;
  const coreTrimsSelected =
    privateLabelTrim.customWovenNeckLabel &&
    privateLabelTrim.customHangtag600Gsm &&
    privateLabelTrim.fbaBarcodeZipPolybag;

  if (coreTrimsSelected) {
    trimPackageUnitUsd += 0.75; // Bundle discount ($0.90 -> $0.75)
  } else {
    if (privateLabelTrim.customWovenNeckLabel) trimPackageUnitUsd += 0.25;
    if (privateLabelTrim.customHangtag600Gsm) trimPackageUnitUsd += 0.3;
    if (privateLabelTrim.fbaBarcodeZipPolybag) trimPackageUnitUsd += 0.35;
  }

  if (privateLabelTrim.zipperedCanvasCarryTote) {
    trimPackageUnitUsd += 1.6;
  }

  // 5. Final Unit & Total Order Calculation
  const finalFobUnitUsd = Number(
    (
      baseTierUnitUsd +
      fabricAdderUsd +
      veilAdderUsd +
      zipperAdderUsd +
      constructionAdderUsd +
      brandingUnitAdderUsd +
      trimPackageUnitUsd
    ).toFixed(2)
  );

  const totalOrderFobUsd = Number(
    (finalFobUnitUsd * safeQty + payableSetupFeesUsd).toFixed(2)
  );

  // 6. Distributor Retail Margin Calculation
  const estimatedGrossProfitPerUnitUsd = Number(
    Math.max(0, recommendedRetailUsd - finalFobUnitUsd).toFixed(2)
  );
  const estimatedMarginPercent =
    recommendedRetailUsd > 0
      ? Number(
          ((estimatedGrossProfitPerUnitUsd / recommendedRetailUsd) * 100).toFixed(1)
        )
      : 0;

  return {
    orderMode: isSampleMode ? "SAMPLE_PROTOTYPE" : "WHOLESALE_BULK",
    totalQty: safeQty,
    baseTierUnitUsd: Number(baseTierUnitUsd.toFixed(2)),
    fabricAdderUsd: Number(fabricAdderUsd.toFixed(2)),
    veilAdderUsd: Number(veilAdderUsd.toFixed(2)),
    zipperAdderUsd: Number(zipperAdderUsd.toFixed(2)),
    constructionAdderUsd: Number(constructionAdderUsd.toFixed(2)),
    brandingUnitAdderUsd: Number(brandingUnitAdderUsd.toFixed(2)),
    trimPackageUnitUsd: Number(trimPackageUnitUsd.toFixed(2)),
    finalFobUnitUsd,
    rawSetupFeesUsd,
    waivedSetupFeesUsd,
    payableSetupFeesUsd,
    totalOrderFobUsd,
    leadTimeDays,
    estimatedGrossProfitPerUnitUsd,
    estimatedMarginPercent,
  };
}

