import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; 
import { CreateStudents } from "../../services/apiStudents";
export function useCreateStudents() {
  const queryClient = useQueryClient();
  const { mutate: createStudents, isLoading: isCreating } = useMutation({
    mutationFn: CreateStudents,
    onSuccess: () => {
      toast.success("New students successfully created");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createStudents };
}
