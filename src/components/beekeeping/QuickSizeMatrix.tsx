"use client";

import React from "react";
import { Segmented, Tooltip } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { SuitSizeCode } from "@/types/beekeeping.types";

const DISPLAY_SIZES: Array<{
  code: SuitSizeCode;
  label: string;
  chest: string;
  height: string;
}> = [
  { code: "S", label: "Small (S)", chest: '36–38"', height: "5'4\"–5'7\"" },
  { code: "M", label: "Medium (M)", chest: '40–42"', height: "5'7\"–5'10\"" },
  { code: "L", label: "Large (L)", chest: '44–46"', height: "5'10\"–6'1\"" },
  { code: "XL", label: "X-Large (XL)", chest: '48–50"', height: "6'0\"–6'3\"" },
  { code: "2XL", label: "2X-Large (2XL)", chest: '52–54"', height: "6'1\"–6'4\"" },
  { code: "3XL", label: "3X-Large (3XL)", chest: '56–58"', height: "6'2\"–6'6\"" },
];

interface QuickSizeMatrixProps {
  quantities: Record<SuitSizeCode, number>;
  onChangeSizeQty: (size: SuitSizeCode, qty: number) => void;
  onApplyPresetTotal: (total: number) => void;
}

export function QuickSizeMatrix({
  quantities,
  onChangeSizeQty,
  onApplyPresetTotal,
}: QuickSizeMatrixProps) {
  const totalQty = Object.values(quantities).reduce((sum, n) => sum + n, 0);

  return (
    <div className="space-y-5">
      {/* Ant Design Segmented Preset Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF8F4] border border-[#EAE6DD] rounded-xl p-3">
        <span className="text-xs font-semibold text-[#5C5852] px-1">
          Quick fill standard size mix:
        </span>
        <div className="overflow-x-auto">
          <Segmented
            size="middle"
            value={
              [1, 50, 100, 200, 500].includes(totalQty) ? totalQty : undefined
            }
            onChange={(val) => onApplyPresetTotal(Number(val))}
            options={[
              { label: "1 Sample", value: 1 },
              { label: "50 Suits", value: 50 },
              { label: "100 Suits", value: 100 },
              { label: "200 (Free Setup)", value: 200 },
              { label: "500 Suits", value: 500 },
            ]}
          />
        </div>
      </div>

      {/* Spacious 2-Column Mobile / 3-Column Desktop Grid so inputs never get cramped */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
        {DISPLAY_SIZES.map((item) => {
          const val = quantities[item.code] || 0;
          const isActive = val > 0;

          return (
            <Tooltip
              key={item.code}
              title={`Fits Chest ${item.chest} · Height ${item.height}`}
              placement="top"
            >
              <div
                className={`rounded-xl border p-3.5 transition-all ${
                  isActive
                    ? "bg-[#FCFBF8] border-2 border-[#1C1B18] shadow-sm"
                    : "bg-[#FAF9F6] border-[#E2DFD7]"
                }`}
              >
                <div className="flex items-baseline justify-between mb-2.5">
                  <span className="font-bold text-sm text-[#1C1B18]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-[#78736A] font-medium">
                    Chest {item.chest}
                  </span>
                </div>

                {/* Unified Full-Width Stepper Bar */}
                <div className="flex items-center h-10 rounded-lg border border-[#D6D2C9] bg-white overflow-hidden focus-within:border-[#1C1B18]">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.label}`}
                    onClick={() =>
                      onChangeSizeQty(item.code, Math.max(0, val - 5))
                    }
                    className="w-9 h-full border-r border-[#EAE6DD] hover:bg-[#F2EFE9] flex items-center justify-center text-[#1C1B18] shrink-0 active:bg-[#E5E1D8] transition"
                  >
                    <MinusOutlined className="text-xs" />
                  </button>

                  <input
                    type="number"
                    min={0}
                    max={5000}
                    value={val}
                    onChange={(e) =>
                      onChangeSizeQty(
                        item.code,
                        Math.max(0, Number(e.target.value || 0))
                      )
                    }
                    className="w-full h-full text-center font-bold text-sm text-[#1C1B18] bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    aria-label={`Increase ${item.label}`}
                    onClick={() => onChangeSizeQty(item.code, val + 5)}
                    className="w-9 h-full border-l border-[#EAE6DD] hover:bg-[#F2EFE9] flex items-center justify-center text-[#1C1B18] shrink-0 active:bg-[#E5E1D8] transition"
                  >
                    <PlusOutlined className="text-xs" />
                  </button>
                </div>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
