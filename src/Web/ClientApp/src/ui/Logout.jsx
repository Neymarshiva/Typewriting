import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon"; 

function Logout() {
   
    function handleLogout(){
        window.location.href = '/Identity/Account/Logout';
    }

  return (
    <ButtonIcon  onClick={handleLogout}>
      <HiArrowRightOnRectangle /> 
    </ButtonIcon>
  );
}

export default Logout;
