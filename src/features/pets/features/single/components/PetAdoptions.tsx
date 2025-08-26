import { usePetAdoptions } from "@/lib/api/pets";

export function PetAdoptions({ petId }: { petId: string }) {
  const { data, isPending } = usePetAdoptions(petId);
  const adoptions = Array.isArray(data) ? data : data?.results ?? [];

  if (isPending) return <p>Loading adoptions...</p>;
  if (!data || adoptions.length === 0) return <p>No adoptions yet.</p>;
  return (
    <ul className="space-y-2">
      {adoptions.map((a) => (
        <li key={a.id} className="border rounded p-2">
          <p>
            Adopted by:{" "}
            {a.adopted_by
              ? `${a.adopted_by?.first_name} ${a.adopted_by?.last_name}`
              : `Unknown`}
          </p>
          <p className="text-sm text-gray-500">
            Date: {new Date(a.date).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
