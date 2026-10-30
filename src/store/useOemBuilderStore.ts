"use client";

import { useState } from "react";
import { calculateBeekeepingOemPricing } from "@/lib/pricing-calculator";
import {
  calculateExportShipmentCbm,
  DEFAULT_BEE_SUIT_CARTON_SPEC,
} from "@/lib/cbm-calculator";
import {
  BrandingMethodCode,
  FabricMaterialCode,
  SuitSizeCode,
  VeilStyleCode,
  ZipperHardwareCode,
} from "@/types/beekeeping.types";
import {
  FABRIC_CHOICES,
  PRICE_TIERS,
  SUIT_COLORS,
} from "@/lib/beekeeping-options";

export function useBeeSuitConfigurator() {
  const [sizeQuantities, setSizeQuantities] = useState<
    Record<SuitSizeCode, number>
  >({
    XS: 0,
    S: 10,
    M: 25,
    L: 35,
    XL: 20,
    "2XL": 10,
    "3XL": 0,
    "4XL": 0,
    "5XL_TALL": 0,
  });

  const [selectedColor, setSelectedColor] = useState(SUIT_COLORS[0]);
  const [fabric, setFabric] = useState<FabricMaterialCode>(
    "AIRMESH_3LAYER_360GSM"
  );
  const [veil, setVeil] = useState<VeilStyleCode>("FENCING_COLLAPSIBLE");
  const [zipper, setZipper] = useState<ZipperHardwareCode>("YKK_BRASS_5_HEAVY");
  const [hasLogo, setHasLogo] = useState(true);
  const [logoText, setLogoText] = useState("YOUR APIARY");
  const [branding, setBranding] = useState<BrandingMethodCode>(
    "EMBROIDERY_DIRECT_CHEST"
  );
  const [hasPrivateLabelTags, setHasPrivateLabelTags] = useState(true);
  const [hasCarryBag, setHasCarryBag] = useState(false);

  const totalQty = Math.max(
    1,
    Object.values(sizeQuantities).reduce((sum, n) => sum + n, 0)
  );

  function applyPresetTotal(targetTotal: number) {
    if (targetTotal === 1) {
      setSizeQuantities({
        XS: 0,
        S: 0,
        M: 0,
        L: 1,
        XL: 0,
        "2XL": 0,
        "3XL": 0,
        "4XL": 0,
        "5XL_TALL": 0,
      });
      return;
    }

    const s = Math.round(targetTotal * 0.1);
    const m = Math.round(targetTotal * 0.25);
    const l = Math.round(targetTotal * 0.35);
    const xl = Math.round(targetTotal * 0.2);

    setSizeQuantities({
      XS: 0,
      S: s,
      M: m,
      L: l,
      XL: xl,
      "2XL": targetTotal - s - m - l - xl,
      "3XL": 0,
      "4XL": 0,
      "5XL_TALL": 0,
    });
  }

  const pricing = calculateBeekeepingOemPricing({
    totalQty,
    moqMinimum: 50,
    sampleUnitPriceUsd: 65.0,
    priceTiers: PRICE_TIERS,
    fabricCode: fabric,
    veilStyle: veil,
    zipperHardware: zipper,
    brandingPlacements: hasLogo
      ? [
          {
            zoneId: "left_chest",
            method: branding,
            widthCm: 8.5,
            heightCm: 4.0,
            pantoneThreadOrInkColors: ["Standard"],
          },
        ]
      : [],
    privateLabelTrim: {
      customWovenNeckLabel: hasPrivateLabelTags,
      customHangtag600Gsm: hasPrivateLabelTags,
      fbaBarcodeZipPolybag: hasPrivateLabelTags,
      zipperedCanvasCarryTote: hasCarryBag,
    },
    includeKneePads: true,
    includeMetalHiveToolPocket: true,
  });

  const shipping = calculateExportShipmentCbm([
    {
      sku: "BEE-SUIT",
      quantity: totalQty,
      unitWeightKg: 1.22,
      masterCarton: DEFAULT_BEE_SUIT_CARTON_SPEC,
    },
  ]);

  const activeFabricObj =
    FABRIC_CHOICES.find((f) => f.code === fabric) || FABRIC_CHOICES[0];

  return {
    sizeQuantities,
    setSizeQuantities,
    selectedColor,
    setSelectedColor,
    fabric,
    setFabric,
    veil,
    setVeil,
    zipper,
    setZipper,
    hasLogo,
    setHasLogo,
    logoText,
    setLogoText,
    branding,
    setBranding,
    hasPrivateLabelTags,
    setHasPrivateLabelTags,
    hasCarryBag,
    setHasCarryBag,
    totalQty,
    applyPresetTotal,
    pricing,
    shipping,
    activeFabricObj,
  };
}

