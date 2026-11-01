import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Tag } from "antd";
import { BEEKEEPING_CATALOG_PRODUCTS } from "@/lib/beekeeping-catalog-data";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { B2bFooter } from "@/components/layout/B2bFooter";
import { TechnicalBomTabs } from "@/components/beekeeping/TechnicalBomTabs";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = BEEKEEPING_CATALOG_PRODUCTS.find(
    (p) => p.slug === productSlug
  );

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans flex flex-col justify-between">
      <div>
        <BeekeepingNavbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-[#6E6A63]">
                SKU: {product.sku} · HS Code: {product.technicalSpec.hsCode}
              </span>
              <Tag
                color="gold"
                variant="filled"
                className="!m-0 !font-semibold !rounded-md"
              >
                MOQ: {product.moqMinimum} Units (Sample: ${product.samplePriceUsd})
              </Tag>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18]">
              {product.title}
            </h1>
            <p className="text-sm text-[#5C5852] mt-2 max-w-2xl leading-relaxed">
              {product.shortSummary}
            </p>

            {/* Volume Tier Table */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {product.priceTiers.map((tier) => (
                <div
                  key={tier.minQty}
                  className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]"
                >
                  <div className="text-xs text-[#6E6A63] font-medium">
                    {tier.maxQty
                      ? `${tier.minQty}–${tier.maxQty} Units`
                      : `${tier.minQty}+ Units`}
                  </div>
                  <div className="text-xl font-extrabold text-[#1C1B18] mt-1">
                    ${tier.fobUnitUsd.toFixed(2)}{" "}
                    <span className="text-xs font-normal text-[#6E6A63]">
                      / unit
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6E6A63] mt-1">
                    Lead time: {tier.leadTimeDays} days
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/">
                <Button
                  type="primary"
                  size="large"
                  className="!bg-[#1C1B18] !rounded-xl !font-bold !px-6"
                >
                  Customize & Calculate Exact Order Price
                </Button>
              </Link>
              <Link href="/sample-kit">
                <Button size="large" className="!rounded-xl !font-semibold">
                  Order Sample Kit ($35)
                </Button>
              </Link>
            </div>
          </div>

          <TechnicalBomTabs product={product} />
        </main>
      </div>

      <B2bFooter />
    </div>
  );
}

