import { Icon } from "@iconify/react/dist/iconify.js";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { IoIosHome } from "react-icons/io";
import { FaBell, FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";



const Sidebar = () => {
    const items = [
        {
            labal: 'Home',
            href: '/',
            icon: IoIosHome
        },
        {
            labal: 'Notifications',
            href: '/notifications',
            icon: FaBell,
        },
        {
            labal: 'Profile',
            href: '/profile/123',
            icon: FaRegUser
        }
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex  flex-col items-end ">
                <div className="py-6 lg:w-[230px]">
                    <SidebarLogo />
                    {
                        items.map((item) => (
                            <SidebarItem  
                            key={item.href}
                            labal={item.labal}
                            href={item.href}
                            icon={item.icon}
                            />
                        ))
                    }
                    <SidebarItem  onClick={() => {}} labal="Logout" icon={BiLogOut} />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;