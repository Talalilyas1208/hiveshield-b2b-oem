"use client";

import React from "react";
import { Tag } from "antd";

const VEIL_SPECS = [
  {
    name: "Collapsible Fencing Hood",
    mesh: "18×16 Black Anti-Glare Fiberglass",
    bestFor: "Commercial truck transport & easy flat packing",
    adder: "Included in Base Price",
  },
  {
    name: "360° Self-Supporting Round Brim",
    mesh: "360° Circumference Black Mesh",
    bestFor: "Hot climates & keeping mesh 100% off nose/neck",
    adder: "+$0.95 / suit",
  },
  {
    name: "Dual-Hood Interchangeable Kit",
    mesh: "Ships with BOTH Fencing + Round Veils",
    bestFor: "Retail brands offering premium 2-in-1 suit bundles",
    adder: "+$4.80 / suit",
  },
];

export function VeilOpticalComparator() {
  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <div className="mb-5">
        <Tag
          color="gold"
          variant="filled"
          className="!mb-1.5 !font-semibold !rounded-md"
        >
          Optical Clarity & Neck Seal
        </Tag>
        <h2 className="text-lg sm:text-xl font-bold text-[#1C1B18]">
          Matte Black Fiberglass Mesh & YKK® Brass Neck Zippers
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6A63] mt-1">
          Every hood attaches via overlapping dual-slider YKK #5 zippers with a
          double Velcro storm flap so zero bees can crawl inside the collar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VEIL_SPECS.map((item) => (
          <div
            key={item.name}
            className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8] flex flex-col justify-between"
          >
            <div>
              <span className="font-bold text-sm text-[#1C1B18] block">
                {item.name}
              </span>
              <span className="text-xs text-[#6E6A63] block mt-1">
                {item.mesh}
              </span>
              <p className="text-xs text-[#4A4742] mt-2.5">
                <strong>Best for:</strong> {item.bestFor}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE6DD] text-xs font-bold text-[#1C1B18]">
              {item.adder}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

