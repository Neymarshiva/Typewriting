import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const baseUrl = document.getElementsByTagName('base')[0].href;
  const loginUrl = `${baseUrl}Identity/Account/Login`; 

  const { mutate: logout, isLoading } = useMutation({
    mutationFn:logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      window.location.href = `${loginUrl}?ReturnUrl=${window.location.pathname}`;
    },
  });

  return { logout, isLoading };
}
