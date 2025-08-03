import React from "react";
import { MoreVertical, Briefcase, UserRound, MessageCircle, MailCheck } from "lucide-react";
import OverviewStatCard from "../../reusable/OverviewStatCard";

const leaveStats = [
    {
        icon: <Briefcase className="w-6 h-6 text-[#b285fb]" />,
        label: "Leave Employee",
        value: 0,
        bg: "bg-[#f4edfa]",
    },
    {
        icon: <UserRound className="w-6 h-6 text-[#00c9a7]" />,
        label: "Leave Student",
        value: 0,
        bg: "bg-[#eafaf6]",
    },
];

const smsStats = [
    {
        icon: <MessageCircle className="w-6 h-6 text-[#0084ff]" />,
        label: "General SMS",
        value: 0,
        bg: "bg-[#eaf3fd]",
    },
    {
        icon: <MailCheck className="w-6 h-6 text-[#21c274]" />,
        label: "Masking SMS",
        value: 0,
        bg: "bg-[#eafaf6]",
    },
];

const OverviewLeaveAndSms = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <OverviewStatCard title="Leave Information" stats={leaveStats}></OverviewStatCard>
            <OverviewStatCard title="SMS Information" stats={smsStats}></OverviewStatCard>
        </div>
    );
};

export default OverviewLeaveAndSms;
