export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">
        About ToolVerse
      </h1>

      <p className="text-lg text-gray-600 leading-8">
        ToolVerse is a free online platform that provides useful
        calculators, student tools, finance tools and utility tools
        designed to make everyday tasks faster and easier.
      </p>

      <p className="mt-6 text-gray-600 leading-8">
        Our goal is to build a simple and reliable collection of
        tools that anyone can use without registration,
        subscriptions or hidden charges.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl mb-2">
            100% Free Forever
          </h3>
          <p className="text-gray-600">
            All tools on ToolVerse are completely free to use.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl mb-2">
            No Signup Required
          </h3>
          <p className="text-gray-600">
            Use our tools instantly without creating an account.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl mb-2">
            Privacy Focused
          </h3>
          <p className="text-gray-600">
            We respect your privacy and do not require personal data
            to use most tools.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-8">
          We aim to provide accurate, easy-to-use and accessible
          online tools for students, professionals, businesses and
          everyday users around the world.
        </p>
      </div>

      <div className="mt-14 border rounded-2xl p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">
          Founder
        </h2>

        <p className="text-gray-600 leading-8">
          ToolVerse was created and managed by{" "}
          <strong>Kunal Kumar</strong> with the vision of building a
          free platform where users can access useful online tools
          without subscriptions or unnecessary complexity.
        </p>

        <p className="mt-4 text-gray-600">
          Contact:
          <a
            href="mailto:prajapatikunal412001@gmail.com"
            className="text-[#E5322D] ml-2"
          >
            prajapatikunal412001@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}