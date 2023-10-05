import { IoMdContacts } from "react-icons/io";
import { SiHomeassistant } from "react-icons/si";
import { TiLightbulb } from "react-icons/ti"; // Change to Ti for TiLightbulb
import { RiLogoutBoxLine } from "react-icons/ri";

const NavLink = [
    {
        name: 'Home',
        icon: <SiHomeassistant />,
        path: '/home'
    },
    {
        name: 'About',
        icon: <TiLightbulb />, // Change the icon to TiLightbulb
        path: '/about'
    },
    {
        name: 'Contact',
        icon: <IoMdContacts />,
        path: '/contact'
    },
    {
        name: 'Logout',
        icon: <RiLogoutBoxLine />,
        path: ''
    }
];

export { NavLink };
