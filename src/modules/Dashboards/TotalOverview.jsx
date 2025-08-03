import TotalOverviewFirstColumn from './TotalOverviewFirstColumn';
import TotalOverviewSecondColumn from './TotalOverviewSecondColumn';

const TotalOverview = () => {
    return (
        <div>
            <TotalOverviewFirstColumn></TotalOverviewFirstColumn>
            <div className='mt-7'>
                <TotalOverviewSecondColumn></TotalOverviewSecondColumn>
            </div>
        </div>
    );
};

export default TotalOverview;
