import { useMutation } from "@tanstack/react-query";
import { UpdateUserPassword } from "../../services/apiSettings";
import toast from "react-hot-toast";


export function useUpdatePassword() {
  
    const { mutate: updateUserPassword, isLoading } = useMutation({
      mutationFn: ({ newUserPassword }) => UpdateUserPassword(newUserPassword),
      onSuccess: (result) => {
        debugger;
        if(result.succeeded){
          toast.success("Password Changed Successfully"); 
        }
        else{
        var error = result.errors.join("\n");
        toast.error(error);
        }
        
      },
      onError: (err) => toast.error(err.message),
    });
  
    return { isLoading, updateUserPassword };
  }
  