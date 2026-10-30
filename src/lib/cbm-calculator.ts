import { MasterCartonSpec } from "@/types/beekeeping.types";

/**
 * Standard Container Usable Volume Capacities (Cubic Meters - CBM)
 */
export const CONTAINER_CAPACITIES_CBM = {
  FCL_20FT: 28.0,
  FCL_40FT: 58.0,
  FCL_40FT_HQ: 68.0,
} as const;

/**
 * Default Master Carton Spec for 3-Layer Ventilated AirMesh Beekeeping Suits
 * 60 x 40 x 40 cm (0.096 CBM) -> Holds 15 Complete Suits (~19.5 kg Gross Weight)
 */
export const DEFAULT_BEE_SUIT_CARTON_SPEC: MasterCartonSpec = {
  lengthCm: 60,
  widthCm: 40,
  heightCm: 40,
  unitsPerCarton: 15,
  cartonTareWeightKg: 1.2,
};

export interface CbmLineItemInput {
  sku: string;
  quantity: number;
  unitWeightKg: number; // e.g., 1.22 kg for a 3-Layer AirMesh Suit + Veil
  masterCarton: MasterCartonSpec;
}

export interface CbmShipmentSummary {
  totalUnits: number;
  totalMasterCartons: number;
  singleCartonCbm: number;
  totalVolumeCbm: number;
  totalNetWeightKg: number;
  totalGrossWeightKg: number;
  airVolumetricWeightKg: number;
  chargeableAirWeightKg: number;
  estimatedAirExpressUsd: number;  // DHL/FedEx Express Door-to-Door (5-7 Days)
  estimatedSeaFreightLclUsd: number; // Ocean LCL Port-to-Port / DDP (28-35 Days)
  recommendedShippingMode: "AIR_EXPRESS_COURIER" | "SEA_LCL_PALLET" | "SEA_20FT_FCL";
  containerUtilizationPercent20Ft: number;
  containerUtilizationPercent40FtHq: number;
}

/**
 * Calculates Export Master Cartons, CBM, Gross vs. Volumetric Air Weight, and Freight Estimates
 */
export function calculateExportShipmentCbm(
  items: CbmLineItemInput[]
): CbmShipmentSummary {
  let totalUnits = 0;
  let totalMasterCartons = 0;
  let totalVolumeCbm = 0;
  let totalNetWeightKg = 0;
  let totalGrossWeightKg = 0;
  let airVolumetricWeightKg = 0;

  for (const item of items) {
    if (item.quantity <= 0) continue;

    const { lengthCm, widthCm, heightCm, unitsPerCarton, cartonTareWeightKg } =
      item.masterCarton;

    const cartonsForItem = Math.ceil(item.quantity / Math.max(1, unitsPerCarton));
    const singleCartonCbm = (lengthCm * widthCm * heightCm) / 1_000_000;
    const itemVolumeCbm = cartonsForItem * singleCartonCbm;

    const itemNetKg = item.quantity * item.unitWeightKg;
    const itemGrossKg = itemNetKg + cartonsForItem * cartonTareWeightKg;

    // International DHL/FedEx Air Dimensional Factor: (L * W * H cm) / 5000 per carton
    const itemVolumetricKg =
      ((lengthCm * widthCm * heightCm) / 5000) * cartonsForItem;

    totalUnits += item.quantity;
    totalMasterCartons += cartonsForItem;
    totalVolumeCbm += itemVolumeCbm;
    totalNetWeightKg += itemNetKg;
    totalGrossWeightKg += itemGrossKg;
    airVolumetricWeightKg += itemVolumetricKg;
  }

  const chargeableAirWeightKg = Math.max(
    totalGrossWeightKg,
    airVolumetricWeightKg
  );

  // Realistic B2B Freight Estimation Benchmarks:
  // Air Express Courier (DHL/FedEx Commercial): ~$6.40 / chargeable kg
  const estimatedAirExpressUsd = Number((chargeableAirWeightKg * 6.4).toFixed(2));

  // Ocean LCL Consolidated Sea Freight: ~$165 per CBM (min 1 CBM base charge + $180 customs/docs)
  const billableSeaCbm = Math.max(1, totalVolumeCbm);
  const estimatedSeaFreightLclUsd =
    totalUnits > 0 ? Number((billableSeaCbm * 165 + 180).toFixed(2)) : 0;

  let recommendedShippingMode:
    | "AIR_EXPRESS_COURIER"
    | "SEA_LCL_PALLET"
    | "SEA_20FT_FCL" = "AIR_EXPRESS_COURIER";

  if (totalVolumeCbm >= 15.0) {
    recommendedShippingMode = "SEA_20FT_FCL";
  } else if (totalVolumeCbm >= 1.5) {
    recommendedShippingMode = "SEA_LCL_PALLET";
  }

  const singleCartonReferenceCbm =
    items.length > 0
      ? Number(
          (
            (items[0].masterCarton.lengthCm *
              items[0].masterCarton.widthCm *
              items[0].masterCarton.heightCm) /
            1_000_000
          ).toFixed(3)
        )
      : 0.096;

  return {
    totalUnits,
    totalMasterCartons,
    singleCartonCbm: singleCartonReferenceCbm,
    totalVolumeCbm: Number(totalVolumeCbm.toFixed(3)),
    totalNetWeightKg: Number(totalNetWeightKg.toFixed(2)),
    totalGrossWeightKg: Number(totalGrossWeightKg.toFixed(2)),
    airVolumetricWeightKg: Number(airVolumetricWeightKg.toFixed(2)),
    chargeableAirWeightKg: Number(chargeableAirWeightKg.toFixed(2)),
    estimatedAirExpressUsd,
    estimatedSeaFreightLclUsd,
    recommendedShippingMode,
    containerUtilizationPercent20Ft: Number(
      Math.min(
        100,
        (totalVolumeCbm / CONTAINER_CAPACITIES_CBM.FCL_20FT) * 100
      ).toFixed(1)
    ),
    containerUtilizationPercent40FtHq: Number(
      Math.min(
        100,
        (totalVolumeCbm / CONTAINER_CAPACITIES_CBM.FCL_40FT_HQ) * 100
      ).toFixed(1)
    ),
  };
}

