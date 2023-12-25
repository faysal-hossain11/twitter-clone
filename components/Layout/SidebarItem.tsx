import { IconType } from 'react-icons'
interface SidebarItemProps {
    labal: string;
    href?: string;
    icon: IconType;
    onClick?: () => void; 
}

const SidebarItem: React.FC<SidebarItemProps>  = ({
    labal,
    href,
    icon: Icon,
    onClick,
}) => {
    return (
        <div className='flex flex-row items-center'>
            <div className='relative h-[50px] w-[50px] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300 hover:bg-opacity-10 transition-all duration-200 lg:hidden'>
                <Icon className='text-[28px]' />
            </div>
            <div className=' lg:flex items-center gap-3 py-3 mb-2 hidden rounded-[30px] transition-all duration-300 px-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
                <Icon  className='text-[24px]'/>
                <p className='hidden lg:block text-white'>
                    {labal}
                </p>
            </div>
        </div>
    );
};

export default SidebarItem;