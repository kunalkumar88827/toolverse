import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-bold mb-3">
              ToolVerse
            </h4>

            <p className="text-gray-400 leading-7">
              Free online calculators, finance tools,
              student tools, health tools and utilities.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              Created By <span className="text-white">Kunal Kumar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4">
              Quick Links
            </h5>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold text-lg mb-4">
              Categories
            </h5>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/tools/student"
                  className="hover:text-white"
                >
                  Student Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/tools/finance"
                  className="hover:text-white"
                >
                  Finance Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/tools/health"
                  className="hover:text-white"
                >
                  Health Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/tools/utilities"
                  className="hover:text-white"
                >
                  Utility Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-lg mb-4">
              Contact
            </h5>

            <p className="text-gray-400 break-all">
              prajapatikunal412001@gmail.com
            </p>

            <div className="mt-4 space-y-2 text-gray-400">
              <p>✓ 100% Free Forever</p>
              <p>✓ No Signup Required</p>
              <p>✓ Privacy Focused</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 ToolVerse. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}