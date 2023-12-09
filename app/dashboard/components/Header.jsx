import { Avatar, Dropdown, Layout } from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header: AndHeader } = Layout;

const items = [
  {
    label: "Settings",
    key: "1",
    icon: <SettingOutlined />,
    // onClick: handleLogout,
  },
  {
    label: "Logout",
    key: "2",
    icon: <LogoutOutlined />,
    danger: true,
    // onClick: handleLogout,
  },
];

export default function Header() {
  return (
    <AndHeader className="text-white h-16 px-6 bg-[#002140] flex items-center justify-between mx-4 mt-4 rounded-md">
      <h2>Next Admin</h2>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar icon={<UserOutlined />} className="bg-white text-[#002140]" />
          <div className="hidden md:block">
            <p className="text-xs">LOGGED IN AS</p>
            <p className="text-sm font-medium">Sakibul Islam</p>
          </div>
        </div>
      </Dropdown>
    </AndHeader>
  );
}
