export interface ExportCountryGuide {
  slug: string;
  countryName: string;
  flag: string;
  currencyCode: string;
  importHsCodeSuit: string;
  importHsCodeGloves: string;
  estimatedDutyRate: string;
  airExpressTransit: string;
  seaFreightTransit: string;
  sizingStandardNote: string;
}

export const EXPORT_COUNTRY_GUIDES: ExportCountryGuide[] = [
  {
    slug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    currencyCode: "USD",
    importHsCodeSuit: "6211.33.00",
    importHsCodeGloves: "4203.29.00",
    estimatedDutyRate: "8.5% – 12% (DDP Door-to-Door Available)",
    airExpressTransit: "5–6 Days via DHL/FedEx",
    seaFreightTransit: "28–32 Days to Los Angeles / Savannah",
    sizingStandardNote: "Graded to US Generous Workwear Fit (S–5XL Tall).",
  },
  {
    slug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    currencyCode: "AUD",
    importHsCodeSuit: "6211.33.00",
    importHsCodeGloves: "4203.29.00",
    estimatedDutyRate: "0% – 5% Preferential Tariff",
    airExpressTransit: "5–7 Days to Sydney / Melbourne / Brisbane",
    seaFreightTransit: "22–26 Days to Port Botany / Melbourne",
    sizingStandardNote: "High-airflow 360 GSM mesh for 40°C+ Australian bush flows.",
  },
  {
    slug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    currencyCode: "GBP",
    importHsCodeSuit: "6211.33.0000",
    importHsCodeGloves: "4203.29.9000",
    estimatedDutyRate: "0% Duty under UK DCTS Scheme",
    airExpressTransit: "4–6 Days to London / East Midlands",
    seaFreightTransit: "24–28 Days to Felixstowe / Southampton",
    sizingStandardNote: "Includes UKCA & CE Category II PPE technical file.",
  },
  {
    slug: "germany",
    countryName: "Germany & EU",
    flag: "🇩🇪",
    currencyCode: "EUR",
    importHsCodeSuit: "6211.33.10",
    importHsCodeGloves: "4203.29.10",
    estimatedDutyRate: "0% Duty under EU GSP+ Status",
    airExpressTransit: "4–6 Days to Frankfurt / Leipzig",
    seaFreightTransit: "25–30 Days to Hamburg / Bremerhaven",
    sizingStandardNote: "Includes EU Metric Size Conversion (DE 46–64).",
  },
];

