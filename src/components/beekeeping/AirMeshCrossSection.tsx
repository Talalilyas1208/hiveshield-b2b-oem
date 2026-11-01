"use client";

import React from "react";
import { Tag } from "antd";

export function AirMeshCrossSection() {
  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <Tag
            color="gold"
            variant="filled"
            className="!mb-1.5 !font-semibold !rounded-md"
          >
            Sting Barrier Physics
          </Tag>
          <h2 className="text-lg sm:text-xl font-bold text-[#1C1B18]">
            Why a 2.0mm Bee Stinger Cannot Reach Your Skin
          </h2>
        </div>
        <span className="text-xs font-bold bg-[#1C1B18] text-white px-3 py-1.5 rounded-full">
          4.5mm Total Mesh Thickness
        </span>
      </div>

      {/* Visual 3-Layer Stack Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
          <div className="text-xs font-bold text-[#6E6A63] uppercase">
            Layer 01 (Outer)
          </div>
          <div className="text-base font-bold text-[#1C1B18] mt-1">
            Fine Hex Poly-Mesh
          </div>
          <p className="text-xs text-[#5C5852] mt-1.5 leading-relaxed">
            Tightly knitted outer barrier blocks bees from latching onto the
            garment while allowing wind to pass freely.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FCFBF8] border-2 border-[#1C1B18]">
          <div className="text-xs font-bold text-amber-700 uppercase">
            Layer 02 (4.0mm Core)
          </div>
          <div className="text-base font-bold text-[#1C1B18] mt-1">
            3D EVA Spacer Pillar Core
          </div>
          <p className="text-xs text-[#5C5852] mt-1.5 leading-relaxed">
            Creates a rigid 4.0mm air gap. A honeybee stinger is only 1.5–2.5mm
            long, so the barb stops in mid-air.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
          <div className="text-xs font-bold text-[#6E6A63] uppercase">
            Layer 03 (Inner)
          </div>
          <div className="text-base font-bold text-[#1C1B18] mt-1">
            Soft Skin-Comfort Liner
          </div>
          <p className="text-xs text-[#5C5852] mt-1.5 leading-relaxed">
            Smooth moisture-wicking inner knit glides comfortably over a t-shirt
            during 8-hour commercial hive inspections.
          </p>
        </div>
      </div>
    </div>
  );
}

