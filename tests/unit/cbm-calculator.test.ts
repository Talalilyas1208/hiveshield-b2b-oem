import { describe, expect, it } from "vitest";
import {
  calculateExportShipmentCbm,
  DEFAULT_BEE_SUIT_CARTON_SPEC,
} from "@/lib/cbm-calculator";

describe("calculateExportShipmentCbm", () => {
  it("accurately computes master cartons (15 suits/box), 0.096 CBM/box, and chargeable air weight", () => {
    // 150 AirMesh suits -> Exactly 10 Master Cartons (60x40x40cm = 0.096 CBM each -> 0.960 CBM total)
    const summary = calculateExportShipmentCbm([
      {
        sku: "HS-SUIT-PRO-360",
        quantity: 150,
        unitWeightKg: 1.22,
        masterCarton: DEFAULT_BEE_SUIT_CARTON_SPEC,
      },
    ]);

    expect(summary.totalUnits).toBe(150);
    expect(summary.totalMasterCartons).toBe(10);
    expect(summary.singleCartonCbm).toBe(0.096);
    expect(summary.totalVolumeCbm).toBe(0.96);
    // Net weight: 150 * 1.22 = 183 kg; Gross weight: 183 + (10 * 1.2) = 195 kg
    expect(summary.totalNetWeightKg).toBe(183);
    expect(summary.totalGrossWeightKg).toBe(195);
    // Air Volumetric weight: ((60*40*40)/5000) * 10 = 19.2 * 10 = 192 kg
    expect(summary.airVolumetricWeightKg).toBe(192);
    // Chargeable air weight = max(195, 192) = 195 kg
    expect(summary.chargeableAirWeightKg).toBe(195);
  });
});

