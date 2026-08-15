import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Resizer Online",
  description:
    "Resize JPG, PNG and WEBP images online. Change image dimensions, compress image size and download instantly.",
  keywords: [
    "image resizer",
    "resize image online",
    "compress image",
    "jpg resizer",
    "png resizer",
    "webp converter",
  ],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}