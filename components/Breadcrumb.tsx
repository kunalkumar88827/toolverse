"use client";

import Link from "next/link";

type Props = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#E5322D]"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </span>
      ))}
    </nav>
  );
}