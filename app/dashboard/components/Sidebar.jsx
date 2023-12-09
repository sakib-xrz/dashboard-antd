"use client";

import React, { useState } from "react";
import {
  LayoutOutlined,
  TeamOutlined,
  ShopOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Header from "./Header";
import Link from "next/link";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link href={"/dashboard"}>Dashboard</Link>, "1", <LayoutOutlined />),
  getItem(<Link href={"/dashboard/users"}>Users</Link>, "2", <TeamOutlined />),
  getItem(
    <Link href={"/dashboard/products"}>Products</Link>,
    "3",
    <ShopOutlined />
  ),
  getItem(
    <Link href={"/dashboard/transaction"}>Transaction</Link>,
    "4",
    <RiseOutlined />
  ),
];
const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        className="absolute h-screen"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="mt-3"
        />
      </Sider>
      <Layout className="pl-20">
        <Header />
        <Content
          style={{
            margin: "16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: 6,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
