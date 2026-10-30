"use client";

import React from "react";
import { Input, Select, Switch } from "antd";
import { BrandingMethodCode } from "@/types/beekeeping.types";
import { OrderStepSection } from "@/components/ui/OrderStepSection";

interface Step4ApiaryLogosAndTrimProps {
  totalQty: number;
  hasLogo: boolean;
  onToggleLogo: (val: boolean) => void;
  logoText: string;
  onChangeLogoText: (val: string) => void;
  branding: BrandingMethodCode;
  onChangeBranding: (val: BrandingMethodCode) => void;
  hasPrivateLabelTags: boolean;
  onTogglePrivateLabelTags: (val: boolean) => void;
  hasCarryBag: boolean;
  onToggleCarryBag: (val: boolean) => void;
}

export function Step4ApiaryLogosAndTrim({
  totalQty,
  hasLogo,
  onToggleLogo,
  logoText,
  onChangeLogoText,
  branding,
  onChangeBranding,
  hasPrivateLabelTags,
  onTogglePrivateLabelTags,
  hasCarryBag,
  onToggleCarryBag,
}: Step4ApiaryLogosAndTrimProps) {
  return (
    <OrderStepSection
      stepNumber={4}
      title="Your Brand Logo & Packaging"
      subtitle="One-time logo setup is FREE when you order 200+ suits"
      badgeText={totalQty >= 200 ? "Free Logo Setup Unlocked" : undefined}
    >
      <div className="space-y-3.5">
        <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-sm font-bold text-[#1C1B18] block">
                Add My Brand Logo on Chest
              </span>
              <span className="text-xs text-[#6E6A63]">
                Preview your brand name live on the suit diagram
              </span>
            </div>
            <Switch checked={hasLogo} onChange={onToggleLogo} />
          </div>

          {hasLogo && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#EAE6DD]">
              <div>
                <label className="block text-xs font-semibold text-[#5C5852] mb-1">
                  Your Brand / Apiary Name
                </label>
                <Input
                  maxLength={14}
                  value={logoText}
                  onChange={(e) => onChangeLogoText(e.target.value)}
                  placeholder="e.g. GOLDEN HIVE"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C5852] mb-1">
                  Logo Style
                </label>
                <Select
                  value={branding}
                  onChange={(val) => onChangeBranding(val as BrandingMethodCode)}
                  className="w-full"
                  options={[
                    {
                      value: "EMBROIDERY_DIRECT_CHEST",
                      label: "Stitched Chest Embroidery (+$0.85)",
                    },
                    {
                      value: "SILICONE_PVC_RUBBER_PATCH",
                      label: "3D Rubber Badge (+$1.20)",
                    },
                    {
                      value: "EMBROIDERY_BACK_YOKE",
                      label: "Large Back Shoulder Logo (+$1.65)",
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            onClick={() => onTogglePrivateLabelTags(!hasPrivateLabelTags)}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
              hasPrivateLabelTags
                ? "bg-[#FCFBF8] border-[#1C1B18]"
                : "bg-white border-[#E2DFD7]"
            }`}
          >
            <div className="pr-2">
              <span className="text-xs sm:text-sm font-bold text-[#1C1B18] block">
                Private Label Tag & Bag
              </span>
              <span className="text-[11px] text-[#6E6A63]">
                Custom neck label, hangtag & barcode bag (+$0.75)
              </span>
            </div>
            <Switch size="small" checked={hasPrivateLabelTags} />
          </div>

          <div
            onClick={() => onToggleCarryBag(!hasCarryBag)}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
              hasCarryBag
                ? "bg-[#FCFBF8] border-[#1C1B18]"
                : "bg-white border-[#E2DFD7]"
            }`}
          >
            <div className="pr-2">
              <span className="text-xs sm:text-sm font-bold text-[#1C1B18] block">
                Canvas Carry Tote Bag
              </span>
              <span className="text-[11px] text-[#6E6A63]">
                Zippered storage tote for each suit (+$1.60)
              </span>
            </div>
            <Switch size="small" checked={hasCarryBag} />
          </div>
        </div>
      </div>
    </OrderStepSection>
  );
}

