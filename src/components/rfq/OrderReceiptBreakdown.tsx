"use client";

import React from "react";
import { Button, Divider, Tag } from "antd";
import {
  CheckCircleFilled,
  ClockCircleOutlined,
  InboxOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { BeekeepingPricingResult } from "@/lib/pricing-calculator";
import { CbmShipmentSummary } from "@/lib/cbm-calculator";

interface OrderReceiptBreakdownProps {
  pricing: BeekeepingPricingResult;
  shipping: CbmShipmentSummary;
  hasLogo: boolean;
  onSelectSampleOrder: () => void;
  onOpenQuoteModal: () => void;
}

export function OrderReceiptBreakdown({
  pricing,
  shipping,
  hasLogo,
  onSelectSampleOrder,
  onOpenQuoteModal,
}: OrderReceiptBreakdownProps) {
  const { totalQty } = pricing;

  return (
    <div>
      <div className="flex items-baseline justify-between pb-4">
        <div>
          <span className="text-xs font-medium text-[#6E6A63] block">
            Factory Price Per Suit
          </span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#1C1B18] tracking-tight">
              ${pricing.finalFobUnitUsd.toFixed(2)}
            </span>
            <span className="text-xs text-[#6E6A63] font-medium">
              USD / suit
            </span>
          </div>
        </div>

        <Tag
          icon={<ClockCircleOutlined />}
          variant="filled"
          className="!m-0 !bg-[#F4F1EA] !text-[#1C1B18] !font-semibold !px-2.5 !py-1 !rounded-lg"
        >
          {pricing.leadTimeDays} Days Lead
        </Tag>
      </div>

      <Divider className="!my-3" />

      <div className="space-y-2.5 text-xs sm:text-[13px] text-[#5C5852]">
        <div className="flex justify-between">
          <span>
            Base suit ({totalQty} {totalQty === 1 ? "suit" : "suits"})
          </span>
          <span className="font-semibold text-[#1C1B18]">
            ${pricing.baseTierUnitUsd.toFixed(2)}
          </span>
        </div>

        {pricing.fabricAdderUsd > 0 && (
          <div className="flex justify-between">
            <span>Selected fabric upgrade</span>
            <span className="font-semibold text-[#1C1B18]">
              +${pricing.fabricAdderUsd.toFixed(2)}
            </span>
          </div>
        )}

        {pricing.veilAdderUsd > 0 && (
          <div className="flex justify-between">
            <span>Selected veil upgrade</span>
            <span className="font-semibold text-[#1C1B18]">
              +${pricing.veilAdderUsd.toFixed(2)}
            </span>
          </div>
        )}

        {pricing.zipperAdderUsd > 0 && (
          <div className="flex justify-between">
            <span>Selected zipper upgrade</span>
            <span className="font-semibold text-[#1C1B18]">
              +${pricing.zipperAdderUsd.toFixed(2)}
            </span>
          </div>
        )}

        {(pricing.brandingUnitAdderUsd > 0 ||
          pricing.trimPackageUnitUsd > 0 ||
          pricing.constructionAdderUsd > 0) && (
          <div className="flex justify-between">
            <span>Custom logo, labels & extras</span>
            <span className="font-semibold text-[#1C1B18]">
              +$
              {(
                pricing.brandingUnitAdderUsd +
                pricing.trimPackageUnitUsd +
                pricing.constructionAdderUsd
              ).toFixed(2)}
            </span>
          </div>
        )}

        {hasLogo && (
          <div className="flex justify-between items-center pt-1">
            <span>One-time logo setup</span>
            {pricing.waivedSetupFeesUsd > 0 ? (
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircleFilled /> FREE (200+ suits)
              </span>
            ) : (
              <span className="font-semibold text-[#1C1B18]">
                +${pricing.payableSetupFeesUsd} (Free @ 200+)
              </span>
            )}
          </div>
        )}
      </div>

      <Divider className="!my-3.5" />

      <div className="bg-[#FAF8F4] border border-[#EAE6DD] rounded-xl p-3.5 text-xs space-y-2">
        <div className="flex items-center justify-between font-bold text-[#1C1B18]">
          <span className="flex items-center gap-1.5">
            <InboxOutlined /> Packing & Delivery
          </span>
          <span>
            {shipping.totalMasterCartons}{" "}
            {shipping.totalMasterCartons === 1 ? "Box" : "Boxes"} ·{" "}
            {shipping.totalGrossWeightKg} kg
          </span>
        </div>
        <div className="flex justify-between text-[#5C5852]">
          <span>Air Express (5–7 days to door):</span>
          <span className="font-semibold text-[#1C1B18]">
            ~${shipping.estimatedAirExpressUsd.toLocaleString()}
          </span>
        </div>
        {totalQty >= 50 && (
          <div className="flex justify-between text-[#5C5852]">
            <span>Sea Freight (30–35 days):</span>
            <span className="font-semibold text-emerald-800">
              ~${shipping.estimatedSeaFreightLclUsd.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      <div className="pt-4">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-sm font-bold text-[#1C1B18]">
            Total ({totalQty} {totalQty === 1 ? "suit" : "suits"})
          </span>
          <span className="text-2xl font-extrabold text-[#1C1B18]">
            $
            {pricing.totalOrderFobUsd.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        <Button
          type="primary"
          size="large"
          block
          icon={<RocketOutlined />}
          onClick={onOpenQuoteModal}
          className="!bg-[#1C1B18] hover:!bg-[#33312B] !h-12 !text-sm !font-bold !rounded-xl shadow-sm"
        >
          Get Official Quote & Spec Sheet
        </Button>

        {totalQty > 1 && (
          <Button
            size="large"
            block
            onClick={onSelectSampleOrder}
            className="mt-2.5 !h-10 !text-xs !font-semibold !rounded-xl !border-[#D6D2C9] !text-[#1C1B18]"
          >
            Or order 1 sample suit first ($65)
          </Button>
        )}
      </div>
    </div>
  );
}

