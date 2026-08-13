"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const calculateLoan = () => {
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const months = Number(tenure);

    if (!P || !annualRate || !months) return;

    const r = annualRate / 12 / 100;

    const emiValue =
      (P * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);

    const totalPay = emiValue * months;
    const totalInt = totalPay - P;

    setEmi(emiValue);
    setTotalPayment(totalPay);
    setTotalInterest(totalInt);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Loan Calculator
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Loan Amount (₹)
            </label>

            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="500000"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Interest Rate (% per year)
            </label>

            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="10"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Loan Tenure (Months)
            </label>

            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="60"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            onClick={calculateLoan}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate Loan
          </button>
        </div>

        {emi && (
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <h3 className="text-sm text-gray-600">
                Monthly EMI
              </h3>

              <p className="text-xl font-bold text-[#E5322D]">
                ₹{emi.toFixed(2)}
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-4 text-center">
              <h3 className="text-sm text-gray-600">
                Total Interest
              </h3>

              <p className="text-xl font-bold text-[#E5322D]">
                ₹{totalInterest?.toFixed(2)}
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-4 text-center">
              <h3 className="text-sm text-gray-600">
                Total Payment
              </h3>

              <p className="text-xl font-bold text-[#E5322D]">
                ₹{totalPayment?.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}