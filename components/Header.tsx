import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
    labal: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({labal, showBackArrow}) => {
    const router = useRouter();
    const handleBack = useCallback(()=> {
        router.back();
    }, [router])
    return (
        <div className="border-b-[1px] border-neutral-800 p-4">
            <div className=" flex flex-row gap-3 items-center">
                {
                    showBackArrow && (
                        <BiArrowBack 
                        onClick= {handleBack}
                        size={20}
                        color= "white"
                        className="cursor-pointer hover:opacity-70 transition"
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{labal}</h1>
            </div>
        </div>
    );
};

export default Header;