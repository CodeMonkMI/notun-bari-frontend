import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconArrowLeft } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { PaymentCreateForm } from "./components/CreateForm";

export function CreateContainer() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const msg = searchParams.get("msg");
  const status = searchParams.get("status");
  useEffect(() => {
    if (msg) {
      toast(msg);
    }
    if (status === "success") {
      toast("Redirecting in 3s");

      setTimeout(() => {
        navigate("/dashboard/payments/");
      }, 3000);
    }
  }, [msg, status, navigate]);
  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Add Fund to your account</CardTitle>
              <CardDescription>
                Enter a suitable amount to add to your account
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
