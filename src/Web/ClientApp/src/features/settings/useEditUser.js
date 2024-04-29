import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { UpdateUser } from "../../services/apiSettings";
 
 

export function useEditUser() {
  const queryClient = useQueryClient();

  const { mutate: editUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ newUserDetailsData, userName }) => UpdateUser(userName, newUserDetailsData),
    onSuccess: () => {
      toast.success("UserDetails successfully edited");
      //queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editUser };
}
