"use client";

import QRCode from "qrcode";
import { useState } from "react";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text) return;

    const url = await QRCode.toDataURL(text);
    setQrUrl(url);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        QR Code Generator
      </h1>

      <div className="bg-white shadow rounded-2xl p-6">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={generateQR}
          className="w-full bg-[#E5322D] text-white py-3 rounded-lg"
        >
          Generate QR Code
        </button>

        {qrUrl && (
          <div className="mt-6 text-center">
            <img
              src={qrUrl}
              alt="QR Code"
              className="mx-auto mb-4"
            />

            <a
              href={qrUrl}
              download="toolverse-qr.png"
              className="inline-block border border-[#E5322D] text-[#E5322D] px-6 py-3 rounded-lg"
            >
              Download QR
            </a>
          </div>
        )}
      </div>
    </div>
  );
}