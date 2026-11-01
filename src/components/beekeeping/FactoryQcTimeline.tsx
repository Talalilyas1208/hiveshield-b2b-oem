"use client";

import React from "react";

const QC_STAGES = [
  {
    step: "01",
    title: "360 GSM Mesh Inspection",
    desc: "Every roll is caliper-tested to verify 4.5mm sting-barrier thickness.",
  },
  {
    step: "02",
    title: "CAD Pattern Cutting",
    desc: "Precision graded from XS to 5XL Tall with generous workwear allowance.",
  },
  {
    step: "03",
    title: "Logo Embroidery & Badges",
    desc: "Your apiary logo is stitched or patched before garment assembly.",
  },
  {
    step: "04",
    title: "ISO 4915 Safety Stitching",
    desc: "12 SPI lockstitch + bar-tack reinforcement on all pockets and zippers.",
  },
  {
    step: "05",
    title: "AQL 2.5 Zipper & Gap Check",
    desc: "Every veil neck junction is inspected to guarantee zero bee entry gaps.",
  },
  {
    step: "06",
    title: "Export Carton Packing",
    desc: "Packed 15 suits per 5-ply master carton (60×40×40 cm) ready for air/sea.",
  },
];

export function FactoryQcTimeline() {
  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <h2 className="text-lg sm:text-xl font-bold text-[#1C1B18] mb-1">
        6-Stage Factory Quality Control Process
      </h2>
      <p className="text-xs sm:text-sm text-[#6E6A63] mb-5">
        How we manufacture and inspect your bulk order before shipment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {QC_STAGES.map((item) => (
          <div
            key={item.step}
            className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]"
          >
            <span className="text-xs font-extrabold bg-[#1C1B18] text-white px-2 py-0.5 rounded">
              STAGE {item.step}
            </span>
            <h3 className="text-sm font-bold text-[#1C1B18] mt-2">
              {item.title}
            </h3>
            <p className="text-xs text-[#5C5852] mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

