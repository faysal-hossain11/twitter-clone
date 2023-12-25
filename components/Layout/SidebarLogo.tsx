import { Icon } from '@iconify/react/dist/iconify.js';
import { useRouter } from 'next/router';
import React from 'react';

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')} className='cursor-pointer w-[50px] h-[50px] text-center flex justify-center items-center rounded-full hover:bg-blue-200 hover:bg-opacity-10 transition-all duration-200 '>
            <Icon icon="logos:twitter"  className='text-[28px]  '/>
        </div>
    );
};

export default SidebarLogo;