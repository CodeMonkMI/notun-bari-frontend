import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePets } from "@/lib/api/pets";

export const Pets = () => {
  const { data: pets, isPending, isError } = usePets(1, 5, "my");

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <DataTableSkeleton rows={5} />;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>My Pets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Fees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pets.results.map((pet, i) => (
                <TableRow key={i}>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.category}</TableCell>
                  <TableCell>{pet.age}</TableCell>
                  <TableCell>${pet.fees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
