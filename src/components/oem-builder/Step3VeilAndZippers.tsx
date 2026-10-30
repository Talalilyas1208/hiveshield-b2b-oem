"use client";

import React from "react";
import { VeilStyleCode, ZipperHardwareCode } from "@/types/beekeeping.types";
import { VEIL_CHOICES, ZIPPER_CHOICES } from "@/lib/beekeeping-options";
import { OrderStepSection } from "@/components/ui/OrderStepSection";
import { ChoiceCard } from "@/components/ui/ChoiceCard";

interface Step3VeilAndZippersProps {
  veil: VeilStyleCode;
  onSelectVeil: (veil: VeilStyleCode) => void;
  zipper: ZipperHardwareCode;
  onSelectZipper: (zipper: ZipperHardwareCode) => void;
}

export function Step3VeilAndZippers({
  veil,
  onSelectVeil,
  zipper,
  onSelectZipper,
}: Step3VeilAndZippersProps) {
  return (
    <OrderStepSection
      stepNumber={2}
      title="Pick Hood Style & Zippers"
      subtitle="Detachable veil hood with high-visibility black fiberglass mesh"
    >
      <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#6E6A63]">
        Detachable Hood Style
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {VEIL_CHOICES.map((item) => (
          <ChoiceCard
            key={item.code}
            title={item.title}
            description={item.desc}
            priceTag={item.priceTag}
            selected={veil === item.code}
            onSelect={() => onSelectVeil(item.code)}
          />
        ))}
      </div>

      <div className="mb-3 pt-3 border-t border-[#F0EDE6] text-xs font-bold uppercase tracking-wider text-[#6E6A63]">
        Zipper Hardware
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ZIPPER_CHOICES.map((item) => (
          <ChoiceCard
            key={item.code}
            title={item.title}
            description={item.desc}
            priceTag={item.priceTag}
            selected={zipper === item.code}
            onSelect={() => onSelectZipper(item.code)}
          />
        ))}
      </div>
    </OrderStepSection>
  );
}

