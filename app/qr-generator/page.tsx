"use client";

import QRCode from "qrcode";
import { useState } from "react";

export default function QRGenerator() {
  const copyToClipboard = async () => {
  await navigator.clipboard.writeText(text);
  alert("Copied Successfully");
};
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [qrColor, setQrColor] = useState("#000000");
  const [qrSize, setQrSize] = useState(300);

  const generateQR = async () => {
    if (!text) return;

    const url = await QRCode.toDataURL(text, {
  width: qrSize,
  color: {
    dark: qrColor,
    light: "#FFFFFF",
  },
});
    setQrUrl(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">
  Free QR Code Generator
</h1>

<p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
Generate free QR Codes online for URLs, text, phone numbers,
emails, WhatsApp, WiFi and more. Create unlimited permanent
QR codes that never expire.
</p>

<div className="flex flex-wrap justify-center gap-3 mt-5 mb-8">
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
    ✓ 100% Free Forever
  </span>

  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
    ✓ No Expiry
  </span>

  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
    ✓ Unlimited QR Codes
  </span>

  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
    ✓ No Registration Required
  </span>
</div>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">

{/* LEFT SIDE */}

<div className="bg-white shadow rounded-2xl p-6">

  <h2 className="text-2xl font-bold mb-4">
    QR Preview
  </h2>

  <div className="h-[500px] flex items-center justify-center border rounded-xl bg-gray-50">

    {qrUrl ? (
      <img
        src={qrUrl}
        alt={`QR Code for ${text}`}
        className="max-w-[350px] w-full"
      />
    ) : (
      <div className="text-center text-gray-400">
        <div className="text-6xl mb-4">📱</div>
        <p>Your QR Code will appear here</p>
      </div>
    )}

  </div>

</div>

{/* RIGHT SIDE */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
  Create Your QR Code
</h2>
        <input
  type="text"
  placeholder="Enter URL, Text, Phone Number or Email"
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={(e) => {
  if (e.key === "Enter") {
    generateQR();
  }
}}
  className="w-full border rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#E5322D]"
/>
<div className="mt-4">
  <label className="block mb-2 font-medium">
    QR Color
  </label>

  <input
    type="color"
    value={qrColor}
    onChange={(e) => setQrColor(e.target.value)}
    className="w-20 h-12 border rounded-lg cursor-pointer"
  />
</div>
<div className="mt-4">
  <label className="block mb-2 font-medium">
    QR Size
  </label>

  <select
    value={qrSize}
    onChange={(e) =>
      setQrSize(Number(e.target.value))
    }
    className="w-full border rounded-xl p-3"
  >
    <option value="256">256 x 256</option>
    <option value="512">512 x 512</option>
    <option value="1024">1024 x 1024</option>
  </select>
</div>

        <button
  onClick={generateQR}
  className="w-full bg-[#E5322D] hover:bg-red-700 transition text-white py-4 rounded-xl font-semibold"
>
  Generate QR Code
</button>
<button
  onClick={copyToClipboard}
  disabled={!text}
  className="disabled:opacity-50 disabled:cursor-not-allowed w-full mt-3 border border-[#E5322D] text-[#E5322D] py-3 rounded-xl"
>
  Copy Content
</button>

        {qrUrl && (
          <div className="mt-6 text-center">

            <a
              href={qrUrl}
              download="toolverse-qr.png"
              className="w-full md:w-auto inline-block border border-[#E5322D] text-[#E5322D] px-6 py-3 rounded-lg"
            >
              Download QR
            </a>
            <a
  href={qrUrl}
  download="toolverse-qr.jpg"
  className="mt-3 md:mt-0 md:ml-3 inline-block bg-[#E5322D] text-white px-6 py-3 rounded-lg"
>
  Download JPG
</a>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4 text-sm">
  <p className="text-green-700 font-medium">
    ✓ This QR Code is permanent and will never expire.
  </p>

  <p className="text-gray-600 mt-1">
    You can use it for business cards, websites,
    social media, payments and marketing materials.
  </p>
</div>
          </div>
        )}
      </div>
      </div>
      <section className="mt-12 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-4">
    Free QR Code Generator Online
  </h2>

  <p className="text-gray-600 leading-7">
    Create QR codes for URLs, text, phone numbers,
    emails and more. Our QR Code Generator is completely
    free and creates permanent QR codes that never expire.
    No registration, no hidden charges and unlimited usage.
  </p>
</section>
<section className="mt-8 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">

    <div>
      <h3 className="font-semibold">
        Is this QR Code Generator free?
      </h3>
      <p className="text-gray-600">
        Yes, it is completely free forever.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Do QR codes expire?
      </h3>
      <p className="text-gray-600">
        No, generated QR codes never expire.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">
        Can I use QR codes for business?
      </h3>
      <p className="text-gray-600">
        Yes, for websites, payments, business cards and marketing.
      </p>
    </div>

  </div>
</section>
<section className="mt-8 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-4">
    Why Use Our QR Code Generator?
  </h2>

  <p className="text-gray-600 leading-7">
    Our free QR Code Generator helps you create high-quality QR codes
    for websites, text, phone numbers, emails, WiFi credentials and
    social media links. All generated QR codes are permanent,
    downloadable and ready to use for business cards, posters,
    marketing campaigns and digital sharing.
  </p>
</section>
    </div>
    
  );
}