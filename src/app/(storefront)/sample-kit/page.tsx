"use client";

import React from "react";
import { Button, Form, Input, Tag, message } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { BeekeepingNavbar } from "@/components/layout/BeekeepingNavbar";
import { B2bFooter } from "@/components/layout/B2bFooter";

const SWATCH_KIT_ITEMS = [
  "3-Layer 4.5mm Ultra AirMesh Swatch (360 GSM)",
  "Lightweight Summer AirMesh Swatch (320 GSM)",
  "100% Heavy Unbleached Cotton Twill Swatch (310 GSM)",
  "18×16 Matte Black Fiberglass Veil Mesh Sample",
  "0.9mm Grade-A Drum-Dyed Goatskin Leather Swatch",
  "YKK® #5 Heavy Metal Brass Zipper Pull Card",
];

export default function SampleKitPage() {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1C1B18] font-sans flex flex-col justify-between">
      {contextHolder}
      <div>
        <BeekeepingNavbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
              <Tag
                color="gold"
                variant="filled"
                className="!mb-2 !font-semibold !rounded-md"
              >
                100% Credited Toward Your Bulk Order
              </Tag>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18]">
                Order Physical Fabric & Leather Swatch Box ($35)
              </h1>
              <p className="text-sm text-[#5C5852] mt-2 leading-relaxed">
                Touch and test our 4.5mm sting-proof AirMesh, heavy cotton,
                goatskin leather, and YKK brass zippers before placing a 50+
                unit bulk order. Delivered worldwide in 5 days via DHL Express.
              </p>

              <div className="mt-6 pt-5 border-t border-[#F0EDE6]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#6E6A63] mb-3">
                  What Is Inside the Swatch Box:
                </h2>
                <ul className="space-y-2.5 text-sm">
                  {SWATCH_KIT_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircleFilled className="text-emerald-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-[0_2px_8px_rgba(28,27,24,0.03)]">
              <div className="flex items-baseline justify-between border-b border-[#EAE6DF] pb-4 mb-4">
                <span className="font-bold text-base">Express Swatch Kit</span>
                <span className="text-2xl font-extrabold">$35.00 USD</span>
              </div>

              <Form
                layout="vertical"
                onFinish={() =>
                  messageApi.success(
                    "Sample Kit request received! We will send your DHL tracking link shortly."
                  )
                }
              >
                <Form.Item
                  label="Full Name & Apiary Name"
                  name="name"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="John Miller · Miller Honey Co." size="large" />
                </Form.Item>
                <Form.Item
                  label="Business Email"
                  name="email"
                  rules={[{ required: true, type: "email", message: "Required" }]}
                >
                  <Input placeholder="john@millerhoney.com" size="large" />
                </Form.Item>
                <Form.Item
                  label="Shipping Address & Country"
                  name="address"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Street, City, Postal Code, Country" size="large" />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className="!bg-[#1C1B18] !h-12 !rounded-xl !font-bold"
                >
                  Request $35 Swatch Kit Invoice
                </Button>
              </Form>
            </div>
          </div>
        </main>
      </div>

      <B2bFooter />
    </div>
  );
}

