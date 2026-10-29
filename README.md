# 🐝 HiveShield B2B — Custom Beekeeping Gear OEM/ODM Manufacturing Platform
**Master Phased Implementation Roadmap & Architecture Plan**

HiveShield B2B is a dedicated, Tier-1 industrial OEM/ODM web platform built specifically for **Commercial Apiaries, Beekeeping Equipment Distributors, and Private-Label Beekeeping Brands** across the USA, UK, Europe, Australia, and New Zealand.

---

## 🏗️ Core Technology Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) + React 19 + TypeScript | SSR B2B Catalog, Programmatic SEO, Edge Middleware, API Routes |
| **Styling & UI** | Tailwind CSS + Radix UI + Framer Motion + Lucide | Industrial Honeycomb Amber (`#D97706`) & Apiary Slate (`#0F172A`) design system |
| **State Management** | Zustand (`persist` middleware) | 5-Step Bee Suit OEM Configurator (`useOemBuilderStore`) & Bulk RFQ Cart (`useRfqCartStore`) |
| **2D Suit Visualizer** | Parameterized Multi-Layer SVG + HTML5 Canvas | Interactive 3-Layer AirMesh texture overlay, interchangeable veils, and live logo placement |
| **Database & ORM** | PostgreSQL + Prisma ORM | Products, BOM materials, saved Tech Packs, RFQs, Proforma Invoices, and 10-stage QC tracking |
| **PDF Engine** | `@react-pdf/renderer` | Instant generation of 2-page Factory Tech Pack Spec Sheets & official Proforma Invoices (PI) |
| **Storage & Security** | AWS S3 / Cloudflare R2 + Upstash Redis + Zod | Presigned `.AI`/`.EPS`/`.PDF` logo uploads, DOMPurify SVG sanitization, and API rate limiting |

---

## 🚀 4-Phase Implementation Roadmap

### Phase 1: Foundation, Data Contracts & Calculation Engines (Day 1)
**Goal:** Establish the TypeScript data contracts, Tailwind industrial theme, and deterministic B2B pricing/shipping calculators so both frontend and backend share a single source of truth.

- [ ] **Step 1.1 — Base Project Configs**:
  - Configure `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, and `tailwind.config.ts` (Apiary Amber, Unbleached Cotton, Charcoal Veil Mesh, and Industrial Slate color tokens).
- [ ] **Step 1.2 — Beekeeping Domain Types (`src/types/beekeeping.types.ts`)**:
  - Define interfaces for `BeekeepingCategory` (`FULL_SUITS`, `JACKETS_SMOCKS`, `GOATSKIN_GLOVES`, `VEILS_HOODS`, `KIDS_APIARY`), `VeilStyle` (`FENCING`, `ROUND_BRIM`, `SHERIFF`), `ZipperSpec` (`YKK_BRASS_5`, `YKK_ACETAL_5`), `FabricLayerSpec` (`AIRMESH_3LAYER_360GSM`, `COTTON_TWILL_310GSM`, `POLYCOTTON_260GSM`), MOQ price tiers, and Tech Pack payloads.
- [ ] **Step 1.3 — Real-Time FOB & Private Label Pricing Engine (`src/lib/pricing-calculator.ts`)**:
  - Implement tiered volume pricing (`50–99`, `100–249`, `250–499`, `500+ pcs`), fabric/veil/brass-zipper adders, embroidery/PVC patch setup fee amortization (auto-waived at `200+ pcs`), and custom trim bundle pricing.
- [ ] **Step 1.4 — Export Master Carton, CBM & Air/Sea Freight Engine (`src/lib/cbm-calculator.ts`)**:
  - Implement master carton math ($60 \times 40 \times 40\text{ cm} = 0.096\text{ CBM}$, $15\text{ AirMesh suits/carton}$, $19.5\text{ kg}$ gross weight), DHL/FedEx volumetric weight ($L \times W \times H / 5000$), and 20ft/40ft FCL container load utilization bars.
- [ ] **Step 1.5 — Unit Tests (`tests/unit/`)**:
  - Verify pricing and CBM formulas with Vitest.

---

### Phase 2: High-Converting B2B Storefront & Technical SEO (Days 2–4)
**Goal:** Build the public-facing B2B storefront and interactive engineering proof pages with Schema.org wholesale structured data baked into every route.

- [ ] **Step 2.1 — Industrial Trust Layout Shell (`src/components/layout/`)**:
  - `FactoryTrustHeader.tsx`: Live production line status, CE Category II PPE `(EU) 2016/425` & `EN ISO 13688` badges, currency switcher (`USD`, `EUR`, `GBP`, `AUD`), and unit toggle (`cm/kg` vs `in/lbs`).
  - `BeekeepingNavbar.tsx` & `B2bFooter.tsx`: Direct links to Suits, Jackets, Goatskin Gloves, OEM Builder, Sting Testing Lab, HS Codes (`6211.33`, `4203.29`), and Incoterms guide.
- [ ] **Step 2.2 — Beekeeping Homepage & Interactive Engineering Widgets (`src/app/(storefront)/page.tsx`)**:
  - `SuitHotspotHero.tsx`: Interactive technical callout pins on a 3-Layer Ultra AirMesh Suit (YKK #5 Brass overlapping neck zippers, flame-retardant fiberglass black mesh veil, Kevlar hive-tool pocket, cushioned knee pads, thumb/ankle elastic loops).
  - `AirMeshCrossSection.tsx`: Magnified interactive diagram demonstrating why a $1.5\text{–}3.0\text{ mm}$ honeybee stinger cannot penetrate our $4.5\text{ mm}$ 3-layer EVA spacer mesh.
  - `VeilOpticalComparator.tsx`: Interactive comparison of Detachable Fencing Hood vs. $360^\circ$ Round Brim vs. Sheriff Dual-Ring Veil.
  - `MoqMarginCalculator.tsx`: Interactive quantity slider (`50` $\rightarrow$ `1,000+ pcs`) showing factory FOB price vs. distributor retail margin.
  - `FactoryQcTimeline.tsx`: 6-stage apiary manufacturing & AQL 2.5 needle/seam inspection process.
- [ ] **Step 2.3 — Wholesale Catalog & B2B Product Detail Page (`src/app/(storefront)/catalog/`)**:
  - `VolumeTierTable.tsx`: Highlights active FOB price bracket based on buyer's entered quantity.
  - `QuickSizeMatrix.tsx`: Direct wholesale quantity grid across `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`, `4XL`, `5XL Tall`.
  - `TechnicalBomTabs.tsx`: 3-Tab Engineering Data Sheet (Tab 1: Bill of Materials & ISO 4915 Stitch Specs; Tab 2: Toggleable `cm`/`in` Size Grading Chart; Tab 3: Master Carton Dimensions, HS Code & Lead Time).
- [ ] **Step 2.4 — Sting Testing Lab, Swatch Sample Kit & Country Export SEO Pages**:
  - `/sting-testing-lab`: Deep-dive lab verification page for commercial apiary procurement officers.
  - `/sample-kit`: Express ordering page for physical 3-Layer AirMesh, 310 GSM Cotton, and Drum-Dyed Goatskin leather swatch books ($35 credited toward bulk order).
  - `/export/[countrySlug]`: Programmatic SEO landing pages for USA, UK, Germany, Australia, New Zealand, Canada, and France with `Product` + `AggregateOffer` JSON-LD structured data.

---

### Phase 3: 5-Step Interactive Beekeeping OEM Private Label Studio (Days 5–6)
**Goal:** Allow wholesale buyers to visually customize their own private-label beekeeping suit line and export a factory-ready Tech Pack PDF in under 3 minutes.

- [ ] **Step 3.1 — Persisted OEM State Machine (`src/store/useOemBuilderStore.ts`)**:
  - Auto-saves all 5 steps to `localStorage` with real-time FOB unit price and MOQ validation.
- [ ] **Step 3.2 — Interactive 2D Bee Suit SVG Visualizer (`src/components/oem-builder/BeeSuitVisualizer.tsx`)**:
  - Front & back technical flat-sketch SVGs with dynamic color zones (`#main-torso`, `#pocket-trim`, `#knee-pads`, `#cuffs`), 3D honeycomb mesh `<pattern>` overlay, interchangeable veil silhouettes, and live chest/back logo preview.
- [ ] **Step 3.3 — The 5 Configuration Steps (`src/components/oem-builder/`)**:
  - `Step1SuitSilhouette.tsx`: Full Ventilated Suit, Pullover Jacket, Commercial Smock, Youth Suit, or Goatskin Gloves.
  - `Step2MeshAndFabricColors.tsx`: Select 360 GSM 3-Layer AirMesh or 310 GSM Cotton Twill + Pantone colorways (Optic White, Unbleached Natural, Olive Sage, Desert Khaki, Hi-Vis Amber).
  - `Step3VeilAndZippers.tsx`: Choose Veil Type, 18x16 Black Fiberglass Mesh, YKK #5 Heavy Brass vs. Acetal zippers, Velcro storm flaps, and reinforced hive-tool pockets.
  - `Step4ApiaryLogosAndTrim.tsx`: Upload `.AI`/`.EPS`/`.SVG`/`.PNG` logo for Left Chest, Back Yoke, or Sleeve + select Private Label Trim Package (Woven Neck Label, 600 GSM Hangtag, FBA Barcode Zip Bag, Canvas Carry Tote).
  - `Step5SizeGradingTechPack.tsx`: Enter size breakdown (`XS–5XL Tall`), review itemized FOB cost & mold setup waiver, download 2-page PDF Tech Pack, or push directly to Bulk RFQ Cart.

---

### Phase 4: Database, PDF Generators, Bulk RFQ Checkout & Factory ERP (Days 7–8)
**Goal:** Connect PostgreSQL/Prisma, generate official PDFs, and enable end-to-end RFQ quoting and production tracking.

- [ ] **Step 4.1 — Prisma Schema & Seed Data (`prisma/schema.prisma` & `prisma/seed.ts`)**:
  - Push schema to PostgreSQL and seed flagship Beekeeping Suits, Jackets, Goatskin Gloves, and BOM material options.
- [ ] **Step 4.2 — Factory PDF Engine (`src/components/pdf/`)**:
  - `BeeSuitTechPackDocument.tsx` (`GET /api/pdf/tech-pack/[id]`) & `ProformaInvoiceDocument.tsx`.
- [ ] **Step 4.3 — Bulk RFQ Cart & Container Load Checkout (`src/app/(storefront)/rfq-cart/page.tsx`)**:
  - `CbmContainerLoadBar.tsx` & `IncotermSelector.tsx` (`EXW`, `FOB`, `CIF`, `DDP Air/Sea`) + `POST /api/rfq/submit`.
- [ ] **Step 4.4 — Wholesale Buyer Portal (`/portal/*`) & Factory Admin ERP (`/admin/*`)**:
  - Buyer Portal: Saved Tech Packs, Pre-Production Sample QC Photo approval, and Proforma Invoice downloads.
  - Factory Admin ERP: `RfqKanbanBoard.tsx`, `QuoteResponderWorkbench.tsx` (`PATCH /api/admin/rfq/[id]/quote`), and 10-Stage `ProductionMilestoneTracker.tsx`.
