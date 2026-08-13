"use client";

import { useState } from "react";

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
    <div className="max-w-2xl mx-auto p-6">
      {/* same UI style as EMI */}
    </div>
  );
}