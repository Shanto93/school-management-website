import OverviewEvent from "./OverviewEvent";
import OverviewUserInfo from "./OverviewUserInfo";
import OverviewAttendance from "./OverviewAttendance";

const TotalOverviewSecondColumn = () => {
    return (
        <div className="grid grid-cols-12 gap-4 w-full h-full items-stretch">
            <div className="col-span-12 md:col-span-4 h-full">
                <OverviewUserInfo />
            </div>
            <div className="col-span-12 md:col-span-5 h-full">
                <OverviewAttendance />
            </div>
            <div className="col-span-12 md:col-span-3 h-full">
                <OverviewEvent />
            </div>
        </div>
    );
};

export default TotalOverviewSecondColumn;
