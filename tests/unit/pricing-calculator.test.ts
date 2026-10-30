import { describe, expect, it } from "vitest";
import { calculateBeekeepingOemPricing } from "@/lib/pricing-calculator";
import { VolumePriceTier } from "@/types/beekeeping.types";

const MOCK_SUIT_TIERS: VolumePriceTier[] = [
  { minQty: 50, maxQty: 99, fobUnitUsd: 26.5, leadTimeDays: 18 },
  { minQty: 100, maxQty: 249, fobUnitUsd: 23.0, leadTimeDays: 21 },
  { minQty: 250, maxQty: 499, fobUnitUsd: 19.8, leadTimeDays: 25 },
  { minQty: 500, maxQty: null, fobUnitUsd: 17.5, leadTimeDays: 30 },
];

describe("calculateBeekeepingOemPricing", () => {
  it("calculates prototype sample pricing below MOQ with setup fee payable", () => {
    const res = calculateBeekeepingOemPricing({
      totalQty: 5,
      moqMinimum: 50,
      sampleUnitPriceUsd: 65.0,
      priceTiers: MOCK_SUIT_TIERS,
      fabricCode: "AIRMESH_3LAYER_360GSM",
      veilStyle: "FENCING_COLLAPSIBLE",
      zipperHardware: "YKK_BRASS_5_HEAVY",
      brandingPlacements: [
        {
          zoneId: "left_chest",
          method: "EMBROIDERY_DIRECT_CHEST",
          widthCm: 8,
          heightCm: 4,
          pantoneThreadOrInkColors: ["Pantone 130 C"],
        },
      ],
      privateLabelTrim: {
        customWovenNeckLabel: true,
        customHangtag600Gsm: false,
        fbaBarcodeZipPolybag: false,
        zipperedCanvasCarryTote: false,
      },
    });

    expect(res.orderMode).toBe("SAMPLE_PROTOTYPE");
    expect(res.payableSetupFeesUsd).toBe(35);
    expect(res.waivedSetupFeesUsd).toBe(0);
    // Base $65 + $4.50 (3-Layer AirMesh) + $2.35 (YKK Brass) + $0.85 (Chest Embroidery) + $0.25 (Neck Label) = $72.95
    expect(res.finalFobUnitUsd).toBe(72.95);
    expect(res.totalOrderFobUsd).toBe(Number((72.95 * 5 + 35).toFixed(2)));
  });

  it("waives embroidery/mold setup fees automatically at 200+ units and applies trim bundle discount", () => {
    const res = calculateBeekeepingOemPricing({
      totalQty: 250,
      moqMinimum: 50,
      sampleUnitPriceUsd: 65.0,
      priceTiers: MOCK_SUIT_TIERS,
      fabricCode: "AIRMESH_3LAYER_360GSM",
      veilStyle: "ROUND_BRIM_360",
      zipperHardware: "YKK_BRASS_5_HEAVY",
      brandingPlacements: [
        {
          zoneId: "left_chest",
          method: "SILICONE_PVC_RUBBER_PATCH",
          widthCm: 8,
          heightCm: 4,
          pantoneThreadOrInkColors: ["Black", "Amber"],
        },
      ],
      privateLabelTrim: {
        customWovenNeckLabel: true,
        customHangtag600Gsm: true,
        fbaBarcodeZipPolybag: true,
        zipperedCanvasCarryTote: true,
      },
      includeKneePads: true,
      includeMetalHiveToolPocket: true,
    });

    expect(res.orderMode).toBe("WHOLESALE_BULK");
    expect(res.baseTierUnitUsd).toBe(19.8);
    expect(res.rawSetupFeesUsd).toBe(65);
    expect(res.waivedSetupFeesUsd).toBe(65);
    expect(res.payableSetupFeesUsd).toBe(0);
    // Trim bundle: $0.75 (all 3 core trims) + $1.60 (Canvas Tote) = $2.35
    expect(res.trimPackageUnitUsd).toBe(2.35);
  });
});

