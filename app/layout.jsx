import { Inter } from "next/font/google";
import "./globals.css";
import GlobalWrapper from "./lib/GlobalWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
