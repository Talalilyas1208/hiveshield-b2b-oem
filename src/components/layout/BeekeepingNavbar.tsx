"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";
import {
  CustomerServiceOutlined,
  MenuOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  TruckOutlined,
} from "@ant-design/icons";

interface BeekeepingNavbarProps {
  onOpenQuoteModal?: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Custom Suit Builder" },
  { href: "/catalog", label: "Wholesale Catalog" },
  { href: "/sting-testing-lab", label: "4.5mm Sting Lab" },
  { href: "/sample-kit", label: "Sample Kit ($35)" },
];

export function BeekeepingNavbar({ onOpenQuoteModal }: BeekeepingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1C1B18] text-white font-extrabold flex items-center justify-center text-base">
              HS
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight block leading-none text-[#1C1B18]">
                HiveShield
              </span>
              <span className="text-[11px] text-[#6E6A63] font-medium">
                Direct Factory Custom Ordering
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "font-bold text-[#1C1B18]"
                      : "text-[#5C5852] hover:text-[#1C1B18] transition"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            {onOpenQuoteModal && (
              <Button
                type="default"
                icon={<CustomerServiceOutlined />}
                onClick={onOpenQuoteModal}
                className="!rounded-xl !font-semibold !border-[#D6D2C9]"
              >
                Talk to Factory
              </Button>
            )}
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
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1B18]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}
