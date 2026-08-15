"use client";

import FAQSection from "@/components/FAQSection";
import RelatedTools from "@/components/RelatedTools";
import { useState } from "react";

export default function ImageResizerPage() {

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [width, setWidth] = useState("800");
  const [height, setHeight] = useState("600");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [unit, setUnit] = useState("px");
const [format, setFormat] = useState("jpeg");
const [lockAspectRatio, setLockAspectRatio] = useState(true);
const [quality, setQuality] = useState(90);
const [aspectRatio, setAspectRatio] = useState(1);
const [estimatedSize, setEstimatedSize] = useState("");
const [actualSize, setActualSize] = useState("");
const [originalSizeKB, setOriginalSizeKB] = useState("0");

const presets = [
  {
    name: "Instagram Post",
    width: 1080,
    height: 1080,
  },
  {
    name: "Instagram Story",
    width: 1080,
    height: 1920,
  },
  {
    name: "YouTube Thumbnail",
    width: 1280,
    height: 720,
  },
  {
    name: "Facebook Post",
    width: 1200,
    height: 630,
  },
  {
    name: "Passport Photo",
    width: 413,
    height: 531,
  },
];

const handleImage = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const previewUrl = URL.createObjectURL(file);

  setImage(file);
  setPreview(previewUrl);

  const sizeKB = (file.size / 1024).toFixed(2);

  setOriginalSizeKB(sizeKB);
  setEstimatedSize(sizeKB);

  const img = new Image();

  img.onload = () => {
    setAspectRatio(img.width / img.height);
    setWidth(img.width.toString());
    setHeight(img.height.toString());
  };

  img.src = previewUrl;
};

const handleWidthChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const newWidth = e.target.value;

  setWidth(newWidth);

  if (lockAspectRatio && newWidth) {
    setHeight(
      Math.round(
        Number(newWidth) / aspectRatio
      ).toString()
    );
  }
};
const handleHeightChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const newHeight = e.target.value;

  setHeight(newHeight);

  if (lockAspectRatio && newHeight) {
    setWidth(
      Math.round(
        Number(newHeight) * aspectRatio
      ).toString()
    );
  }
};

const resizeImage = () => {
  if (!image) return;

  const img = new Image();
  img.src = URL.createObjectURL(image);

  img.onload = () => {
    const canvas = document.createElement("canvas");

    canvas.width = Number(width);
    canvas.height = Number(height);

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(
      img,
      0,
      0,
      Number(width),
      Number(height)
    );

    const resized = canvas.toDataURL(
  `image/${format}`,
  quality / 100
);

const base64 = resized.split(",")[1];

const sizeInKB = (
  (base64.length * 0.75) / 1024
).toFixed(2);

setActualSize(sizeInKB);

setDownloadUrl(resized);
  };
};

const calculateEstimatedSize = (
  originalSize: number,
  quality: number
) => {
  const estimated =
    (originalSize * quality) / 100;

  return (estimated / 1024).toFixed(2) + " KB";
};
const resetAll = () => {
  setImage(null);
  setPreview("");
  setWidth("800");
  setHeight("600");
  setDownloadUrl("");
  setEstimatedSize("");
  setActualSize("");
  setQuality(90);
  setFormat("jpeg");
  setUnit("px");
};

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">

  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-8">

      {/* LEFT SIDE */}

      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-[#E5322D] mb-2">
  Free Image Resizer Online
</h1>

<p className="text-gray-600 mb-6">
  Resize JPG, PNG and WEBP images online for free. Change image dimensions,
  compress image size and download instantly without losing quality.
</p>

        <h2 className="text-2xl font-bold mb-4">
          Upload & Preview
        </h2>

        <label className="block cursor-pointer">

  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#E5322D]">

    {!preview ? (
      <>
        <div className="text-5xl mb-3">🖼️</div>

        <h3 className="font-semibold text-lg">
          Upload Image
        </h3>

        <p className="text-gray-500 mt-2">
          JPG, PNG, WEBP Supported
        </p>
      </>
    ) : (
      <img
        src={preview}
        alt="Image Resizer Preview"
        className="mx-auto max-h-[280px] object-contain rounded-lg"
      />
    )}

    {image && (
      <p className="mt-3 text-green-600 text-sm truncate">
        {image.name}
      </p>
    )}

  </div>

  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
    className="hidden"
  />
</label>

        {image && (
          <div className="grid grid-cols-2 gap-4 mt-5">

            <div className="bg-gray-50 border rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Original Size
              </p>

              <p className="font-bold text-lg">
                {originalSizeKB} KB
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Estimated Output
              </p>

              <p className="font-bold text-lg text-[#E5322D]">
                {estimatedSize}
              </p>
              <p className="mt-2">
  Final Output:
  <strong className="text-green-600">
    {actualSize} KB
  </strong>
</p>
            </div>

          </div>
        )}

      </div>

      {/* RIGHT SIDE */}

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Resize Options
        </h2>
        <div className="grid grid-cols-2 gap-2 mb-4">

  {presets.map((preset) => (
    <button
      key={preset.name}
      onClick={() => {
        setWidth(preset.width.toString());
        setHeight(preset.height.toString());
      }}
      className="border rounded-lg p-2 text-sm hover:bg-red-50 hover:border-[#E5322D]"
    >
      {preset.name}
    </button>
  ))}

</div>

        <div className="space-y-5">

          <div className="grid grid-cols-2 gap-4">

            <input
              type="number"
              value={width}
              onChange={handleWidthChange}
              placeholder="Width"
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Height"
              className="border rounded-xl p-3"
            />

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={lockAspectRatio}
              onChange={(e) =>
                setLockAspectRatio(e.target.checked)
              }
            />

            <span>
              Maintain Aspect Ratio
            </span>

          </label>

          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option value="px">Pixels (px)</option>
            {/* <option value="cm">Centimeters (cm)</option>
            <option value="mm">Millimeters (mm)</option>
            <option value="inch">Inches</option> */}
          </select>

          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="webp">WEBP</option>
          </select>

          <div>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                Image Quality
              </span>

              <span className="font-bold text-[#E5322D]">
                {quality}%
              </span>

            </div>

            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => {
                const q = Number(e.target.value);

                setQuality(q);

                if (image) {
                  setEstimatedSize(
                    calculateEstimatedSize(
                      image.size,
                      q
                    )
                  );
                }
              }}
              className="w-full"
            />

          </div>

          <button
            onClick={resizeImage}
            className="w-full bg-[#E5322D] hover:bg-red-700 text-white py-4 rounded-xl font-semibold"
          >
            Resize Image
          </button>
          
<button
  onClick={resetAll}
  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl font-semibold mt-3"
>
  Reset
</button>

          {downloadUrl && (
            <a
              href={downloadUrl}
              download={`resized-image.${format}`}
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
            >
              Download Image
            </a>
          )}

        </div>

      </div>
    </div>
    <RelatedTools
  currentSlug="/image-resizer"
  category="utilities"
/>

<section className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-4">
    About Image Resizer Tool
  </h2>

  <p className="text-gray-600 leading-7">
    Our free Image Resizer helps you resize images online without installing
    any software. You can change image width and height, maintain aspect ratio,
    compress image quality and convert images to JPG, PNG or WEBP format.
  </p>

  <h2 className="text-2xl font-bold mt-8 mb-4">
    Features
  </h2>

  <ul className="list-disc pl-6 space-y-2 text-gray-600">
    <li>Resize images by custom width and height</li>
    <li>Maintain original aspect ratio</li>
    <li>Compress image size online</li>
    <li>Convert JPG, PNG and WEBP formats</li>
    <li>Free and secure browser-based processing</li>
  </ul>
</section>

<FAQSection
  faqs={[
    {
      question: "Is this image resizer free?",
      answer: "Yes, this tool is completely free to use."
    },
    {
      question: "Can I resize JPG images?",
      answer: "Yes, JPG, PNG and WEBP images are supported."
    },
    {
      question: "Will image quality decrease?",
      answer: "You can control image quality using the quality slider."
    },
    {
      question: "Is my image uploaded to a server?",
      answer: "No, processing happens in your browser."
    }
  ]}
/>

  </div>

</main>
  );
}