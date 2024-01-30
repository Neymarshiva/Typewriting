import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { CreateMachines } from "../../services/apiMachines";

export function useCreateMachines() {
  const queryClient = useQueryClient();
  const { mutate: createMachines, isLoading: isCreating } = useMutation({
    mutationFn: CreateMachines,
    onSuccess: () => {
      toast.success("New Machines successfully created");
      queryClient.invalidateQueries({ queryKey: ["machines"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createMachines };
}
