"use client";

import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import RelatedTools from "@/components/RelatedTools";
import { useState } from "react";

export default function DiscountCalculatorPage() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const [discountAmount, setDiscountAmount] =
    useState<number | null>(null);
  const [finalPrice, setFinalPrice] =
    useState<number | null>(null);

  const calculateDiscount = () => {
    const price = Number(originalPrice);
    const percent = Number(discount);

    if (!price || !percent) return;

    const discountValue = (price * percent) / 100;
    const finalValue = price - discountValue;

    setDiscountAmount(discountValue);
    setFinalPrice(finalValue);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Utilities", href: "/tools/utilities" },
            { label: "Discount Calculator" },
          ]}
        />

        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          Discount Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate discount amount and final price instantly.
        </p>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Original Price (₹)"
            value={originalPrice}
            onChange={(e) =>
              setOriginalPrice(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Discount (%)"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateDiscount}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate Discount
          </button>

        </div>

        {discountAmount !== null && (
          <div className="mt-8 grid md:grid-cols-2 gap-4">

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600">
                Discount Amount
              </p>

              <h2 className="text-2xl font-bold text-[#E5322D]">
                ₹ {discountAmount.toFixed(2)}
              </h2>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-gray-600">
                Final Price
              </p>

              <h2 className="text-2xl font-bold text-green-600">
                ₹ {finalPrice?.toFixed(2)}
              </h2>
            </div>

          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            How to Use?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Enter original product price.</li>
            <li>Enter discount percentage.</li>
            <li>Click Calculate Discount.</li>
            <li>View discount amount and final price.</li>
          </ul>
        </div>

      </div>

      <RelatedTools
        currentSlug="/discount-calculator"
        category="utilities"
      />

      <FAQSection
        faqs={[
          {
            question:
              "How do I calculate discount percentage?",
            answer:
              "Multiply the original price by the discount percentage and divide by 100.",
          },
          {
            question:
              "Can I calculate sale price?",
            answer:
              "Yes, this tool shows the final price after discount.",
          },
          {
            question:
              "Is this calculator free?",
            answer:
              "Yes, ToolVerse Discount Calculator is completely free.",
          },
        ]}
      />
    </main>
  );
}