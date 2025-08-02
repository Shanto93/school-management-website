import React from 'react';
import { Bell } from 'lucide-react'; // or use your icon library
import userImg from "../../assets/user.jpg";

const Header = () => {
    return (
        <div className="w-full bg-[#1d1e4e] text-white shadow flex items-center justify-between px-8 py-3 h-20 rounded-b-2xl">
            {/* Left: School Name and Subtitle */}
            <div className="flex items-center gap-4">

                <div className='flex items-center'>
                    <img className='h-14 w-14 rounded-full' src={userImg} alt="User Image" />
                    <h2 className="text-xl font-bold tracking-wide ml-3">Demo School Name</h2>

                </div>
            </div>

            {/* Right: Notification + Profile */}
            <div className="flex items-center gap-6">
                {/* Notification Bell */}
                <button className="relative focus:outline-none">
                    <Bell className="w-6 h-6" />
                    {/* Optional notification dot */}
                    {/* <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span> */}
                </button>
                {/* Profile Image */}
                <img
                    src={userImg}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow"
                />
            </div>
        </div>
    );
};

export default Header;
