"use client";

import { useState } from "react";

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toTitleCase = () => {
    setText(
      text
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );
  };

  const toSentenceCase = () => {
    const result = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s+\w)/g, (char) => char.toUpperCase());

    setText(result);
  };

  const toAlternatingCase = () => {
    let index = 0;

    const result = text
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
          const converted =
            index % 2 === 0
              ? char.toLowerCase()
              : char.toUpperCase();

          index++;
          return converted;
        }

        return char;
      })
      .join("");

    setText(result);
  };

  const toToggleCase = () => {
    setText(
      text
        .split("")
        .map((char) =>
          char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase()
        )
        .join("")
    );
  };

  const copyText = async () => {
    if (!text.trim()) return;

    await navigator.clipboard.writeText(text);
  };

  const downloadText = () => {
    if (!text.trim()) return;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "converted-text.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  const clearText = () => {
    setText("");
  };

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Text Case Converter
        </h1>

        <p className="text-gray-600 mt-3">
          Convert your text to uppercase, lowercase, title case,
          sentence case and more.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={12}
          placeholder="Enter or paste your text here..."
          className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#E5322D] focus:border-transparent text-gray-800"
        />

        {/* Stats */}
        <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-600">
          <span>
            <strong>{words}</strong> Words
          </span>

          <span>
            <strong>{characters}</strong> Characters
          </span>
        </div>

        {/* Case Buttons */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          <button
            onClick={toUpperCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            UPPERCASE
          </button>

          <button
            onClick={toLowerCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            lowercase
          </button>

          <button
            onClick={toTitleCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            Title Case
          </button>

          <button
            onClick={toSentenceCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            Sentence case
          </button>

          <button
            onClick={toAlternatingCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            aLtErNaTiNg CaSe
          </button>

          <button
            onClick={toToggleCase}
            className="bg-[#E5322D] hover:bg-[#c92824] text-white py-3 rounded-lg font-medium transition"
          >
            tOGGLE cASE
          </button>
        </div>

        {/* Utility Buttons */}
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          <button
            onClick={copyText}
            className="border border-[#E5322D] text-[#E5322D] hover:bg-[#E5322D] hover:text-white py-3 rounded-lg font-medium transition"
          >
            Copy Text
          </button>

          <button
            onClick={downloadText}
            className="border border-[#E5322D] text-[#E5322D] hover:bg-[#E5322D] hover:text-white py-3 rounded-lg font-medium transition"
          >
            Download TXT
          </button>

          <button
            onClick={clearText}
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-lg font-medium transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-10 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Free Online Text Case Converter
        </h2>

        <p className="text-gray-600 leading-7">
          ToolVerse Text Case Converter is a free online tool that
          helps you quickly change the capitalization of your text.
          Convert text to uppercase, lowercase, title case, sentence
          case, alternating case, or toggle case with just one click.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          How to Use the Text Case Converter
        </h2>

        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Enter or paste your text into the text box.</li>
          <li>Choose the case format you want.</li>
          <li>Your text will be converted instantly.</li>
          <li>Copy or download the converted text.</li>
        </ol>
      </div>
    </div>
  );
}