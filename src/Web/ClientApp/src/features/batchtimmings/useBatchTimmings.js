import { useQuery } from "@tanstack/react-query"; 
import { getBatchTimmings } from "../../services/apiBatchTimmings";

export function useBatchTimmings() {
  const {
    isLoading,
    data: batchTimmings,
    error,
  } = useQuery({
    queryKey: ["batchtimes"],
    queryFn: getBatchTimmings,
  });

  return { isLoading, error, batchTimmings };
}
