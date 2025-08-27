import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Pet } from "@/lib/api/pets";
import { usePetRemove } from "@/lib/api/pets";
import { useAuthContext } from "@/store/authStore";
import { IconDotsVertical } from "@tabler/icons-react";
import { Link, useSearchParams } from "react-router";
import { toast } from "sonner";

export function Actions({ pet, is_admin }: { pet: Pet; is_admin: boolean }) {
  const { mutate: removePet, isPending } = usePetRemove();
  const { user } = useAuthContext();
  const [searchParam] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = searchParam.get("filter") ?? "all";

  const handleDelete = () => {
    removePet(
      { id: pet?.id },
      {
        onSuccess: () => toast.success("Pet deleted"),
        onError: () => toast.error("Failed to delete pet"),
      }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconDotsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>
          <Link to={`/dashboard/pets/${pet?.id}`} className="w-full">
            View
          </Link>
        </DropdownMenuItem>
        {(filter === "my" || pet.owner?.id === user?.user_id || is_admin) && (
          <>
            <DropdownMenuItem>
              <Link to={`/dashboard/pets/${pet?.id}/update`} className="w-full">
                Update
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
