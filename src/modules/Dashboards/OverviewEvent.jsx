import { MoreVertical, Calendar } from "lucide-react";

const OverviewEvent = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col transition hover:shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#23245c] rounded-t-2xl shadow">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#ffd02c]" />
                    <span className="text-white font-bold text-lg tracking-wide">Events</span>
                </div>
                <button className="hover:bg-white/20 p-1 rounded-full transition">
                    <MoreVertical className="text-white" size={22} />
                </button>
            </div>
            {/* Body */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-6">
                
                <div className="text-[#b0b7c3] text-base mb-6">No upcoming events</div>
                <button className="bg-[#23245c] hover:bg-[#1a1b3a] transition text-white px-6 py-2 rounded-xl font-semibold text-base shadow">
                    View All
                </button>
            </div>
        </div>
    );
};

export default OverviewEvent;
