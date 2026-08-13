"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import RelatedTools from "@/components/RelatedTools";
import FAQSection from "@/components/FAQSection";


export default function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const calculateEMI = () => {
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const N = Number(tenure);

    if (!P || !annualRate || !N) return;

    const R = annualRate / 12 / 100;

    const emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const totalPaymentValue = emiValue * N;
    const totalInterestValue = totalPaymentValue - P;

    setEmi(Number(emiValue.toFixed(2)));
    setTotalPayment(Number(totalPaymentValue.toFixed(2)));
    setTotalInterest(Number(totalInterestValue.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">
         <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Finance", href: "/tools/finance" },
        { label: "EMI Calculator" },
      ]}
    />
        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          EMI Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate your monthly EMI instantly.
        </p>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Loan Amount (₹)"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Tenure (Months)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateEMI}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate EMI
          </button>
        </div>

        {emi && (
          <div className="mt-8 space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-600">Monthly EMI</p>
              <h2 className="text-2xl font-bold text-[#E5322D]">
                ₹ {emi.toLocaleString()}
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Total Interest</p>
              <h3 className="font-semibold">
                ₹ {totalInterest?.toLocaleString()}
              </h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Total Payment</p>
              <h3 className="font-semibold">
                ₹ {totalPayment?.toLocaleString()}
              </h3>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            How to Use EMI Calculator?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Enter your loan amount.</li>
            <li>Enter annual interest rate.</li>
            <li>Enter loan tenure in months.</li>
            <li>Click Calculate EMI.</li>
          </ul>
        </div>
      </div>
      <RelatedTools
      currentSlug="/emi-calculator"
      category="finance"
    />
    <FAQSection
  faqs={[
    {
      question: "What is EMI?",
      answer:
        "EMI (Equated Monthly Installment) is the fixed amount paid every month to repay a loan."
    },
    {
      question: "Does a higher tenure reduce EMI?",
      answer:
        "Yes, increasing the loan tenure generally reduces the monthly EMI amount."
    },
    {
      question: "Is this EMI calculator free?",
      answer:
        "Yes, ToolVerse EMI Calculator is completely free to use."
    },
  ]}
/>
    </main>
  );
  
}
