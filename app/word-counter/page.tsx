"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  const charactersWithoutSpaces = text.replace(
    /\s/g,
    ""
  ).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(
          (sentence) => sentence.trim() !== ""
        ).length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter(
          (paragraph) => paragraph.trim() !== ""
        ).length;

        const readingTime = Math.ceil(words / 200);

const speakingTime = Math.ceil(words / 130);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Word Counter
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={10}
          className="w-full border rounded-lg p-4 resize-none"
        />
        <div className="flex gap-3 mt-4">
  <button
    onClick={() => setText("")}
    className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
  >
    Clear Text
  </button>

  <button
    onClick={() => navigator.clipboard.writeText(text)}
    className="bg-[#E5322D] hover:bg-red-700 text-white px-5 py-2 rounded-lg"
  >
    Copy Text
  </button>
</div>

       <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mt-6">
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Words
            </h3>
            <p className="text-2xl font-bold text-[#E5322D]">
              {words}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Characters
            </h3>
            <p className="text-2xl font-bold text-[#E5322D]">
              {characters}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              No Spaces
            </h3>
            <p className="text-2xl font-bold text-[#E5322D]">
              {charactersWithoutSpaces}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Sentences
            </h3>
            <p className="text-2xl font-bold text-[#E5322D]">
              {sentences}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4 text-center">
            <h3 className="text-sm text-gray-600">
              Paragraphs
            </h3>
            <p className="text-2xl font-bold text-[#E5322D]">
              {paragraphs}
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
  <h3 className="text-sm text-gray-600">
    Reading Time
  </h3>
  <p className="text-2xl font-bold text-[#E5322D]">
    {readingTime} min
  </p>
</div>

<div className="bg-red-50 rounded-xl p-4 text-center">
  <h3 className="text-sm text-gray-600">
    Speaking Time
  </h3>
  <p className="text-2xl font-bold text-[#E5322D]">
    {speakingTime} min
  </p>
</div>
        </div>
      </div>
      <section className="mt-10 bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">
    Free Word Counter Online
  </h2>

  <p className="text-gray-600 leading-7">
    Count words, characters, sentences and paragraphs instantly.
    This free online word counter helps writers, students,
    bloggers and content creators track text length, reading
    time and writing statistics in real time.
  </p>
</section>

<section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">
        Is this word counter free?
      </h3>
      <p className="text-gray-600">
        Yes, it is completely free to use.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Does it count characters without spaces?
      </h3>
      <p className="text-gray-600">
        Yes, both character counts are available.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        How is reading time calculated?
      </h3>
      <p className="text-gray-600">
        Reading time is estimated using an average speed of 200 words per minute.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}