"use client";

import React from "react";
import { Steps, Tag } from "antd";

interface VolumeTierBannerProps {
  totalQty: number;
  onSelectPresetQty: (qty: number) => void;
}

export function VolumeTierBanner({
  totalQty,
  onSelectPresetQty,
}: VolumeTierBannerProps) {
  const tiers = [
    {
      tier: "50–99 Suits",
      price: "$26.50",
      qty: 50,
      active: totalQty >= 50 && totalQty < 100,
    },
    {
      tier: "100–249 Suits",
      price: "$23.00",
      qty: 100,
      active: totalQty >= 100 && totalQty < 250,
    },
    {
      tier: "250–499 Suits",
      price: "$19.80",
      qty: 250,
      active: totalQty >= 250 && totalQty < 500,
    },
    {
      tier: "500+ Suits",
      price: "$17.50",
      qty: 500,
      active: totalQty >= 500,
    },
  ];

  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 sm:p-7 mb-6 sm:mb-8 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div>
          <Tag
            color="gold"
            variant="filled"
            className="!mb-2 !font-semibold !rounded-md"
          >
            Direct Mill Price · No Middleman Markup
          </Tag>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1B18]">
            Build & Order Custom Beekeeping Suits
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A63] mt-1 max-w-xl">
            Customize your suit in 4 simple steps below. Watch the live suit
            preview and exact factory price per unit update automatically.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 shrink-0">
          {tiers.map((t) => (
            <button
              key={t.tier}
              type="button"
              onClick={() => onSelectPresetQty(t.qty)}
              className={`px-3.5 py-2.5 rounded-xl border text-left transition-all ${
                t.active
                  ? "bg-[#1C1B18] text-white border-[#1C1B18] shadow-sm"
                  : "bg-[#FAF9F6] text-[#4A4742] border-[#E2DFD7] hover:border-[#1C1B18]"
              }`}
            >
              <div className="text-[11px] opacity-80 font-medium">{t.tier}</div>
              <div className="text-sm font-extrabold mt-0.5">
                {t.price}{" "}
                <span className="text-[10px] font-normal opacity-75">base</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:block pt-5 mt-5 border-t border-[#F0EDE6]">
        <Steps
          size="small"
          current={4}
          items={[
            { title: "1. Fabric & Color" },
            { title: "2. Hood & Zippers" },
            { title: `3. Sizes (${totalQty} pcs)` },
            { title: "4. Logo & Packaging" },
          ]}
        />
      </div>
    </div>
  );
}

