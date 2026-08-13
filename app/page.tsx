"use client";
import { tools } from "@/data/tools";
import { Search } from "lucide-react";
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
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-[#E5322D]">Tool</span>
            <span>Verse</span>
          </Link>

          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#tools">Tools</a>
            <a href="#categories">Categories</a>
            <a href="#features">Features</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#FFF5F5] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            This Website Created By,
            <span className="text-[#E5322D]"> Parnika Awasthi</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            Free online calculators, finance tools, student tools,
            health tools and utilities to make your work easier.
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
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-12">
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
      </section>

      {/* Popular Tools */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Popular Tools
          </h2>

          <p className="text-gray-500 mt-3">
            Most used tools by our visitors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.slug}
              className="border rounded-2xl p-6 bg-white hover:border-[#E5322D] hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">
                {tool.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {tool.description}
              </p>
            </Link>
          ))}
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-3">
                ToolVerse
              </h4>

              <p className="text-gray-400 leading-7">
                Free online calculators, finance tools,
                student tools and utilities.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-lg mb-4">
                Quick Links
              </h5>

              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-lg mb-4">
                Categories
              </h5>

              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/tools/student">
                    Student Tools
                  </Link>
                </li>
                <li>
                  <Link href="/tools/finance">
                    Finance Tools
                  </Link>
                </li>
                <li>
                  <Link href="/tools/health">
                    Health Tools
                  </Link>
                </li>
                <li>
                  <Link href="/tools/utilities">
                    Utility Tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 ToolVerse. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}