import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, Settings, ShieldCheck, UserCog } from "lucide-react";

export function Profile() {
  const user = {
    id: "826898eb-f52c-4b78-a581-124fc8d63978",
    first_name: "Admin",
    last_name: "Admin",
    email: "admin@example.com",
    username: "admin",
    is_active: true,
    is_staff: true,
    last_login: "2025-08-20T13:35:16Z",
    date_joined: "2025-08-14T10:47:36Z",
    balance: 10964.0,
  };

  const payments = [
    { id: "TXN1", amount: 1050, method: "Bkash", status: "success" },
    { id: "TXN2", amount: 100, method: "Nagad", status: "progress" },
    { id: "TXN3", amount: 44, method: "Bkash", status: "failed" },
  ];

  const adoptions = [
    { pet: "Jemima Porter", age: 1, fees: 16, adoptedBy: "Kiara Morse" },
    { pet: "Jackson Leach", age: 1, fees: 16, adoptedBy: "JustinaB Foreman" },
  ];

  const pets = [
    { name: "Phoebe Chambers", category: "H", age: 8, fees: 53 },
    { name: "Castor Summers", category: "dog", age: 1, fees: 299 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Section */}
      <Card className="shadow-lg rounded-2xl lg:col-span-1">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarFallback>
              {user.first_name[0]}
              {user.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">
            {user.first_name} {user.last_name}
          </CardTitle>
          <p className="text-sm text-gray-500">@{user.username}</p>
          <div className="flex gap-2 mt-2">
            {user.is_active ? (
              <Badge className="bg-green-600">Active</Badge>
            ) : (
              <Badge variant="destructive">Inactive</Badge>
            )}
            {user.is_staff && <Badge variant="secondary">Staff</Badge>}
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4 mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Email</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date Joined</span>
            <span className="text-gray-600">
              {new Date(user.date_joined).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Last Login</span>
            <span className="text-gray-600">
              {new Date(user.last_login).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Balance</span>
            <span className="text-green-600 font-semibold">
              ${user.balance.toFixed(2)}
            </span>
          </div>
          {/* Settings Menu */}
          <Separator className="my-4" />
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <UserCog className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" /> Account Settings
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <ShieldCheck className="mr-2 h-4 w-4" /> Security
            </Button>
            <Button variant="destructive" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Sections */}
      <div className="lg:col-span-2 grid grid-cols-1 gap-6">
        {/* Payments Section */}
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
                {payments.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.id}</TableCell>
                    <TableCell>${p.amount}</TableCell>
                    <TableCell>{p.method}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          p.status === "success"
                            ? "bg-green-600"
                            : p.status === "failed"
                            ? "bg-red-600"
                            : "bg-gray-500"
                        }
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

        {/* Adoptions Section */}
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
                  <TableHead>Adopted By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adoptions.map((a, i) => (
                  <TableRow key={i}>
                    <TableCell>{a.pet}</TableCell>
                    <TableCell>{a.age}</TableCell>
                    <TableCell>${a.fees}</TableCell>
                    <TableCell>{a.adoptedBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pets Section */}
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
                {pets.map((pet, i) => (
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
      </div>
    </div>
  );
}
