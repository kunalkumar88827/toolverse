import { tools } from "@/data/tools";
import Link from "next/link";

type RelatedToolsProps = {
  currentSlug: string;
  category?: string;
};

export default function RelatedTools({
  currentSlug,
  category,
}: RelatedToolsProps) {
  const relatedTools = tools
    .filter(
      (tool) =>
        tool.slug !== currentSlug &&
        (!category || tool.category === category)
    )
    .slice(0, 4);

  if (relatedTools.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Related Tools
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {relatedTools.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.slug}
            className="border rounded-xl p-4 hover:border-[#E5322D] hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              {tool.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}