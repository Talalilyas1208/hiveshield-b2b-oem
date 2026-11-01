"use client";

import React from "react";
import Link from "next/link";
import { Button, Tag } from "antd";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { B2bFooter } from "@/components/layout/B2bFooter";
import { AirMeshCrossSection } from "@/components/beekeeping/AirMeshCrossSection";
import { VeilOpticalComparator } from "@/components/beekeeping/VeilOpticalComparator";
import { FactoryQcTimeline } from "@/components/beekeeping/FactoryQcTimeline";

export default function StingTestingLabPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans flex flex-col justify-between">
      <div>
        <BeekeepingNavbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
            <Tag
              color="gold"
              variant="filled"
              className="!mb-2 !font-semibold !rounded-md"
            >
              CE Category II PPE Engineering Lab
            </Tag>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18]">
              4.5mm Sting-Barrier & Hardware Testing Lab
            </h1>
            <p className="text-sm text-[#5C5852] mt-2 max-w-2xl leading-relaxed">
              See how our 360 GSM 3-Layer AirMesh, 18×16 matte black fiberglass
              veil mesh, and YKK® #5 heavy brass zippers protect commercial
              beekeepers in the field.
            </p>
          </div>

          <AirMeshCrossSection />
          <VeilOpticalComparator />
          <FactoryQcTimeline />

          <div className="bg-[#1C1B18] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">
                Ready to build your custom bee suit line?
              </h2>
              <p className="text-xs text-white/75 mt-1">
                Configure your fabric, veil style, and logo in 60 seconds.
              </p>
            </div>
            <Link href="/">
              <Button
                size="large"
                className="!bg-white !text-[#1C1B18] !font-bold !rounded-xl !border-none"
              >
                Launch Custom Suit Builder
              </Button>
            </Link>
          </div>
        </main>
      </div>

      <B2bFooter />
    </div>
  );
}

