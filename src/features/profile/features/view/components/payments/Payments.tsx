import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePayments } from "@/lib/api/payments";
import { cn } from "@/lib/utils";

export const Payments = () => {
  const { data: payments, isPending, isError } = usePayments(1, 10);

  if (isError) return <h2>Error fetching Payment Details</h2>;
  if (isPending) return <DataTableSkeleton rows={5} isSearchBar={false} />;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.results.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.transaction_id}</TableCell>
                  <TableCell>${p.amount}</TableCell>
                  <TableCell>{p.payment_method}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn({
                        "bg-green-600": p.status === "success",
                        "bg-red-600": p.status === "failed",
                        "bg-yellow-600": p.status === "cancelled",
                      })}
                    >
                      {p.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Payments;
