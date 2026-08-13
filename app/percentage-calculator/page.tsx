"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    if (!obtained || !total) return;

    const percentage =
      (Number(obtained) / Number(total)) * 100;

    setResult(Number(percentage.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Percentage Calculator
        </h1>

        <input
          type="number"
          placeholder="Obtained Marks"
          value={obtained}
          onChange={(e) => setObtained(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={calculatePercentage}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold">
              {result}%
            </p>
          </div>
        )}
      </div>
    </main>
  );
}