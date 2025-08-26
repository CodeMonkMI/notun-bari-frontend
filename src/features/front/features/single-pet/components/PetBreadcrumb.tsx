export function PetBreadcrumb({
  category,
  name,
}: {
  category: string;
  name: string;
}) {
  return (
    <div className="text-sm text-gray-500 mb-6">
      Home / {category} /{" "}
      <span className="text-gray-800 font-medium">{name}</span>
    </div>
  );
}
