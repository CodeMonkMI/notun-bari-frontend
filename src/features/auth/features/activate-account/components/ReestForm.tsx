import { Button } from "@/components/ui/button";
import { useActivateAccount } from "@/lib/api/auth";
import type { ValidationErrors } from "@/lib/api/types";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type UrlParma = {
  uid: string;
  token: string;
};

export function ResetForm() {
  const { uid = "", token = "" } = useParams<UrlParma>();

  const navigate = useNavigate();

  const {
    mutateAsync: resetPasswordConfirm,
    isError,
    error,
    isSuccess,
    isPending,
  } = useActivateAccount();

  const onSubmit = async () => {
    try {
      await resetPasswordConfirm({
        uid,
        token,
      });
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  useEffect(() => {
    if (isError) {
      if (axios.isAxiosError(error)) {
        const errs: ValidationErrors = error.response?.data;
        if (errs.details) {
          toast(errs.details);
        } else {
          toast(
            "Your account activate failed! Something went wrong try again later@!"
          );
        }
      }
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast(
        "Your account is being activated. Login to get access. Redirecting to login page"
      );
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }, [navigate, isSuccess]);

  return (
    <>
      <Button type="submit" className="w-full" onClick={onSubmit}>
        {isPending ? "Updating.." : "Activate"}
      </Button>
    </>
  );
}
