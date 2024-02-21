import { HiOutlineMoon, HiOutlineSun, HiPencil, HiTrash } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import Menus from "./Menus";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (

    <Menus>

      <Menus.Menu>
        <Menus.Toggle id="darkmodetg" icon={!isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />} />
        <Menus.List id="darkmodetg">

          <Menus.Button onClick={toggleDarkMode} icon={<HiOutlineSun />}>Light Mode</Menus.Button>

          <Menus.Button onClick={toggleDarkMode} icon={<HiOutlineMoon />}>Dark Mode</Menus.Button>
        </Menus.List>


      </Menus.Menu>

      {/* <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon> */}

    </Menus>

  );
}

export default DarkModeToggle;
