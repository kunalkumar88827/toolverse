"use client";

import { useState } from "react";
import RelatedTools from "@/components/RelatedTools";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Password Generator
      </h1>

      <div className="bg-white shadow rounded-2xl p-6">
        <label className="block mb-2 font-medium">
          Password Length
        </label>

        <input
          type="number"
          value={length}
          min={4}
          max={50}
          onChange={(e) =>
            setLength(Number(e.target.value))
          }
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={generatePassword}
          className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-6">
            <input
              value={password}
              readOnly
              className="w-full border rounded-lg p-3"
            />

            <button
              onClick={copyPassword}
              className="mt-3 w-full border border-[#E5322D] text-[#E5322D] py-3 rounded-lg"
            >
              Copy Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
<RelatedTools
  currentSlug="/password-generator"
  category="utilities"
/>