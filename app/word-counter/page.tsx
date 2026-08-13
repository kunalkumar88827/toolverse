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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
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
        </div>
      </div>
    </div>
  );
}