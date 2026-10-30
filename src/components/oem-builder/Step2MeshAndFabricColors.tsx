"use client";

import React from "react";
import { FabricMaterialCode } from "@/types/beekeeping.types";
import {
  FABRIC_CHOICES,
  SUIT_COLORS,
  SuitColorOption,
} from "@/lib/beekeeping-options";
import { OrderStepSection } from "@/components/ui/OrderStepSection";
import { ChoiceCard } from "@/components/ui/ChoiceCard";

interface Step2MeshAndFabricColorsProps {
  fabric: FabricMaterialCode;
  onSelectFabric: (fabric: FabricMaterialCode) => void;
  selectedColor: SuitColorOption;
  onSelectColor: (color: SuitColorOption) => void;
}

export function Step2MeshAndFabricColors({
  fabric,
  onSelectFabric,
  selectedColor,
  onSelectColor,
}: Step2MeshAndFabricColorsProps) {
  return (
    <OrderStepSection
      stepNumber={1}
      title="Choose Suit Fabric & Color"
      subtitle="All suits include padded knees & reinforced hive-tool pocket"
      badgeText={selectedColor.name}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {FABRIC_CHOICES.map((item) => (
          <ChoiceCard
            key={item.code}
            title={item.title}
            description={item.desc}
            priceTag={item.priceTag}
            badge={item.badge}
            selected={fabric === item.code}
            onSelect={() => onSelectFabric(item.code)}
          />
        ))}
      </div>

      <div className="pt-4 border-t border-[#F0EDE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs font-semibold text-[#5C5852]">
          Select Suit Color:{" "}
          <strong className="text-[#1C1B18]">{selectedColor.name}</strong>
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {SUIT_COLORS.map((color) => {
            const isSelected = selectedColor.id === color.id;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => onSelectColor(color)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-2 border-[#1C1B18] bg-[#FCFBF8] shadow-sm"
                    : "border-[#D6D2C9] bg-white hover:border-[#8C8881]"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </OrderStepSection>
  );
}

