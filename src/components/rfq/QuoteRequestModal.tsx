"use client";

import React from "react";
import { Button, Form, Input, Modal } from "antd";

interface QuoteRequestModalProps {
  open: boolean;
  onClose: () => void;
  onSuccessSubmit: () => void;
  totalQty: number;
  fabricTitle: string;
  colorName: string;
  unitPriceUsd: number;
  totalOrderUsd: number;
  totalBoxes: number;
  totalWeightKg: number;
}

export function QuoteRequestModal({
  open,
  onClose,
  onSuccessSubmit,
  totalQty,
  fabricTitle,
  colorName,
  unitPriceUsd,
  totalOrderUsd,
  totalBoxes,
  totalWeightKg,
}: QuoteRequestModalProps) {
  return (
    <Modal
      title="Get Your Official Factory Quote & Spec Sheet"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <div className="bg-[#FAF8F4] border border-[#EAE6DD] rounded-xl p-3.5 mb-4 text-xs space-y-1">
        <div className="flex justify-between font-bold text-[#1C1B18]">
          <span>
            {totalQty} × {fabricTitle} ({colorName})
          </span>
          <span>${unitPriceUsd.toFixed(2)} / suit</span>
        </div>
        <div className="text-[#6E6A63]">
          Total FOB Estimate:{" "}
          <strong className="text-[#1C1B18]">
            ${totalOrderUsd.toLocaleString()}
          </strong>{" "}
          · {totalBoxes} Boxes ({totalWeightKg} kg)
        </div>
      </div>

      <Form layout="vertical" onFinish={onSuccessSubmit}>
        <Form.Item
          label="Your Name or Apiary Company"
          name="company"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="e.g. Golden Valley Apiaries" size="large" />
        </Form.Item>

        <Form.Item
          label="Business Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="you@company.com" size="large" />
        </Form.Item>

        <Form.Item label="Delivery Country & WhatsApp (Optional)" name="phone">
          <Input placeholder="e.g. USA / +1 555 234 5678" size="large" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          className="!bg-[#1C1B18] !h-12 !rounded-xl !font-bold mt-2"
        >
          Send My Quote & Spec Sheet Now
        </Button>
      </Form>
    </Modal>
  );
}

