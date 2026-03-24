import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Radio",
  description: "A simple English radio aggregator for mobile and desktop listening."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
