import { useMe } from "@/lib/api/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function CategoryLayout() {
  const navigate = useNavigate();

  const { data: me, isSuccess, isPending } = useMe();

  useEffect(() => {
    if (isSuccess && !me?.is_staff) {
      navigate("/dashboard/not-authorized");
    }
  }, [navigate, isSuccess, me]);

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="font-sans text-gray-800">
      <Outlet />
    </div>
  );
}
