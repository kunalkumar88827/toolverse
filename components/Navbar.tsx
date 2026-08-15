"use client";

import {
  GraduationCap,
  HeartPulse,
  Wallet,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
   const menuItems = [
  {
    title: "Student Tools",
    icon: GraduationCap,
    tools: [
      {
        name: "Percentage Calculator",
        href: "/percentage-calculator",
        desc: "Calculate percentages instantly",
      },
      {
        name: "Attendance Calculator",
        href: "/attendance-calculator",
        desc: "Track attendance percentage",
      },
      {
        name: "CGPA Calculator",
        href: "/cgpa-calculator",
        desc: "Convert CGPA to percentage",
      },
    ],
  },

  {
    title: "Finance Tools",
    icon: Wallet,
    tools: [
      {
        name: "EMI Calculator",
        href: "/emi-calculator",
        desc: "Calculate monthly EMI",
      },
      {
        name: "SIP Calculator",
        href: "/sip-calculator",
        desc: "Estimate SIP returns",
      },
      {
        name: "Loan Calculator",
        href: "/loan-calculator",
        desc: "Loan & interest calculator",
      },
    ],
  },

  {
    title: "Health Tools",
    icon: HeartPulse,
    tools: [
      {
        name: "BMI Calculator",
        href: "/bmi-calculator",
        desc: "Check body mass index",
      },
    ],
  },

  {
    title: "Utility Tools",
    icon: Wrench,
    tools: [
      {
        name: "Password Generator",
        href: "/password-generator",
        desc: "Generate secure passwords",
      },
      {
        name: "QR Generator",
        href: "/qr-generator",
        desc: "Create QR codes instantly",
      },
      {
        name: "Word Counter",
        href: "/word-counter",
        desc: "Count words and characters",
      },
      {
        name: "Text Case Converter",
        href: "/text-case-converter",
        desc: "Convert text cases",
      },
      {
        name: "Image Resizer",
        href: "/image-resizer",
        desc: "Resize your Image",
      },
    ],
  },
];
    const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       <button
  onClick={() => {
    router.push("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="text-3xl font-bold"
>
  <span className="text-[#E5322D]">Tool</span>
  <span>Verse</span>
</button>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
  <Link href="/">Home</Link>

  <div className="relative group">
    <button className="hover:text-[#E5322D]">
      Categories
    </button>

    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:grid grid-cols-2 gap-6 bg-white shadow-2xl border rounded-2xl p-6 w-[700px] z-50">

      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl p-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon
                size={20}
                className="text-[#E5322D]"
              />

              <h4 className="font-semibold">
                {item.title}
              </h4>
            </div>

            <div className="space-y-2">
              {item.tools.map((tool) => (
  <Link
    key={tool.name}
    href={tool.href}
    className="block p-3 rounded-lg hover:bg-red-50"
  >
    <p className="font-medium text-sm">
      {tool.name}
    </p>

    <p className="text-xs text-gray-500">
      {tool.desc}
    </p>
  </Link>
))}
            </div>
          </div>
        );
      })}

    </div>
  </div>

  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
</nav>
      </div>
    </header>
  );
}