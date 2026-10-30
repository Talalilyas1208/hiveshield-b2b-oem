"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { VeilStyleCode } from "@/types/beekeeping.types";

interface BeeSuitVisualizerProps {
  suitColorHex: string;
  suitColorName: string;
  fabricName: string;
  veilStyle: VeilStyleCode;
  zipperLabel: string;
  hasChestLogo: boolean;
  logoText?: string;
}

export function BeeSuitVisualizer({
  suitColorHex,
  suitColorName,
  fabricName,
  veilStyle,
  zipperLabel,
  hasChestLogo,
  logoText = "YOUR LOGO",
}: BeeSuitVisualizerProps) {
  return (
    <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#1C1B18]">
            Live Suit Preview
          </span>
        </div>
        <span className="text-xs font-medium text-[#6E6A63]">
          {suitColorName} · {fabricName}
        </span>
      </div>

      {/* Studio Backdrop Preview Canvas */}
      <div className="relative bg-gradient-to-b from-[#F7F5F0] to-[#EFECE4] rounded-xl py-6 px-4 flex flex-col items-center justify-center border border-[#E6E2D8]">
        {/* Top-Right CE Badge */}
        <div className="absolute top-3 right-3">
          <Tag
            icon={<SafetyCertificateOutlined />}
            variant="filled"
            className="!m-0 !bg-white/90 !text-[#1C1B18] !text-[11px] !font-medium !rounded-full shadow-sm"
          >
            4.5mm Sting-Proof
          </Tag>
        </div>

        <svg
          viewBox="0 0 220 270"
          className="w-40 sm:w-48 h-48 sm:h-56 drop-shadow-md transition-all duration-300"
          aria-label="Custom Bee Suit Preview"
        >
          {/* Hood / Veil Shape */}
          {veilStyle === "ROUND_BRIM_360" ? (
            <g>
              <ellipse
                cx="110"
                cy="28"
                rx="46"
                ry="10"
                fill={suitColorHex}
                stroke="#1C1B18"
                strokeWidth="2"
              />
              <path
                d="M78 28 Q110 10 142 28"
                fill={suitColorHex}
                stroke="#1C1B18"
                strokeWidth="2"
              />
              <rect
                x="78"
                y="28"
                width="64"
                height="34"
                rx="4"
                fill="#222220"
                fillOpacity="0.84"
                stroke="#1C1B18"
                strokeWidth="1.5"
              />
            </g>
          ) : (
            <g>
              <path
                d="M82 62 L85 22 Q110 12 135 22 L138 62 Z"
                fill={suitColorHex}
                stroke="#1C1B18"
                strokeWidth="2"
              />
              <polygon
                points="88,28 132,28 135,54 85,54"
                fill="#222220"
                fillOpacity="0.86"
                stroke="#1C1B18"
                strokeWidth="1.5"
              />
            </g>
          )}

          {/* Main Suit Torso & Arms */}
          <path
            d="M78 62 L142 62 L176 92 L162 152 L142 140 L142 168 L78 168 L78 140 L58 152 L44 92 Z"
            fill={suitColorHex}
            stroke="#1C1B18"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Suit Legs */}
          <path
            d="M78 168 L142 168 L146 254 L116 254 L110 195 L104 254 L74 254 Z"
            fill={suitColorHex}
            stroke="#1C1B18"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Center Front Zipper Line */}
          <line
            x1="110"
            y1="62"
            x2="110"
            y2="188"
            stroke="#9A6B26"
            strokeWidth="2.5"
            strokeDasharray="3 2"
          />

          {/* Chest Pockets */}
          <rect
            x="84"
            y="84"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="#1C1B18"
            strokeWidth="1.3"
          />
          <rect
            x="118"
            y="84"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="#1C1B18"
            strokeWidth="1.3"
          />

          {/* Knee Pads */}
          <rect
            x="78"
            y="204"
            width="24"
            height="22"
            rx="3"
            fill="#1C1B18"
            fillOpacity="0.1"
            stroke="#1C1B18"
            strokeWidth="1.2"
          />
          <rect
            x="118"
            y="204"
            width="24"
            height="22"
            rx="3"
            fill="#1C1B18"
            fillOpacity="0.1"
            stroke="#1C1B18"
            strokeWidth="1.2"
          />

          {/* Left Chest Custom Brand Crest */}
          {hasChestLogo && (
            <g>
              <rect
                x="115"
                y="73"
                width="24"
                height="8.5"
                rx="1.5"
                fill="#1C1B18"
              />
              <text
                x="127"
                y="78.8"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="4.2"
                fontWeight="bold"
              >
                {(logoText || "YOUR LOGO").slice(0, 9).toUpperCase()}
              </text>
            </g>
          )}
        </svg>

        {/* Bottom Spec Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          <Tag
            variant="filled"
            className="!m-0 !bg-white !text-[#4A4742] !rounded-full !px-3 !py-0.5 !text-xs border border-[#E2DFD7]"
          >
            {veilStyle === "ROUND_BRIM_360" ? "360° Round Veil" : "Fencing Veil"}
          </Tag>
          <Tag
            variant="filled"
            className="!m-0 !bg-white !text-[#4A4742] !rounded-full !px-3 !py-0.5 !text-xs border border-[#E2DFD7]"
          >
            {zipperLabel}
          </Tag>
          {hasChestLogo && (
            <Tag
              variant="filled"
              className="!m-0 !bg-[#1C1B18] !text-white !rounded-full !px-3 !py-0.5 !text-xs"
            >
              Logo: {(logoText || "YOUR LOGO").slice(0, 12)}
            </Tag>
          )}
        </div>
      </div>
    </div>
  );
}
