import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Word Counter Online - Count Words & Characters",
  description:
    "Count words, characters, sentences, paragraphs, reading time and speaking time instantly.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}