import Link from "next/link";
import { tools } from "@/data/tools";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const filteredTools = tools.filter(
    (tool) => tool.category === category
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {category} Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.slug}
            className="border rounded-xl p-5 hover:shadow-lg"
          >
            <h2 className="font-semibold text-lg">
              {tool.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}