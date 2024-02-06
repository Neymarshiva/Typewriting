import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; 
import { DeleteStudents } from "../../services/apiStudents";

export function useDeleteStudents() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteStudents} = useMutation({
    mutationFn: DeleteStudents,
    onSuccess: () => {
      toast.success("Student successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteStudents };
}
