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
      .replace(/(^\s*\w|[.!?]\s+\w)/g, (char) =>
        char.toUpperCase()
      );

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
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* =========================
          HERO / INTRO
      ========================== */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
  <span className="text-[#E5322D]">Text Case</span> Converter
</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-7">
          Convert text to uppercase, lowercase, title case, sentence case,
          alternating case, and toggle case instantly with this free online
          text case converter.
        </p>
      </section>

      {/* =========================
          TOOL
      ========================== */}
      <section className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={12}
          placeholder="Enter or paste your text here..."
          aria-label="Enter text to convert"
          className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#E5322D] focus:border-transparent text-gray-800 leading-7"
        />

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">
          <span>
            Words: <strong>{words}</strong>
          </span>

          <span>
            Characters: <strong>{characters}</strong>
          </span>
        </div>

        {/* Case Conversion Buttons */}
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
      </section>

      {/* =========================
          WHAT IS TEXT CASE CONVERTER
      ========================== */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Is a Text Case Converter?
        </h2>

        <p className="text-gray-600 leading-7">
          A text case converter is an online tool that changes the
          capitalization of text automatically. Instead of manually editing
          every word, you can paste your content into the converter and
          instantly change it to the format you need.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          ToolVerse Text Case Converter supports uppercase, lowercase,
          title case, sentence case, alternating case, and toggle case.
          It can be useful for writing, editing, social media content,
          documents, coding, and everyday text formatting.
        </p>

      </section>

      {/* =========================
          CASE TYPES
      ========================== */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Text Case Options
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              UPPERCASE
            </h3>

            <p className="text-gray-600 leading-7">
              Converts all alphabetic characters to capital letters.
              Example: "hello world" becomes "HELLO WORLD".
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              lowercase
            </h3>

            <p className="text-gray-600 leading-7">
              Converts all alphabetic characters to lowercase letters.
              Example: "HELLO WORLD" becomes "hello world".
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Title Case
            </h3>

            <p className="text-gray-600 leading-7">
              Capitalizes the beginning of words, making the text suitable
              for many titles and headings.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sentence case
            </h3>

            <p className="text-gray-600 leading-7">
              Converts text into sentence-style capitalization, with the
              first letter of sentences capitalized.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Alternating Case
            </h3>

            <p className="text-gray-600 leading-7">
              Alternates lowercase and uppercase letters to create a mixed
              capitalization style.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Toggle Case
            </h3>

            <p className="text-gray-600 leading-7">
              Switches uppercase letters to lowercase and lowercase letters
              to uppercase.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          HOW TO USE
      ========================== */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Use the Text Case Converter
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              1. Enter Your Text
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Type or paste the text you want to format into the text box.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              2. Choose a Case
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Select uppercase, lowercase, title case, sentence case,
              alternating case, or toggle case.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              3. Copy or Download
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Once your text is converted, use the Copy Text button or
              download the result as a TXT file.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          FEATURES
      ========================== */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Use ToolVerse Text Case Converter?
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-3 leading-7">
          <li>Free to use online.</li>
          <li>No software installation required.</li>
          <li>Multiple text case conversion options.</li>
          <li>Instant text conversion.</li>
          <li>Built-in word and character counter.</li>
          <li>Copy converted text with one click.</li>
          <li>Download your converted text as a TXT file.</li>
          <li>Works on desktop, tablet, and mobile devices.</li>
        </ul>

      </section>

      {/* =========================
          FAQ
      ========================== */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              What is a text case converter?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              A text case converter is an online tool that changes the
              capitalization of text. It can convert text into uppercase,
              lowercase, title case, sentence case, and other formats.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Is this text case converter free?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. ToolVerse Text Case Converter is available as a free
              online tool.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              How do I convert text to uppercase?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Enter or paste your text into the converter and click the
              UPPERCASE button. Your text will be converted instantly.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Can I convert uppercase text to lowercase?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. Paste your text and click the lowercase button to
              convert uppercase letters into lowercase letters.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              What is the difference between title case and sentence case?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Title case generally capitalizes the beginning of words and
              is commonly used for titles. Sentence case normally capitalizes
              the first letter of a sentence while keeping the remaining
              words mostly lowercase.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Can I copy or download the converted text?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. You can copy the converted text directly to your
              clipboard or download it as a TXT file.
            </p>
          </details>

        </div>

      </section>

      {/* =========================
    RELATED TOOLS
========================== */}
<section className="mt-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Related Text Tools
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

    {/* Word Counter */}
    <a
      href="/word-counter"
      className="border border-gray-200 rounded-xl p-5 hover:border-[#E5322D] hover:shadow-md transition"
    >
      <h3 className="font-semibold text-gray-900">
        Word Counter
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        Count words and characters in your text.
      </p>
    </a>

    {/* Character Counter - Coming Soon */}
    <button
      type="button"
      onClick={() => alert("Character Counter is coming soon!")}
      className="text-left border border-gray-200 rounded-xl p-5 hover:border-[#E5322D] hover:shadow-md transition"
    >
      <h3 className="font-semibold text-gray-900">
        Character Counter
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        Quickly count characters in your text.
      </p>

      <span className="inline-block mt-3 text-xs font-semibold text-[#E5322D]">
        Coming Soon
      </span>
    </button>

    {/* Text Tools - Coming Soon */}
    <button
      type="button"
      onClick={() => alert("More Text Tools are coming soon!")}
      className="text-left border border-gray-200 rounded-xl p-5 hover:border-[#E5322D] hover:shadow-md transition"
    >
      <h3 className="font-semibold text-gray-900">
        More Text Tools
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        Explore more useful text tools on ToolVerse.
      </p>

      <span className="inline-block mt-3 text-xs font-semibold text-[#E5322D]">
        Coming Soon
      </span>
    </button>

  </div>
</section>

    </main>
  );
}