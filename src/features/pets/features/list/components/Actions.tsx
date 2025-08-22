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
import { IconDotsVertical } from "@tabler/icons-react";
import { Link } from "react-router";
import { toast } from "sonner";

export function Actions({ pet }: { pet: Pet }) {
  const { mutate: removePet, isPending } = usePetRemove();

  const handleDelete = () => {
    removePet(
      { id: pet.id },
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
          <Link to={`/dashboard/pets/${pet.id}`} className="w-full">
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={`/dashboard/pets/${pet.id}/update`} className="w-full">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
