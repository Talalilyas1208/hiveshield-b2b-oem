"use client";

import React from "react";
import { Tabs } from "antd";
import { BeekeepingProduct } from "@/types/beekeeping.types";

interface TechnicalBomTabsProps {
  product: BeekeepingProduct;
}

export function TechnicalBomTabs({ product }: TechnicalBomTabsProps) {
  const { technicalSpec, masterCarton } = product;

  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <Tabs
        defaultActiveKey="bom"
        items={[
          {
            key: "bom",
            label: "1. Fabric & Hardware Specs",
            children: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Fabric Composition</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {technicalSpec.fabricComposition}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Weight & Thickness</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {technicalSpec.fabricWeightGsm} GSM · {technicalSpec.meshThicknessMm}mm Thick
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Veil Mesh & Stitching</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {technicalSpec.veilMeshCount} · {technicalSpec.stitchIsoClass}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">CE Compliance & HS Code</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {technicalSpec.ceCertification} (HS: {technicalSpec.hsCode})
                  </strong>
                </div>
              </div>
            ),
          },
          {
            key: "packing",
            label: "2. Box & Shipping Dimensions",
            children: (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Master Carton Size</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {masterCarton.lengthCm} × {masterCarton.widthCm} × {masterCarton.heightCm} cm
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Units Per Export Box</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {masterCarton.unitsPerCarton} pcs / box
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EAE6DD]">
                  <span className="text-[#6E6A63] block">Unit Weight</span>
                  <strong className="text-[#1C1B18] text-sm">
                    {product.unitWeightKg} kg / unit
                  </strong>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

