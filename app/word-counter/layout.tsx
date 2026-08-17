import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Word Counter Online - Count Words & Characters | ToolVerse",

  description:
    "Free online word counter to count words, characters, sentences, paragraphs, reading time and speaking time instantly. No signup required.",

  keywords: [
    "word counter",
    "free word counter",
    "online word counter",
    "word count tool",
    "character counter",
    "word and character counter",
    "count words online",
    "essay word counter",
  ],

  openGraph: {
    title: "Free Word Counter Online | ToolVerse",
    description:
      "Count words, characters, sentences, paragraphs, reading time and speaking time instantly with ToolVerse's free online Word Counter.",
    type: "website",
    siteName: "ToolVerse",
  },

  twitter: {
    card: "summary",
    title: "Free Word Counter Online | ToolVerse",
    description:
      "Count words, characters, sentences, paragraphs and reading time instantly.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}