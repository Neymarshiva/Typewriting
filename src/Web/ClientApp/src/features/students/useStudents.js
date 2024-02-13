import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useStudents() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const pageNumber = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageSize = PAGE_SIZE;

  //QUERY
  const {
    isLoading,
    data: students,
    error,
  } = useQuery({
    queryKey: ["students", pageNumber, pageSize],
    queryFn: () => getStudents({ pageNumber, pageSize }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(students?.totalCount / PAGE_SIZE);

  if (pageNumber < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["students", pageNumber + 1, pageSize],
      queryFn: () => getStudents({ pageNumber: pageNumber + 1, pageSize }),
    });

  if (pageNumber > 1)
    queryClient.prefetchQuery({
      queryKey: ["students", pageNumber - 1, pageSize],
      queryFn: () => getStudents({ pageNumber: pageNumber - 1, pageSize }),
    });

  return { isLoading, error, students };
}
