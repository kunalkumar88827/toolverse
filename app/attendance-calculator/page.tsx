"use client";

import { useState } from "react";

export default function AttendanceCalculator() {
  const [present, setPresent] = useState("");
  const [total, setTotal] = useState("");
  const [percentage, setPercentage] = useState<number | null>(null);

  const calculateAttendance = () => {
    const p = Number(present);
    const t = Number(total);

    if (!p || !t) return;

    setPercentage((p / t) * 100);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-center text-[#E5322D] mb-2">
          Attendance Calculator
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Calculate your attendance percentage instantly.
        </p>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Classes Attended"
            value={present}
            onChange={(e) => setPresent(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Total Classes"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateAttendance}
            className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
          >
            Calculate
          </button>

          {percentage !== null && (
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <p className="text-gray-600">
                Attendance Percentage
              </p>

              <h2 className="text-3xl font-bold text-[#E5322D]">
                {percentage.toFixed(2)}%
              </h2>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}