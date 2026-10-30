"use client";

import React from "react";
import { Tag } from "antd";

interface OrderStepSectionProps {
  stepNumber: number;
  title: string;
  subtitle?: string;
  badgeText?: string;
  children: React.ReactNode;
}

export function OrderStepSection({
  stepNumber,
  title,
  subtitle,
  badgeText,
  children,
}: OrderStepSectionProps) {
  return (
    <section className="bg-white border border-[#E5E1D8] rounded-2xl p-5 sm:p-7 shadow-[0_2px_8px_rgba(28,27,24,0.03)] transition-all">
      <div className="flex flex-wrap items-start sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#F0EDE6]">
        <div className="flex items-start sm:items-center gap-3.5">
          <span className="w-8 h-8 rounded-xl bg-[#1C1B18] text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-sm">
            {stepNumber}
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#1C1B18] tracking-tight leading-snug">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#6E6A63] mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {badgeText && (
          <Tag
            variant="filled"
            className="!m-0 !px-3 !py-1 !rounded-full !bg-[#F4F1EA] !text-[#1C1B18] !font-semibold !text-xs"
          >
            {badgeText}
          </Tag>
        )}
      </div>

      {children}
    </section>
  );
}
