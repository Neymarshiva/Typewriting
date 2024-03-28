import {
    HiOutlineCalendarDays,
    HiOutlineCog6Tooth,
    HiOutlineHome,
} from "react-icons/hi2";
import { PiStudent, PiClockLight } from "react-icons/pi";

const mainLinks = [
    {
        id: 1,
        label: "Dashboard",
        icon: <HiOutlineHome />,
        routePath:"/dashboard"
    },
    {
        id: 2,
        label: "Students",
        icon: <PiStudent />,
        routePath:"/students"
    },
    {
        id: 3,
        label: "Machines",
        icon: <HiOutlineCalendarDays />,
        routePath:"/machines"
    },
    {
        id: 4,
        label: "Timings",
        icon: <PiClockLight />,
        routePath:"/timings"
    },
    {
        id: 5,
        label: "Settings",
        icon: <HiOutlineCog6Tooth />,
        routePath:"/settings"
    },
];

const additionalLinks = [
    {
        id: 6,
        label: "Settings",
        icon: <PiClockLight />,
    },
    {
        id: 7,
        label: "Help",
        icon: <PiClockLight />,
    },
];

export { mainLinks, additionalLinks };
