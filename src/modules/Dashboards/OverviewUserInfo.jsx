import { User2, Phone, Info, MoreVertical, Check } from "lucide-react";

const OverviewUserInfo = () => {
    return (
        <div className="relative bg-white rounded-2xl shadow-xl px-0 pt-8 pb-4 w-full max-w-md mx-auto flex flex-col items-center transition hover:shadow-2xl h-full">
            {/* 3-dot Menu Top Right */}
            <button className="absolute top-4 right-4 p-1  hover:bg-gray-100 transition">
                <MoreVertical className="w-5 h-5 text-[#23245c]" />
            </button>

            {/* Floating Profile Picture with Active Tick */}
            <div className="relative -mt-5 mb-2">
                <div className="bg-gradient-to-tr from-[#4f8cff] to-[#23245c] p-[3px] rounded-full shadow-xl">
                    <img
                        className="w-20 h-20 rounded-full object-cover border-4 border-white"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User"
                    />
                </div>
                {/* Blue Tick Active Badge */}
                <span className="absolute -right-2 -bottom-2 bg-white border-2 border-white rounded-full w-7 h-7 flex items-center justify-center shadow">
                    <Check className="w-4 h-4 text-blue-500" strokeWidth={3} />
                </span>
            </div>

            {/* Name and Role */}
            <div className="mt-2 text-center flex flex-col items-center">
                <h2 className="text-[#23245c] text-lg font-extrabold tracking-wide flex items-center gap-2">
                    MD. MORSHADUL ISLAM
                </h2>
                <span className="inline-block bg-[#eaf1fb] text-[#4f8cff] text-xs font-semibold px-3 py-0.5 rounded-full mt-1 shadow">
                    Admin User
                </span>
            </div>

            {/* Info section */}
            <div className="w-[90%] mx-auto mt-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-2 shadow">
                    <Info className="w-5 h-5 text-[#ff9500]" />
                    <span className="font-semibold text-[#23245c] flex-1">Reg No:</span>
                    <span className="font-bold text-[#1b1f3a]">None</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-2 shadow">
                    <User2 className="w-5 h-5 text-[#4f8cff]" />
                    <span className="font-semibold text-[#23245c] flex-1">User Type:</span>
                    <span className="font-bold text-[#1b1f3a]">-</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-2 shadow">
                    <Phone className="w-5 h-5 text-[#17c964]" />
                    <span className="font-semibold text-[#23245c] flex-1">Phone:</span>
                    <span className="font-bold text-[#1b1f3a]">01790238717</span>
                </div>
            </div>
        </div>
    );
};

export default OverviewUserInfo;
