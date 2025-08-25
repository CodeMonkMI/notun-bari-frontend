import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function NotAuthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-muted/30 text-center p-6">
      {/* Big 404 text */}
      <h1 className="text-7xl font-extrabold text-primary">403</h1>
      <p className="mt-4 text-xl font-semibold text-foreground">Forbidden</p>
      <p className="mt-2 text-muted-foreground max-w-md">
        Oops! Your not authorized to access this resource!
      </p>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <Button asChild>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
