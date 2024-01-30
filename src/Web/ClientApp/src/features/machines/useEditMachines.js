import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { EditMachines } from "../../services/apiMachines";

export function useEditMachines() {
  const queryClient = useQueryClient();

  const { mutate: editMachines, isLoading: isEditing } = useMutation({
    mutationFn: ({ newMachineData, id }) => EditMachines(id, newMachineData),
    onSuccess: () => {
      toast.success("Machine successfully edited");
      queryClient.invalidateQueries({ queryKey: ["machines"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editMachines };
}
