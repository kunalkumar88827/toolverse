"use client";

import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import RelatedTools from "@/components/RelatedTools";
import { useState } from "react";

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");

  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const calculateGST = () => {
    const price = Number(amount);
    const rate = Number(gstRate);

    if (!price || !rate) return;

    const gst = (price * rate) / 100;
    const total = price + gst;

    setGstAmount(Number(gst.toFixed(2)));
    setTotalAmount(Number(total.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Utilities", href: "/tools/utilities" },
            { label: "GST Calculator" },
          ]}
        />

        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          GST Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate GST amount and total price instantly.
        </p>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select GST Rate</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>

          <button
            onClick={calculateGST}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate GST
          </button>

        </div>

        {gstAmount !== null && (
          <div className="mt-8 space-y-4">

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600">GST Amount</p>
              <h2 className="text-2xl font-bold text-[#E5322D]">
                ₹ {gstAmount.toLocaleString()}
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Total Amount (Including GST)</p>
              <h3 className="font-semibold text-lg">
                ₹ {totalAmount?.toLocaleString()}
              </h3>
            </div>

          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            How to Use GST Calculator?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Enter product amount.</li>
            <li>Select GST percentage.</li>
            <li>Click Calculate GST.</li>
            <li>View GST amount and final amount.</li>
          </ul>
        </div>

      </div>

      <RelatedTools
        currentSlug="/gst-calculator"
        category="utilities"
      />

      <FAQSection
        faqs={[
          {
            question: "What is GST?",
            answer:
              "GST (Goods and Services Tax) is an indirect tax applied on goods and services in India.",
          },
          {
            question: "How is GST calculated?",
            answer:
              "GST is calculated by multiplying the amount by the GST percentage.",
          },
          {
            question: "Is this GST Calculator free?",
            answer:
              "Yes, ToolVerse GST Calculator is completely free to use.",
          },
        ]}
      />
    </main>
  );
}