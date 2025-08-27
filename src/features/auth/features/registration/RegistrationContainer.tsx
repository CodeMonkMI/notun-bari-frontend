import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
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
              <div>
                <div className="text-sm">
                  Already have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="underline text-blue-400 underline-offset-4"
                  >
                    Sign in
                  </Link>
                </div>
                <div className="mt-2 text-sm">
                  <Link
                    to={"/auth/password-reset"}
                    className="underline underline-offset-4 text-blue-400"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
