import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AntdThemeProvider } from "@/components/ui/AntdThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiveShield — Custom Beekeeping Suits & Direct Factory Ordering",
  description:
    "Design and order custom 3-Layer Ventilated AirMesh Beekeeping Suits, Heavy Cotton Suits, and Goatskin Gloves with live factory pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] selection:bg-[#1C1B18] selection:text-white">
        <AntdRegistry>
          <AntdThemeProvider>{children}</AntdThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
