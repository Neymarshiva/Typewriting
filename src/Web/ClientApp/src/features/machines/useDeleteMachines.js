import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { DeleteMachines } from "../../services/apiMachines";

export function useDeleteMachines() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteMachine} = useMutation({
    mutationFn: DeleteMachines,
    onSuccess: () => {
      toast.success("Machine successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["machines"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteMachine };
}
