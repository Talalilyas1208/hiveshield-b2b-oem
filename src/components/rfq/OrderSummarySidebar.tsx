"use client";

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { BeekeepingPricingResult } from "@/lib/pricing-calculator";
import { CbmShipmentSummary } from "@/lib/cbm-calculator";
import { OrderReceiptBreakdown } from "@/components/rfq/OrderReceiptBreakdown";

interface OrderSummarySidebarProps {
  pricing: BeekeepingPricingResult;
  shipping: CbmShipmentSummary;
  hasLogo: boolean;
  onSelectSampleOrder: () => void;
  onOpenQuoteModal: () => void;
  visualizerSlot?: React.ReactNode;
}

export function OrderSummarySidebar({
  pricing,
  shipping,
  hasLogo,
  onSelectSampleOrder,
  onOpenQuoteModal,
  visualizerSlot,
}: OrderSummarySidebarProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { totalQty } = pricing;

  return (
    <>
      <aside className="space-y-4 lg:sticky lg:top-6">
        {visualizerSlot}

        <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
          <OrderReceiptBreakdown
            pricing={pricing}
            shipping={shipping}
            hasLogo={hasLogo}
            onSelectSampleOrder={onSelectSampleOrder}
            onOpenQuoteModal={onOpenQuoteModal}
          />
        </div>
      </aside>

      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#DEDAD0] px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="text-left"
          >
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#6E6A63]">
              <span>{totalQty} Suits</span>
              <span>·</span>
              <span className="underline flex items-center gap-0.5 text-[#1C1B18] font-semibold">
                Details <UpOutlined className="text-[9px]" />
              </span>
            </div>
            <div className="text-lg font-extrabold text-[#1C1B18] leading-tight">
              $
              {pricing.totalOrderFobUsd.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}{" "}
              <span className="text-xs font-normal text-[#6E6A63]">
                (${pricing.finalFobUnitUsd.toFixed(2)}/ea)
              </span>
            </div>
          </button>

          <Button
            type="primary"
            size="large"
            onClick={onOpenQuoteModal}
            className="!bg-[#1C1B18] !px-5 !h-11 !rounded-xl !font-bold !text-xs"
          >
            Get Quote
          </Button>
        </div>
      </div>

      <Drawer
        title="Your Custom Suit Summary"
        placement="bottom"
        size="large"
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        className="lg:hidden"
      >
        <OrderReceiptBreakdown
          pricing={pricing}
          shipping={shipping}
          hasLogo={hasLogo}
          onSelectSampleOrder={() => {
            setMobileDrawerOpen(false);
            onSelectSampleOrder();
          }}
          onOpenQuoteModal={() => {
            setMobileDrawerOpen(false);
            onOpenQuoteModal();
          }}
        />
      </Drawer>
    </>
  );
}
