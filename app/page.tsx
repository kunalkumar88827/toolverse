"use client";
import { tools } from "@/data/tools";
import { ImageIcon, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [search, setSearch] = useState("");
  
  const popularTools = tools.filter((tool) => tool.popular);

  const filteredTools = popularTools.filter((tool) =>
  tool.name.toLowerCase().includes(search.toLowerCase())
);

  const categories = [
    {
      name: "Student Tools",
      slug: "student",
    },
    {
      name: "Finance Tools",
      slug: "finance",
    },
    {
      name: "Health Tools",
      slug: "health",
    },
    {
      name: "Utility Tools",
      slug: "utilities",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#FFF5F5] py-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            This Website Created By,
            <span className="text-[#E5322D]"> Parnika</span>
          </h1> */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
  Every Tool You Need
  <span className="text-[#E5322D]">
    {" "}In One Place
  </span>
</h1>

          <p className="text-lg text-gray-600 mb-10">
  Free calculators, finance tools, student tools,
  QR generators, password generators and many
  more utilities available instantly.
</p>

          <div className="max-w-xl mx-auto relative">
            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
  type="text"
  placeholder="Search tools..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5322D]"
/>
          </div>
        </div>
        {/* Stats */}
      {/* <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <h3 className="text-2xl font-bold text-[#E5322D]">
              {tools.length}+
            </h3>
            <p>Free Tools</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow text-center">
            <h3 className="text-2xl font-bold text-[#E5322D]">
              100%
            </h3>
            <p>Free To Use</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow text-center">
            <h3 className="text-2xl font-bold text-[#E5322D]">
              24/7
            </h3>
            <p>Available</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow text-center">
            <h3 className="text-2xl font-bold text-[#E5322D]">
              No
            </h3>
            <p>Signup Required</p>
          </div>
        </div>
      </section> */}
      </section>

      

      {/* Popular Tools */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Popular Tools
          </h2>

          <p className="text-gray-500 mt-3">
            Most used tools by our visitors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTools.map((tool) => {
  const Icon = tool.icon || ImageIcon;

  return (
    <Link
      key={tool.slug}
      href={tool.slug}
      className="group border rounded-3xl p-6 bg-white hover:border-[#E5322D] hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">
        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
          <Icon
            size={28}
            className="text-[#E5322D]"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-[#E5322D]">
        {tool.name}
      </h3>

      <p className="text-gray-500 leading-7">
        {tool.description}
      </p>
    </Link>
  );
})}
          {filteredTools.length === 0 && (
  <div className="text-center mt-8 text-gray-500">
    No tools found.
  </div>
)}
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/tools/${category.slug}`}
                className="bg-white rounded-2xl p-8 text-center border hover:border-[#E5322D] hover:shadow-lg transition block"
              >
                <h3 className="font-semibold text-lg">
                  {category.name}
                </h3>
              </Link>
            ))}
          
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Why ToolVerse?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "100% Free",
            "Fast & Secure",
            "No Signup Required",
            "Mobile Friendly",
          ].map((feature) => (
            <div
              key={feature}
              className="bg-white border rounded-2xl p-8 text-center shadow-sm"
            >
              <h3 className="font-semibold">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold mb-6">
    Free Online Tools for Everyday Use
  </h2>

  <p className="text-gray-600 leading-8">
    ToolVerse is a free online platform offering calculators,
    finance tools, student tools, utility tools and productivity
    tools. Our mission is to provide fast, accurate and easy-to-use
    tools without requiring registration. Whether you need to
    calculate EMI, generate passwords, create QR codes, count words
    or calculate CGPA, ToolVerse helps you get results instantly.
  </p>
</section>
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-6">
    Popular Online Calculators
  </h2>

  <div className="grid md:grid-cols-3 gap-4">
    <Link href="/emi-calculator">EMI Calculator</Link>
    <Link href="/gst-calculator">GST Calculator</Link>
    <Link href="/loan-calculator">Loan Calculator</Link>
    <Link href="/cgpa-calculator">CGPA Calculator</Link>
    <Link href="/password-generator">Password Generator</Link>
    <Link href="/qr-generator">QR Generator</Link>
  </div>
</section>
{/* CTA */}
      <section className="bg-[#E5322D] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            More Tools Coming Soon
          </h2>

          <p className="text-lg">
            We are continuously adding new tools to make your work easier.
          </p>
        </div>
      </section>

    </main>
  );
}