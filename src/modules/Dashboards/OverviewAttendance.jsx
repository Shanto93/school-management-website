// import React from 'react';
// import { MoreVertical, User, Users2 } from "lucide-react";

// const stats = [
//     {
//         title: "Students",
//         total: 28,
//         color: "#ff3c00",
//         bg: "bg-white",
//         icon: <User className="w-5 h-5 text-[#ff3c00]" />,
//         present: 15,
//         absent: 7,
//     },
//     {
//         title: "Staffs",
//         total: 2,
//         color: "#ff9500",
//         bg: "bg-[#fff9ef]",
//         icon: <Users2 className="w-5 h-5 text-[#ff9500]" />,
//         present: 7,
//         absent: 3,
//     },
// ];

// // Helper: Circle Progress SVG
// const CircleProgress = ({ total, color }) => (
//     <div className="relative w-16 h-16 flex items-center justify-center mb-2">
//         <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
//             <circle
//                 cx="18"
//                 cy="18"
//                 r="16"
//                 fill="none"
//                 stroke="#ededed"
//                 strokeWidth="4"
//             />
//             <circle
//                 cx="18"
//                 cy="18"
//                 r="16"
//                 fill="none"
//                 stroke={color}
//                 strokeWidth="4"
//                 strokeDasharray={100}
//                 strokeDashoffset={0}
//                 style={{ transition: "stroke-dashoffset 0.5s" }}
//             />
//         </svg>
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <span className="text-xs text-[#23245c] font-semibold">Total</span>
//             <span className="text-lg font-bold" style={{ color }}>{total}</span>
//         </div>
//     </div>
// );

// const OverviewAttendance = () => {
//     return (
//         <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col transition hover:shadow-2xl">
//             {/* Header */}
//             <div className="bg-[#23245c] rounded-t-2xl shadow-xl flex items-center justify-between px-6 pt-5 pb-3">
//                 <span className="text-white font-bold text-lg tracking-wide">
//                     Attendance Information
//                 </span>
//                 <button className="bg-white/10 hover:bg-white/20 p-1 rounded-full">
//                     <MoreVertical className="text-white" size={22} />
//                 </button>
//             </div>
//             {/* Stats */}
//             <div className="flex flex-1 gap-6 px-6 py-5">
//                 {stats.map((item, idx) => (
//                     <div
//                         key={idx}
//                         className={`
//                             flex-1 rounded-xl 
//                             ${item.bg}
//                             flex flex-col items-center justify-center
//                             shadow hover:shadow-md transition
//                             px-2 py-3
//                         `}
//                     >
//                         <div className="flex items-center gap-2 mb-1">
//                             <span>{item.icon}</span>
//                             <span className="text-[16px] font-semibold">{item.title}</span>
//                         </div>
//                         <CircleProgress total={item.total} color={item.color} />
//                         <div className="flex justify-between w-full text-[14px] px-3 mt-1">
//                             <span className="text-green-600 font-bold">Present</span>
//                             <span className="text-red-500 font-bold">Absent</span>
//                         </div>
//                         <div className="flex justify-between w-full px-3 text-sm">
//                             <span>{item.present}</span>
//                             <span>{item.absent}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OverviewAttendance;







import React from 'react';
import { MoreVertical, User, Users2, BadgeCheck } from "lucide-react";

const stats = [
    {
        title: "Students",
        total: 28,
        color: "#ff3c00",
        bg: "bg-white",
        icon: <User className="w-5 h-5 text-[#ff3c00]" />,
        present: 15,
        absent: 13,
    },
    {
        title: "Staffs",
        total: 10,
        color: "#ff9500",
        bg: "bg-[#fff9ef]",
        icon: <Users2 className="w-5 h-5 text-[#ff9500]" />,
        present: 7,
        absent: 3,
    },
];

// Helper: Circle Progress SVG (Dynamic)
const CircleProgress = ({ total, color, absent }) => {
    const percent = total === 0 ? 0 : (absent / total) * 100;
    return (
        <div className="relative w-16 h-16 flex items-center justify-center mb-2">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                {/* background track */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#ededed"
                    strokeWidth="4"
                />
                {/* progress (absent %) */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke={color}
                    strokeWidth="4"
                    strokeDasharray={100}
                    strokeDashoffset={100 - percent}
                    style={{ transition: "stroke-dashoffset 0.5s" }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-[#23245c] font-semibold">Total</span>
                <span className="text-lg font-bold" style={{ color }}>{total}</span>
            </div>
        </div>
    );
};

const OverviewAttendance = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col transition hover:shadow-2xl">
            {/* Header */}
            <div className="bg-[#23245c] rounded-t-2xl shadow-xl flex items-center justify-between px-6 py-4">
                <span className="flex items-center gap-2 text-white font-bold text-lg tracking-wide">
                    <BadgeCheck className="w-6 h-6 text-[#ffd02c]" />
                    Attendance Information
                </span>
                <button className="rounded-full hover:bg-white/20 p-1">
                    <MoreVertical className="text-white" size={22} />
                </button>
            </div>
            {/* Stats */}
            <div className="flex flex-1 gap-6 px-6 py-5">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className={`
                            flex-1 rounded-xl 
                            ${item.bg}
                            flex flex-col items-center justify-center
                            shadow hover:shadow-md transition
                            px-2 py-3
                        `}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span>{item.icon}</span>
                            <span className="text-[16px] font-semibold">{item.title}</span>
                        </div>
                        <CircleProgress
                            total={item.total}
                            color={item.color}
                            present={item.present}
                            absent={item.absent}
                        />
                        <div className="flex justify-between w-full text-[14px] px-3 mt-1">
                            <span className="text-green-600 font-bold">Present</span>
                            <span className="text-red-500 font-bold">Absent</span>
                        </div>
                        <div className="flex justify-between w-full px-3 text-sm">
                            <span>{item.present}</span>
                            <span>{item.absent}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewAttendance;
