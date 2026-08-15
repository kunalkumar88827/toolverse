import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free QR Code Generator Online - Create Unlimited QR Codes",
  description:
    "Generate QR codes online for URLs, text, phone numbers, emails, WhatsApp, WiFi and more.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}