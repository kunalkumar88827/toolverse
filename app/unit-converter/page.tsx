"use client";

import { useState } from "react";

export default function UnitConverterPage() {
  const [type, setType] = useState("length");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    const num = Number(value);

    if (!num) return;

    if (type === "length") {
      setResult(`${num} KM = ${num * 1000} Meters`);
    }

    if (type === "weight") {
      setResult(`${num} KG = ${num * 1000} Grams`);
    }

    if (type === "temperature") {
      setResult(
        `${num}°C = ${((num * 9) / 5 + 32).toFixed(2)}°F`
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        Unit Converter
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="length">KM → Meter</option>
          <option value="weight">KG → Gram</option>
          <option value="temperature">Celsius → Fahrenheit</option>
        </select>

        <input
          type="number"
          placeholder="Enter Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={convert}
          className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
        >
          Convert
        </button>

        {result && (
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}