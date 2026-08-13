import {
  Calculator,
  Calendar,
  FileText,
  ImageIcon,
  Percent,
  Receipt,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const tools = [
    {
      title: "Percentage Calculator",
      icon: Percent,
      link: "/percentage-calculator",
    },
    {
      title: "Age Calculator",
      icon: Calendar,
      link: "/age-calculator",
    },
    {
      title: "Attendance Calculator",
      icon: Users,
      link: "/attendance-calculator",
    },
    {
      title: "GST Calculator",
      icon: Receipt,
      link: "/gst-calculator",
    },
    {
      title: "EMI Calculator",
      icon: Calculator,
      link: "/emi-calculator",
    },
    {
      title: "PDF Tools",
      icon: FileText,
      link: "#",
    },
    {
      title: "Image Tools",
      icon: ImageIcon,
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            <Link href="/">
  <span className="text-[#E5322D]">Tool</span>
  <span>Verse</span>
</Link>
          </h1>

          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#tools">Tools</a>
            <a href="#categories">Categories</a>
            <a href="#features">Features</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFF5F5] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Every Tool You Need,
            <span className="text-[#E5322D]"> Free Forever</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Free online calculators, PDF tools, student utilities and much more.
          </p>

          <div className="max-w-xl mx-auto relative">
            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search tools..."
              className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5322D]"
            />
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">Popular Tools</h3>
          <p className="text-gray-500 mt-3">
            Most used tools by our visitors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.link}
                className="border rounded-2xl p-6 bg-white hover:border-[#E5322D] hover:shadow-xl transition-all duration-300"
              >
                <Icon
                  size={32}
                  className="text-[#E5322D] mb-4"
                />

                <h4 className="font-semibold text-lg">
                  {tool.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Categories
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Student Tools",
              "Calculator Tools",
              "PDF Tools",
              "Image Tools",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center border hover:border-[#E5322D] transition"
              >
                <h4 className="font-semibold text-lg">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h3 className="text-4xl font-bold text-center mb-12">
          Why ToolVerse?
        </h3>

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
              <h4 className="font-semibold">
                {feature}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E5322D] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">
            More Tools Coming Soon
          </h3>

          <p className="text-lg">
            We are continuously adding new tools to make your work easier.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold mb-3">
            ToolVerse
          </h4>

          <p className="text-gray-400">
            Every Tool You Need, Free Forever.
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            © 2026 ToolVerse. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 