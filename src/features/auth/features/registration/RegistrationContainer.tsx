import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegistrationForm } from "./components/RegistrationForm";

export function RegistrationContainer() {
  return (
    <div>
      <div className="my-20">
        <div className="sm:w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Register new account</CardTitle>
              <CardDescription>
                Enter your information to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistrationForm />
            </CardContent>
            <CardFooter>
              <p>Important Links</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
