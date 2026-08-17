"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characters = text.length;

  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const sentences =
    text.trim() === ""
      ? 0
      : text
          .split(/[.!?]+/)
          .filter((sentence) => sentence.trim() !== "").length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text
          .split(/\n+/)
          .filter((paragraph) => paragraph.trim() !== "").length;

  const readingMinutes = words / 200;
  const speakingMinutes = words / 130;

  const readingTime =
    words === 0
      ? "0 min"
      : readingMinutes < 1
      ? "< 1 min"
      : `${Math.ceil(readingMinutes)} min`;

  const speakingTime =
    words === 0
      ? "0 min"
      : speakingMinutes < 1
      ? "< 1 min"
      : `${Math.ceil(speakingMinutes)} min`;

  const clearText = () => {
    setText("");
  };

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* =========================
          HERO
      ========================== */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="text-[#E5322D]">Word</span> Counter
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-7">
          Count words, characters, sentences and paragraphs instantly
          with this free online word counter. Get real-time writing,
          reading time and speaking time statistics.
        </p>
      </section>

      {/* =========================
          WORD COUNTER TOOL
      ========================== */}
      <section className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={12}
          aria-label="Enter text to count words"
          className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#E5322D] focus:border-transparent text-gray-800 leading-7"
        />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={clearText}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            Clear Text
          </button>

          <button
            onClick={copyText}
            className="bg-[#E5322D] hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            Copy Text
          </button>
        </div>

        {/* =========================
            STATISTICS
        ========================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
          {/* Words */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Words
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {words}
            </p>
          </div>

          {/* Characters */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Characters
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {characters}
            </p>
          </div>

          {/* Characters Without Spaces */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              No Spaces
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {charactersWithoutSpaces}
            </p>
          </div>

          {/* Sentences */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Sentences
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {sentences}
            </p>
          </div>

          {/* Paragraphs */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Paragraphs
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {paragraphs}
            </p>
          </div>

          {/* Reading Time */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Reading Time
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {readingTime}
            </p>
          </div>

          {/* Speaking Time */}
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Speaking Time
            </h3>

            <p className="text-2xl font-bold text-[#E5322D] mt-1">
              {speakingTime}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT IS WORD COUNTER
      ========================== */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Is a Word Counter?
        </h2>

        <p className="text-gray-600 leading-7">
          A word counter is an online tool that counts the number of
          words in a piece of text. It can also provide additional
          information such as character count, sentence count,
          paragraph count and estimated reading time.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          ToolVerse Word Counter is designed for students, writers,
          bloggers, content creators, professionals and anyone who
          needs to quickly check the length of their text.
        </p>
      </section>

      {/* =========================
          FEATURES
      ========================== */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Word Counter Features
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Word Count
            </h3>

            <p className="text-gray-600 leading-7">
              Instantly see the total number of words in your text
              as you type or paste content.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Character Count
            </h3>

            <p className="text-gray-600 leading-7">
              See the total number of characters, including spaces
              and line breaks.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Character Count Without Spaces
            </h3>

            <p className="text-gray-600 leading-7">
              Check how many characters your text contains without
              counting spaces or other whitespace characters.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sentence & Paragraph Count
            </h3>

            <p className="text-gray-600 leading-7">
              Quickly see the number of sentences and paragraphs
              in your content.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Reading Time
            </h3>

            <p className="text-gray-600 leading-7">
              Get an estimated reading time based on an average
              reading speed of 200 words per minute.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Speaking Time
            </h3>

            <p className="text-gray-600 leading-7">
              Estimate how long it may take to speak your content
              using an average speaking speed of 130 words per minute.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          HOW TO USE
      ========================== */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Use the Word Counter
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              1. Enter or Paste Your Text
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Type your content directly into the text box or paste
              text from another document.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              2. View Your Statistics
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Your word count, character count, sentences, paragraphs,
              reading time and speaking time are calculated automatically.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              3. Copy or Clear Your Text
            </h3>

            <p className="text-gray-600 leading-7 mt-1">
              Use the Copy Text button to copy your content or Clear
              Text to start a new calculation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHO CAN USE IT
      ========================== */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Who Can Use an Online Word Counter?
        </h2>

        <p className="text-gray-600 leading-7">
          A word counter can be useful for many types of writing.
          Students can use it to check assignment and essay limits.
          Writers and bloggers can track article length, while content
          creators can estimate the length of scripts and captions.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2 mt-5 leading-7">
          <li>Students and teachers</li>
          <li>Bloggers and content writers</li>
          <li>Authors and writers</li>
          <li>Social media creators</li>
          <li>SEO professionals</li>
          <li>Copywriters and marketers</li>
          <li>Professionals writing reports and documents</li>
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
              Is this word counter free?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. ToolVerse Word Counter is free to use online and
              does not require you to install any software.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              How does the word counter calculate words?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Words are counted by separating the text into groups
              of characters separated by whitespace.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Does the word counter count characters?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. The tool displays both total characters and
              characters without spaces.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              How is reading time calculated?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Reading time is estimated using an average reading
              speed of approximately 200 words per minute. Actual
              reading speed can vary from person to person.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              How is speaking time calculated?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Speaking time is estimated using an average speaking
              speed of approximately 130 words per minute. Actual
              speaking time depends on the speaker and presentation style.
            </p>
          </details>

          <details className="border border-gray-200 rounded-xl p-5">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Can I use this tool on my phone?
            </summary>

            <p className="text-gray-600 leading-7 mt-3">
              Yes. The Word Counter is designed to work on mobile
              phones, tablets and desktop computers.
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
          {/* Text Case Converter */}
          <a
            href="/text-case-converter"
            className="border border-gray-200 rounded-xl p-5 hover:border-[#E5322D] hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-900">
              Text Case Converter
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Convert text to uppercase, lowercase, title case and more.
            </p>
          </a>

          {/* Character Counter - Coming Soon */}
          <button
            type="button"
            onClick={() =>
              alert("Character Counter is coming soon!")
            }
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

          {/* More Text Tools - Coming Soon */}
          <button
            type="button"
            onClick={() =>
              alert("More Text Tools are coming soon!")
            }
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