const NoticeCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow flex-1 flex flex-col w-full max-w-md h-full">
            <div className="flex items-center justify-between px-4 md:px-5 pt-4 pb-2 bg-[#23245c] rounded-t-2xl">
                <span className="text-white font-semibold text-lg">Notice</span>
            </div>
            <div className="flex flex-col flex-1 px-4 md:px-5 py-5">
                <button className="w-max bg-[#37397b] hover:bg-[#23245c] text-white text-xs font-semibold rounded-md px-3 py-1 shadow mb-3">
                    View All
                </button>
                {/* Notice Content placeholder */}
                <div className="flex-1 rounded-lg bg-white/70 mt-1 min-h-[90px]" />
            </div>
        </div>
    );
};

export default NoticeCard;