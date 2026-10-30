"use client";

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import {
  CustomerServiceOutlined,
  MenuOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  TruckOutlined,
} from "@ant-design/icons";

interface BeekeepingNavbarProps {
  onOpenQuoteModal: () => void;
}

export function BeekeepingNavbar({ onOpenQuoteModal }: BeekeepingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1C1B18] text-[#FAF9F6] text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <SafetyCertificateOutlined className="text-amber-400" />
              CE Category II Certified Sting Protection
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <ThunderboltOutlined className="text-amber-400" />
              Free Logo Setup on 200+ Suits
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-white/80">
            <TruckOutlined />
            <span>Worldwide Air Express (5–7 Days) & Door-to-Door Sea Freight</span>
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-md border-b border-[#E5E1D8] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1C1B18] text-white font-extrabold flex items-center justify-center text-base tracking-tight">
              HS
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight block leading-none">
                HiveShield
              </span>
              <span className="text-[11px] text-[#6E6A63] font-medium">
                Direct Factory Custom Ordering
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#5C5852]">
            <span className="font-bold text-[#1C1B18]">Custom Suit Builder</span>
            <span className="hover:text-[#1C1B18] cursor-pointer transition">
              Goatskin Gloves
            </span>
            <span className="hover:text-[#1C1B18] cursor-pointer transition">
              Swatch Sample Kit ($35)
            </span>
            <Button
              type="default"
              icon={<CustomerServiceOutlined />}
              onClick={onOpenQuoteModal}
              className="!rounded-xl !font-semibold !border-[#D6D2C9]"
            >
              Talk to Factory Team
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            />
          </div>
        </div>
      </header>

      <Drawer
        title="HiveShield Factory"
        placement="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="flex flex-col gap-4 text-base font-semibold">
          <span className="text-[#1C1B18]">1. Custom Suit Builder</span>
          <span className="text-[#5C5852]">2. Goatskin Apiary Gloves</span>
          <span className="text-[#5C5852]">3. Fabric Swatch Kit ($35)</span>
          <Button
            type="primary"
            size="large"
            block
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="mt-4 !bg-[#1C1B18] !rounded-xl"
          >
            Request Official Quote
          </Button>
        </div>
      </Drawer>
    </>
  );
}

