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

export const Adoptions = () => {
  const {
    data: adoptions,
    isPending,
    isError,
  } = usePets({
    limit: 5,
    page: 1,
    filter: "adopted",
  });

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <DataTableSkeleton rows={5} />;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Recent Adoptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pet</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Fees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adoptions.results.map((a, i) => (
                <TableRow key={i}>
                  <TableCell>{a.name}</TableCell>
                  <TableCell>{a.age}</TableCell>
                  <TableCell>${a.fees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
