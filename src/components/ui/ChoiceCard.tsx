"use client";

import React from "react";
import { Tag } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

interface ChoiceCardProps {
  title: string;
  description: string;
  priceTag: string;
  badge?: string;
  selected: boolean;
  onSelect: () => void;
  swatchColor?: string;
}

export function ChoiceCard({
  title,
  description,
  priceTag,
  badge,
  selected,
  onSelect,
  swatchColor,
}: ChoiceCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer select-none ${
        selected
          ? "bg-[#FCFBF8] border-2 border-[#1C1B18] shadow-[0_4px_14px_rgba(28,27,24,0.06)]"
          : "bg-white border-[#E2DFD7] hover:border-[#A8A298] hover:bg-[#FDFCFA]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center flex-wrap gap-2">
          {selected ? (
            <CheckCircleFilled className="text-[#1C1B18] text-base shrink-0" />
          ) : (
            <span className="w-4 h-4 rounded-full border border-[#C2BDB3] group-hover:border-[#1C1B18] inline-block shrink-0" />
          )}

          {swatchColor && (
            <span
              className="w-4 h-4 rounded-full border border-black/15 shrink-0"
              style={{ backgroundColor: swatchColor }}
            />
          )}

          <span className="font-bold text-sm sm:text-[15px] text-[#1C1B18]">
            {title}
          </span>

          {badge && (
            <Tag
              color="gold"
              variant="filled"
              className="!m-0 !text-[11px] !font-semibold !px-2 !py-0 !rounded-md"
            >
              {badge}
            </Tag>
          )}
        </div>

        <span
          className={`text-xs font-bold shrink-0 px-2.5 py-1 rounded-lg transition-colors ${
            selected
              ? "bg-[#1C1B18] text-white"
              : "bg-[#F4F1EA] text-[#5C5852]"
          }`}
        >
          {priceTag}
        </span>
      </div>

      <p className="text-xs sm:text-[13px] text-[#6E6A63] mt-2 pl-6 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
