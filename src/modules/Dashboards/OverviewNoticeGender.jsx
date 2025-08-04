import { User, UserRound } from "lucide-react";
import OverviewStatCard from "../../reusable/OverviewStatCard";
import NoticeCard from "../../reusable/NoticeCard";


const studentStats = [
    {
        icon: <User className="w-6 h-6 text-[#818cf8]" />,
        label: "Male Student",
        value: 1,
        color: "text-[#5c6ee8]",
        bg: "bg-[#e9edfd]",
    },
    {
        icon: <UserRound className="w-6 h-6 text-[#ff6f61]" />,
        label: "Female Student",
        value: 0,
        color: "text-[#ff6f61]",
        bg: "bg-[#fdeaea]",
    },
];

const staffStats = [
    {
        icon: <User className="w-6 h-6 text-[#818cf8]" />,
        label: "Male Employee",
        value: 2,
        color: "text-[#5c6ee8]",
        bg: "bg-[#e9edfd]",
    },
    {
        icon: <UserRound className="w-6 h-6 text-[#ff6f61]" />,
        label: "Female Employee",
        value: 0,
        color: "text-[#ff6f61]",
        bg: "bg-[#fdeaea]",
    },
];

const OverviewNoticeGender = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
                <NoticeCard></NoticeCard>
            </div>
            <div className="flex flex-col gap-6">
                <OverviewStatCard title="Gender Wise Student" stats={studentStats}></OverviewStatCard>
                <OverviewStatCard title="Gender Wise Teacher & Staff" stats={staffStats}></OverviewStatCard>
            </div>
        </div>
    );
};

export default OverviewNoticeGender;
