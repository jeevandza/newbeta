import type { Metadata } from "next";
import { CommonLayout } from "@/components/layout/coomonLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CommonLayout>{children}</CommonLayout>;
}
