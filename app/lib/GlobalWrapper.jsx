"use client";

import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "./AntdRegistry";
import theme from "../theme/themeConfig";

export default function GlobalWrapper({ children }) {
  return (
    <div>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </StyledComponentsRegistry>
    </div>
  );
}
