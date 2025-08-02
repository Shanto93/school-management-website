import { Bell } from 'lucide-react';
import userImg from "../../assets/user.jpg";

const Header = () => {
    return (
        <div className="w-full bg-[#1d1e4e] text-white shadow flex items-center justify-between px-3 md:px-8 py-2 md:py-3 md:h-20 rounded-b-2xl mb-5">
            {/* Left: School Name and Subtitle */}
            <div className="flex items-center gap-2 md:gap-4">
                <img
                    className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover"
                    src={userImg}
                    alt="User"
                />
                <h2 className="text-base md:text-xl font-bold tracking-wide ml-2 md:ml-3 whitespace-normal break-words max-w-[130px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                    Demo School Name
                </h2>
            </div>

            {/* Right: Notification + Profile */}
            <div className="flex items-center gap-3 md:gap-6">
                {/* Notification Bell */}
                <button className="relative focus:outline-none">
                    <Bell className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                {/* Profile Image */}
                <img
                    src={userImg}
                    alt="User"
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white object-cover shadow"
                />
            </div>
        </div>
    );
};

export default Header;
