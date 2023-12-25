import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";


const SidebarTweetButton = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')}>
            <div className="lg:hidden w-[50px] h-[50px] rounded-full bg-sky-500 flex items-center justify-center hover:bg-sky-400 transition-all duration-200">
                <div className="text-[24px]">
                <FaFeather />
                </div>
            </div>
            <div className="mt-6 bg-sky-500 rounded-full py-2 px-4 hidden cursor-pointer lg:block hover:bg-sky-400 transition duration-200 ">
                <p className="text-[18px] font-bold text-center">Tweet</p>
            </div>
        </div>
    );
};

export default SidebarTweetButton;