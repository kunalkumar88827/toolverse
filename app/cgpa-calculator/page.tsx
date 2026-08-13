"use client";

import { useState } from "react";

export default function CGPACalculator() {
  const [grades, setGrades] = useState("");
  const [cgpa, setCgpa] = useState<number | null>(null);

  const calculateCGPA = () => {
    const values = grades
      .split(",")
      .map((g) => Number(g.trim()))
      .filter((g) => !isNaN(g));

    if (values.length === 0) return;

    const avg =
      values.reduce((a, b) => a + b, 0) /
      values.length;

    setCgpa(avg);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        CGPA Calculator
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <label className="block mb-2 font-medium">
          Enter Grade Points
        </label>

        <input
          type="text"
          value={grades}
          onChange={(e) => setGrades(e.target.value)}
          placeholder="8.5, 9.0, 7.8, 8.2"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={calculateCGPA}
          className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
        >
          Calculate CGPA
        </button>

        {cgpa !== null && (
          <div className="mt-6 bg-red-50 rounded-xl p-5 text-center">
            <h3 className="text-gray-600">
              Your CGPA
            </h3>

            <p className="text-3xl font-bold text-[#E5322D]">
              {cgpa.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}