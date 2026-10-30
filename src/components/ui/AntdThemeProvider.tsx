"use client";

import React from "react";
import { ConfigProvider } from "antd";

export function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1C1B18",
          colorInfo: "#1C1B18",
          colorSuccess: "#15803D",
          colorWarning: "#B45309",
          colorTextBase: "#1C1B18",
          colorBgBase: "#FFFFFF",
          colorBorder: "#DCD8CE",
          borderRadius: 10,
          fontFamily:
            "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          controlHeight: 38,
        },
        components: {
          Button: {
            fontWeight: 600,
            controlHeightLG: 46,
            borderRadiusLG: 10,
          },
          Segmented: {
            itemSelectedBg: "#1C1B18",
            itemSelectedColor: "#FFFFFF",
            trackBg: "#F2EFE9",
            itemColor: "#4A4742",
          },
          InputNumber: {
            controlHeight: 38,
            borderRadius: 8,
          },
          Card: {
            borderRadiusLG: 14,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

