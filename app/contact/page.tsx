export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Have a question, suggestion, feedback or business inquiry?
        We'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-lg p-3 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#E5322D] text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="border rounded-2xl p-6 bg-gray-50">
            <p className="mb-4">
              <strong>Founder:</strong> Kunal Kumar
            </p>

            <p className="mb-4">
              <strong>Email:</strong>
            </p>

            <a
              href="mailto:prajapatikunal412001@gmail.com"
              className="text-[#E5322D] break-all"
            >
              prajapatikunal412001@gmail.com
            </a>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-3">
                Why Contact Us?
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>• Report a bug</li>
                <li>• Suggest a new tool</li>
                <li>• Business inquiries</li>
                <li>• Partnership opportunities</li>
                <li>• General feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}