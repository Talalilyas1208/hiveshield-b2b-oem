"use client";

import React, { useState } from "react";
import { message } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { useBeeSuitConfigurator } from "@/store/useOemBuilderStore";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { VolumeTierBanner } from "@/components/beekeeping/VolumeTierTable";
import { OrderStepSection } from "@/components/ui/OrderStepSection";
import { QuickSizeMatrix } from "@/components/beekeeping/QuickSizeMatrix";
import { Step2MeshAndFabricColors } from "@/components/oem-builder/Step2MeshAndFabricColors";
import { Step3VeilAndZippers } from "@/components/oem-builder/Step3VeilAndZippers";
import { Step4ApiaryLogosAndTrim } from "@/components/oem-builder/Step4ApiaryLogosAndTrim";
import { BeeSuitVisualizer } from "@/components/oem-builder/BeeSuitVisualizer";
import { OrderSummarySidebar } from "@/components/rfq/OrderSummarySidebar";
import { QuoteRequestModal } from "@/components/rfq/QuoteRequestModal";

export default function CleanBeekeepingOrderPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const cfg = useBeeSuitConfigurator();

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans pb-24 lg:pb-16">
      {contextHolder}
      <BeekeepingNavbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <VolumeTierBanner
          totalQty={cfg.totalQty}
          onSelectPresetQty={cfg.applyPresetTotal}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <Step2MeshAndFabricColors
              fabric={cfg.fabric}
              onSelectFabric={cfg.setFabric}
              selectedColor={cfg.selectedColor}
              onSelectColor={cfg.setSelectedColor}
            />

            <Step3VeilAndZippers
              veil={cfg.veil}
              onSelectVeil={cfg.setVeil}
              zipper={cfg.zipper}
              onSelectZipper={cfg.setZipper}
            />

            <OrderStepSection
              stepNumber={3}
              title="Select Quantities by Size"
              subtitle="Use +/- buttons or click a quick preset mix above"
              badgeText={`${cfg.totalQty} ${cfg.totalQty === 1 ? "Suit" : "Suits"} Total`}
            >
              <QuickSizeMatrix
                quantities={cfg.sizeQuantities}
                onChangeSizeQty={(size, q) =>
                  cfg.setSizeQuantities((prev) => ({ ...prev, [size]: q }))
                }
                onApplyPresetTotal={cfg.applyPresetTotal}
              />
            </OrderStepSection>

            <Step4ApiaryLogosAndTrim
              totalQty={cfg.totalQty}
              hasLogo={cfg.hasLogo}
              onToggleLogo={cfg.setHasLogo}
              logoText={cfg.logoText}
              onChangeLogoText={cfg.setLogoText}
              branding={cfg.branding}
              onChangeBranding={cfg.setBranding}
              hasPrivateLabelTags={cfg.hasPrivateLabelTags}
              onTogglePrivateLabelTags={cfg.setHasPrivateLabelTags}
              hasCarryBag={cfg.hasCarryBag}
              onToggleCarryBag={cfg.setHasCarryBag}
            />
          </div>

          <div className="lg:col-span-5">
            <OrderSummarySidebar
              pricing={cfg.pricing}
              shipping={cfg.shipping}
              hasLogo={cfg.hasLogo}
              onSelectSampleOrder={() => cfg.applyPresetTotal(1)}
              onOpenQuoteModal={() => setQuoteModalOpen(true)}
              visualizerSlot={
                <BeeSuitVisualizer
                  suitColorHex={cfg.selectedColor.hex}
                  suitColorName={cfg.selectedColor.name}
                  fabricName={cfg.activeFabricObj.title}
                  veilStyle={cfg.veil}
                  zipperLabel={
                    cfg.zipper === "YKK_BRASS_5_HEAVY"
                      ? "YKK Brass Zippers"
                      : "Standard Zippers"
                  }
                  hasChestLogo={cfg.hasLogo}
                  logoText={cfg.logoText}
                />
              }
            />
          </div>
        </div>
      </main>

      <QuoteRequestModal
        open={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        onSuccessSubmit={() => {
          setQuoteModalOpen(false);
          messageApi.success({
            content:
              "Quote & PDF Spec Sheet request sent! Our factory team will reply within 2 hours.",
            icon: <CheckCircleFilled className="text-emerald-600" />,
          });
        }}
        totalQty={cfg.totalQty}
        fabricTitle={cfg.activeFabricObj.title}
        colorName={cfg.selectedColor.name}
        unitPriceUsd={cfg.pricing.finalFobUnitUsd}
        totalOrderUsd={cfg.pricing.totalOrderFobUsd}
        totalBoxes={cfg.shipping.totalMasterCartons}
        totalWeightKg={cfg.shipping.totalGrossWeightKg}
      />
    </div>
  );
}
