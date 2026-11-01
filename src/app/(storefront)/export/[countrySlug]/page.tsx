import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Tag } from "antd";
import { EXPORT_COUNTRY_GUIDES } from "@/lib/export-countries-data";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { B2bFooter } from "@/components/layout/B2bFooter";

export default async function CountryExportPage({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const guide = EXPORT_COUNTRY_GUIDES.find((c) => c.slug === countrySlug);

  if (!guide) return notFound();

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans flex flex-col justify-between">
      <div>
        <BeekeepingNavbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
            <Tag
              color="gold"
              variant="filled"
              className="!mb-2 !font-semibold !rounded-md"
            >
              {guide.flag} Direct Factory Export to {guide.countryName}
            </Tag>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18]">
              Custom Beekeeping Suits & Gloves Manufacturer for{" "}
              {guide.countryName}
            </h1>
            <p className="text-sm text-[#5C5852] mt-2 leading-relaxed">
              {guide.sizingStandardNote}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
                <span className="text-[#6E6A63] block">
                  Import Tariff HS Codes ({guide.currencyCode})
                </span>
                <strong className="text-sm text-[#1C1B18] block mt-1">
                  Suits: {guide.importHsCodeSuit} · Gloves:{" "}
                  {guide.importHsCodeGloves}
                </strong>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
                <span className="text-[#6E6A63] block">
                  Estimated Customs Duty Rate
                </span>
                <strong className="text-sm text-[#1C1B18] block mt-1">
                  {guide.estimatedDutyRate}
                </strong>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
                <span className="text-[#6E6A63] block">
                  DHL / FedEx Air Express Transit
                </span>
                <strong className="text-sm text-[#1C1B18] block mt-1">
                  {guide.airExpressTransit}
                </strong>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E5E1D8]">
                <span className="text-[#6E6A63] block">
                  Door-to-Door Sea Freight Transit
                </span>
                <strong className="text-sm text-[#1C1B18] block mt-1">
                  {guide.seaFreightTransit}
                </strong>
              </div>
            </div>

            <Link href="/">
              <Button
                type="primary"
                size="large"
                className="!bg-[#1C1B18] !rounded-xl !font-bold !px-6"
              >
                Calculate Your {guide.countryName} Order Price
              </Button>
            </Link>
          </div>
        </main>
      </div>

      <B2bFooter />
    </div>
  );
}

