import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { EditStudents } from "../../services/apiStudents";
 

export function useEditStudents() {
  const queryClient = useQueryClient();

  const { mutate: editStudents, isLoading: isEditing } = useMutation({
    mutationFn: ({ newStudentData, id }) => EditStudents(id, newStudentData),
    onSuccess: () => {
      toast.success("Students successfully edited");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editStudents };
}
