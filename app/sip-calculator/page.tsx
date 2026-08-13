"use client";

import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [years, setYears] = useState("");

  const [invested, setInvested] = useState<number | null>(null);
  const [returns, setReturns] = useState<number | null>(null);
  const [maturity, setMaturity] = useState<number | null>(null);

  const calculateSIP = () => {
    const P = Number(monthlyInvestment);
    const annualRate = Number(returnRate);
    const Y = Number(years);

    if (!P || !annualRate || !Y) return;

    const r = annualRate / 12 / 100;
    const n = Y * 12;

    const maturityValue =
      P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    const investedAmount = P * n;
    const estimatedReturns = maturityValue - investedAmount;

    setInvested(Number(investedAmount.toFixed(2)));
    setReturns(Number(estimatedReturns.toFixed(2)));
    setMaturity(Number(maturityValue.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Finance", href: "/tools/finance" },
            { label: "SIP Calculator" },
          ]}
        />

        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          SIP Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate SIP returns and maturity amount instantly.
        </p>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Monthly Investment (₹)"
            value={monthlyInvestment}
            onChange={(e) =>
              setMonthlyInvestment(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Expected Return Rate (%)"
            value={returnRate}
            onChange={(e) =>
              setReturnRate(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Investment Period (Years)"
            value={years}
            onChange={(e) =>
              setYears(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateSIP}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate SIP
          </button>
        </div>

        {maturity && (
          <div className="mt-8 space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600">
                Maturity Value
              </p>

              <h2 className="text-2xl font-bold text-[#E5322D]">
                ₹ {maturity.toLocaleString()}
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Total Invested</p>

              <h3 className="font-semibold">
                ₹ {invested?.toLocaleString()}
              </h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Estimated Returns</p>

              <h3 className="font-semibold">
                ₹ {returns?.toLocaleString()}
              </h3>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            How to Use SIP Calculator?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Enter monthly investment amount.</li>
            <li>Enter expected annual return rate.</li>
            <li>Enter investment duration in years.</li>
            <li>Click Calculate SIP.</li>
          </ul>
        </div>
      </div>

      <RelatedTools
        currentSlug="/sip-calculator"
        category="finance"
      />
      <FAQSection
  faqs={[
    {
      question: "What is SIP?",
      answer:
        "SIP stands for Systematic Investment Plan, a method of investing a fixed amount regularly."
    },
    {
      question: "Can SIP returns be guaranteed?",
      answer:
        "No, SIP returns depend on market performance and are not guaranteed."
    },
    {
      question: "Is this SIP calculator free?",
      answer:
        "Yes, ToolVerse SIP Calculator is completely free."
    },
  ]}
/>
    </main>
  );
}