import { Page } from '../components/page/Page';
import { Stats } from '../components/stats/Stats';
import { VestingOverview } from '../components/vestingOverview/VestingOverview';

export const Main = () => (
    <Page>
        <div className="w-full flex flex-col items-center justify-center px-28">
            <div className="w-full h-[90vh] flex justify-between py-14">
                <div className="w-[62%]">Your Account </div>
                <div className="w-[31%]">
                    <Stats />
                </div>
            </div>
            <div className="my-28">Liquidity / Swap / Buy</div>
            <div className="w-full h-[80vh] py-14">
                <VestingOverview />
            </div>
        </div>
    </Page>
);
