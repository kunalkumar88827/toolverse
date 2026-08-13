"use client";

import { useState } from "react";

export default function BMICalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightKg = Number(weight);
    const heightM = Number(height) / 100;

    if (!weightKg || !heightM) return;

    const bmiValue = weightKg / (heightM * heightM);

    let bmiCategory = "";

    if (bmiValue < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmiValue < 25) {
      bmiCategory = "Normal Weight";
    } else if (bmiValue < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }

    setBmi(Number(bmiValue.toFixed(1)));
    setCategory(bmiCategory);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          BMI Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate your Body Mass Index instantly.
        </p>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateBMI}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
          >
            Calculate BMI
          </button>
        </div>

        {bmi !== null && (
          <div className="mt-8">
            <div className="bg-red-50 p-5 rounded-xl">
              <p className="text-gray-600">Your BMI</p>
              <h2 className="text-3xl font-bold text-[#E5322D]">
                {bmi}
              </h2>

              <p className="mt-2 font-medium">
                Category: {category}
              </p>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">
            BMI Categories
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Below 18.5 → Underweight</li>
            <li>18.5 - 24.9 → Normal Weight</li>
            <li>25 - 29.9 → Overweight</li>
            <li>30+ → Obese</li>
          </ul>
        </div>
      </div>
    </main>
  );
}