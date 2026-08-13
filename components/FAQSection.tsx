"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="w-full text-left px-5 py-4 font-medium bg-gray-50 hover:bg-gray-100"
            >
              {faq.question}
            </button>

            {openIndex === index && (
              <div className="px-5 py-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}