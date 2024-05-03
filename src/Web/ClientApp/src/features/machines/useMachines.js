import { useQuery } from "@tanstack/react-query";
import { getMachines } from "../../services/apiMachines.js";

export function useMachines() {
  const {
    isLoading,
    data: machines,
    error,
  } = useQuery({
    queryKey: ["machines"],
    queryFn: getMachines,
  });

  return { isLoading, error, machines };
}