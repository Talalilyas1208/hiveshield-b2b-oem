"use client";

import React from "react";
import Link from "next/link";
import { Button, Tag } from "antd";
import { BEEKEEPING_CATALOG_PRODUCTS } from "@/lib/beekeeping-catalog-data";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { B2bFooter } from "@/components/layout/B2bFooter";

export default function WholesaleCatalogPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans flex flex-col justify-between">
      <div>
        <BeekeepingNavbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="mb-8">
            <Tag
              color="gold"
              variant="filled"
              className="!mb-2 !font-semibold !rounded-md"
            >
              Direct Factory Wholesale Catalog
            </Tag>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Beekeeping Suits, Jackets & Goatskin Gloves
            </h1>
            <p className="text-sm text-[#6E6A63] mt-1">
              Select any product below to view volume price tiers, technical
              specifications, or customize with your own brand logo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEEKEEPING_CATALOG_PRODUCTS.map((product) => {
              const lowestPrice =
                product.priceTiers[product.priceTiers.length - 1].fobUnitUsd;
              const highestPrice = product.priceTiers[0].fobUnitUsd;

              return (
                <div
                  key={product.id}
                  className="bg-white border border-[#E5E1D8] rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(28,27,24,0.03)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[#6E6A63]">
                        SKU: {product.sku}
                      </span>
                      <Tag
                        variant="filled"
                        className="!m-0 !bg-[#F4F1EA] !text-[#1C1B18] !font-semibold !text-xs !rounded-full"
                      >
                        Min Order: {product.moqMinimum} pcs
                      </Tag>
                    </div>

                    <h2 className="text-lg font-bold text-[#1C1B18] leading-snug">
                      {product.title}
                    </h2>
                    <p className="text-xs text-[#6E6A63] mt-2 leading-relaxed">
                      {product.shortSummary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#F0EDE6] flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-[#6E6A63] block">
                          Factory Wholesale Price
                        </span>
                        <span className="text-xl font-extrabold text-[#1C1B18]">
                          ${lowestPrice.toFixed(2)} – ${highestPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-xs text-[#5C5852]">
                        Sample: <strong>${product.samplePriceUsd}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mt-6">
                    <Link href={`/catalog/${product.slug}`}>
                      <Button block className="!rounded-xl !font-semibold">
                        View Specs
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button
                        type="primary"
                        block
                        className="!bg-[#1C1B18] !rounded-xl !font-semibold"
                      >
                        Customize
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <B2bFooter />
    </div>
  );
}

