import { MoreVertical } from "lucide-react";

const StatBox = ({ icon, label, value, bg }) => (
    <div className={`flex items-center gap-3 p-4 rounded-xl shadow bg-white w-full`}>
        <span className={`rounded-full p-2 ${bg} flex items-center justify-center`}>
            {icon}
        </span>
        <div>
            <div className="text-sm text-[#23245c] font-semibold">{label}</div>
            <div className="text-xl font-bold">{value}</div>
        </div>
    </div>
);

const OverviewStatCard = ({ title, stats }) => {
    return (
        <div className="bg-white rounded-2xl shadow flex-1 min-w-[220px] flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4 pb-2 bg-[#23245c] rounded-t-2xl">
                <span className="text-white font-semibold text-lg">{title}</span>
                <button>
                    <MoreVertical className="text-white" size={22} />
                </button>
            </div>
            {/* Responsive flex: stack on mobile, row on md+ */}
            <div className="flex flex-col md:flex-row gap-4 px-5 pb-5 pt-3">
                {stats.map((item, idx) => (
                    <StatBox key={idx} {...item} />
                ))}
            </div>
        </div>
    );
};

export default OverviewStatCard;
