import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";

export function useStudents() {
  const {
    isLoading,
    data: students,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  return { isLoading, error, students };
}
