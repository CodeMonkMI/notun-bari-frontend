import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetForm } from "./components/ReestForm";

export function ActivateAccountContainer() {
  return (
    <div>
      <div className="my-20">
        <div className="sm:w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Activate your account</CardTitle>
              <CardDescription>
                Press activate and you will good to go
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResetForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
