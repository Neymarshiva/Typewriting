import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import { useParams } from 'react-router-dom';
import { PAGE_SIZE } from "../../utils/constants";

export function useStudentDetails() {
  const { studentId } = useParams();
  const pageSize = PAGE_SIZE;
  const pageNumber = 1;

  const {
    isLoading,
    data: students,
    error,
  } = useQuery(["students", { pageNumber, pageSize, studentId }], () =>
    getStudents({
      pageNumber,
      pageSize,
      studentId
    })
  );

  // Extracting the first element from the students array
  const firstStudent = students ? students?.items[0] : null;

  return { isLoading, error, firstStudent };
}
