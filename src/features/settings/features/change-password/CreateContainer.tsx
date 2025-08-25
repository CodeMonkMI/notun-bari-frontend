import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PaymentCreateForm } from "./components/CreateForm";

export function CreateContainer() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const msg = searchParams.get("msg");
  const status = searchParams.get("status");
  useEffect(() => {
    if (msg) {
      setNotifications([msg]);
    }
    if (status === "success") {
      setNotifications((p) => [...p, "Redirecting in 3s"]);
      setTimeout(() => {
        navigate("/dashboard/payments/");
      }, 3000);
    }
  }, [msg, status, navigate]);
  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          {notifications.length > 0 && (
            <Card className="mb-2">
              <CardContent>
                <div>
                  {notifications.map((n) => (
                    <p
                      className={cn("text-green-500", {
                        "text-destructive":
                          status === "failed" || status === "cancelled",
                      })}
                      key={Math.random()}
                    >
                      {n}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardHeader>
              <CardTitle>Create a new account</CardTitle>
              <CardDescription>
                Enter user information to create your account
              </CardDescription>
              <CardAction>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    navigate("/dashboard/payments");
                  }}
                >
                  <IconArrowLeft />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <PaymentCreateForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
