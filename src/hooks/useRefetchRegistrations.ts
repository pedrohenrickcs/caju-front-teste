import { useState } from "react";
import { api } from "~/services";

export const useRefetchRegistrations = () => {
  const [isLoading, setIsLoading] = useState(false);

  const refetchRegistration = async () => {
    setIsLoading(true);
    try {
      await api.refetchRegistrations();
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, refetchRegistration };
};