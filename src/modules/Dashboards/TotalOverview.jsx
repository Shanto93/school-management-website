import { Users, UserCog, UsersRound } from 'lucide-react';

const stats = [
    {
        title: "Total Student",
        value: 28,
        icon: <Users className="w-7 h-7 text-green-500" />,
        bg: "bg-[#e8f6ef]",
    },
    {
        title: "Total Staffs",
        value: 2,
        icon: <UserCog className="w-7 h-7 text-indigo-500" />,
        bg: "bg-[#eaf1fb]",
    },
    {
        title: "Total Parents",
        value: 24,
        icon: <UsersRound className="w-7 h-7 text-orange-500" />,
        bg: "bg-[#fcedeb]",
    },
];

const TotalOverview = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
            {stats.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-center p-5 rounded-xl shadow bg-white"
                >
                    <div className={`rounded-full p-3 ${item.bg} mr-4`}>
                        {item.icon}
                    </div>
                    <div>
                        <div className="text-lg font-semibold">{item.title}</div>
                        <div className="text-2xl font-bold">{item.value}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TotalOverview;
