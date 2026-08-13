"use client";

import { useState } from "react";

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  const toUpperCase = () => setText(text.toUpperCase());

  const toLowerCase = () => setText(text.toLowerCase());

  const toTitleCase = () => {
    setText(
      text.replace(
        /\w\S*/g,
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
      )
    );
  };

  const clearText = () => setText("");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Text Case Converter
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          placeholder="Enter your text here..."
          className="w-full border rounded-lg p-4 resize-none"
        />

        <div className="grid md:grid-cols-4 gap-3 mt-6">
          <button
            onClick={toUpperCase}
            className="bg-[#E5322D] text-white py-3 rounded-lg"
          >
            UPPERCASE
          </button>

          <button
            onClick={toLowerCase}
            className="bg-[#E5322D] text-white py-3 rounded-lg"
          >
            lowercase
          </button>

          <button
            onClick={toTitleCase}
            className="bg-[#E5322D] text-white py-3 rounded-lg"
          >
            Title Case
          </button>

          <button
            onClick={clearText}
            className="border border-[#E5322D] text-[#E5322D] py-3 rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}