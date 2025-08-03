import OverviewLeaveAndSms from './OverviewLeaveAndSms';
import OverviewNoticeGender from './OverviewNoticeGender';
import TotalOverviewFirstColumn from './TotalOverviewFirstColumn';
import TotalOverviewSecondColumn from './TotalOverviewSecondColumn';

const TotalOverview = () => {
    return (
        <div>
            <TotalOverviewFirstColumn></TotalOverviewFirstColumn>
            <div className='mt-7'>
                <TotalOverviewSecondColumn></TotalOverviewSecondColumn>
            </div>
            <div className='mt-7'>
                <OverviewLeaveAndSms></OverviewLeaveAndSms>
            </div>
            <div className='mt-7'>
                <OverviewNoticeGender></OverviewNoticeGender>
            </div>
        </div>
    );
};

export default TotalOverview;
