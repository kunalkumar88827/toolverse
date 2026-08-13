"use client";

import { useState } from "react";

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} Years, ${months} Months, ${days} Days`);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          Age Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate your exact age instantly.
        </p>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={calculateAge}
          className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-6 bg-red-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Your Age</p>
            <h2 className="text-2xl font-bold text-[#E5322D]">
              {age}
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}