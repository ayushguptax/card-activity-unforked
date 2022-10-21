import { useContext, useEffect, useState } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';
import { WalletConnectContext } from '../../context';
import { useBeneficiaryOverview } from '../../hooks/use-beneficiary-overview';
import { IVestingSchedule } from '../../interfaces/vestingSchedule.interface';
import { formatVestingScheduleData } from '../../utils/formatVestingScheduleData';
import { VestingSchedule } from './vestingSchedule/VestingSchedule';
import { Withdraw } from './withdraw/Withdraw';
import { IBeneficiaryOverview } from '../../interfaces/beneficiaryOverview.interface';

export const VestingOverview = () => {
    const { account, library } = useContext(WalletConnectContext);
    const [vestingSchedules, setVestingSchedules] = useState<
        IVestingSchedule[]
    >([]);
    const { getBeneficiaryOverview } = useBeneficiaryOverview();

    useEffect(() => {
        const fetchData = async (library: JsonRpcProvider, account: string) => {
            const beneficiaryOverview = await getBeneficiaryOverview(
                library,
                account,
            );
            const vestingSchedules = beneficiaryOverview.map(
                (el: IBeneficiaryOverview) => formatVestingScheduleData(el),
            );

            setVestingSchedules(vestingSchedules);
        };

        if (library && account) {
            fetchData(library, account).catch(console.error);
        }
    }, [library, account]);

    return (
        <div className="w-full h-full flex justify-between">
            <div className="w-[77%]">
                <VestingSchedule data={vestingSchedules} />
            </div>
            <div className="w-[21%]">
                <Withdraw data={vestingSchedules} />
            </div>
        </div>
    );
};
