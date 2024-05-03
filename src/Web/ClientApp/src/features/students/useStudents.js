import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useStudents() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter By Gender

  const filterByGender = !searchParams.get("gender")
    ? 0
    : Number(searchParams.get("gender"));

  //Filter By Machine Number

  const filterByMachineNumber = !searchParams.get("machineNumber")
    ? 0
    : Number(searchParams.get("machineNumber"));

  //Filter By Batch Timings

  const filterByBatchTimings = !searchParams.get("batchTiming")
    ? 0
    : Number(searchParams.get("batchTiming"));

  //Filter By search Term
  const searchTerm = searchParams.get("searchTerm");

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
    queryKey: [
      "students",
      pageNumber,
      pageSize,
      filterByGender,
      filterByMachineNumber,
      filterByBatchTimings,
      searchTerm,
    ],
    queryFn: () =>
      getStudents({
        pageNumber,
        pageSize,
        filterByGender,
        filterByMachineNumber,
        filterByBatchTimings,
        searchTerm,
      }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(students?.totalCount / PAGE_SIZE);

  if (pageNumber < pageCount)
    queryClient.prefetchQuery({
      queryKey: [
        "students",
        pageNumber + 1,
        pageSize,
        filterByGender,
        filterByMachineNumber,
        filterByBatchTimings,
        searchTerm,
      ],
      queryFn: () =>
        getStudents({
          pageNumber: pageNumber + 1,
          pageSize,
          filterByGender,
          filterByMachineNumber,
          filterByBatchTimings,
          searchTerm,
        }),
    });

  if (pageNumber > 1)
    queryClient.prefetchQuery({
      queryKey: [
        "students",
        pageNumber - 1,
        pageSize,
        filterByGender,
        filterByMachineNumber,
        filterByBatchTimings,
        searchTerm,
      ],
      queryFn: () =>
        getStudents({
          pageNumber: pageNumber - 1,
          pageSize,
          filterByGender,
          filterByMachineNumber,
          filterByBatchTimings,
          searchTerm,
        }),
    });

  return { isLoading, error, students };
}
