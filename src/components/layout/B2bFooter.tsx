"use client";

import React from "react";
import Link from "next/link";

export function B2bFooter() {
  return (
    <footer className="bg-white border-t border-[#E5E1D8] mt-16 text-xs text-[#6E6A63]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="font-bold text-base text-[#1C1B18] block mb-2">
            HiveShield Factory
          </span>
          <p className="leading-relaxed">
            Direct OEM/ODM manufacturer of 3-Layer 4.5mm Ventilated AirMesh
            Beekeeping Suits, Cotton Jackets, and Grade-A Goatskin Gloves.
          </p>
        </div>

        <div>
          <span className="font-bold text-[#1C1B18] uppercase tracking-wider block mb-2.5">
            Direct Ordering
          </span>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#1C1B18]">
                Custom Bee Suit Builder
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="hover:text-[#1C1B18]">
                Wholesale Catalog
              </Link>
            </li>
            <li>
              <Link href="/sting-testing-lab" className="hover:text-[#1C1B18]">
                4.5mm Sting Testing Lab
              </Link>
            </li>
            <li>
              <Link href="/sample-kit" className="hover:text-[#1C1B18]">
                Order Fabric Swatch Kit ($35)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="font-bold text-[#1C1B18] uppercase tracking-wider block mb-2.5">
            Country Export Hubs
          </span>
          <ul className="space-y-2">
            <li>
              <Link href="/export/usa" className="hover:text-[#1C1B18]">
                🇺🇸 USA Commercial Apiaries
              </Link>
            </li>
            <li>
              <Link href="/export/australia" className="hover:text-[#1C1B18]">
                🇦🇺 Australia Honey Producers
              </Link>
            </li>
            <li>
              <Link href="/export/uk" className="hover:text-[#1C1B18]">
                🇬🇧 UK Apiary Distributors
              </Link>
            </li>
            <li>
              <Link href="/export/germany" className="hover:text-[#1C1B18]">
                🇩🇪 Germany & EU Imker Stores
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="font-bold text-[#1C1B18] uppercase tracking-wider block mb-2.5">
            Customs & Compliance
          </span>
          <ul className="space-y-1.5">
            <li>CE Category II PPE (EU) 2016/425</li>
            <li>Suits HS Code: 6211.33.00</li>
            <li>Gloves HS Code: 4203.29.00</li>
            <li>MOQ: 50 Suits (Free Logo Setup @ 200+)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

