import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { ResetForm } from "./components/ReestForm";

export function PasswordResetContainer() {
  return (
    <div>
      <div className="my-20">
        <div className="sm:w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Reset you account password</CardTitle>
              <CardDescription>Enter your email address</CardDescription>
            </CardHeader>
            <CardContent>
              <ResetForm />
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
                <div className="text-sm mt-2">
                  Don&apos;t have an account?{" "}
                  <Link
                    to={"/auth/register"}
                    className="underline text-blue-400 underline-offset-4"
                  >
                    Sign up
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
