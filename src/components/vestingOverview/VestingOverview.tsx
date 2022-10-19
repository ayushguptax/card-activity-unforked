import { IVestingScheduleFromResponse } from '../../interfaces/vestingSchedule.interface';
import { formatVestingScheduleData } from '../../utils/formatVestingScheduleData';
import { VestingSchedule } from './vestingSchedule/VestingSchedule';
import { Withdraw } from './withdraw/Withdraw';

const mockedVestingScheduleResponse = [
    {
        name: 'Seed B',
        terms: 86400,
        cliff: 0,
        duration: 1036800,
        totalAmount: 0,
        allocatedAmount: 0,
        releasedAmount: 0,
        initialized: true,
        revoked: false,
    },
    {
        name: 'Seed A',
        terms: 86400,
        cliff: 86400,
        duration: 86400,
        totalAmount: 0,
        allocatedAmount: 0,
        releasedAmount: 0,
        initialized: true,
        revoked: false,
    },
];

const mockedBeneficiaries = {
    ['Seed A']: {
        allocatedAmount: 2400,
        releasedAmount: 0,
    },
    ['Seed B']: {
        allocatedAmount: 1200,
        releasedAmount: 0,
    },
};

export const VestingOverview = () => {
    const data = mockedVestingScheduleResponse.map(
        (vestingSchedule: IVestingScheduleFromResponse) => {
            const beneficiary =
                vestingSchedule.name === 'Seed A'
                    ? mockedBeneficiaries['Seed A']
                    : mockedBeneficiaries['Seed B'];
            return formatVestingScheduleData(vestingSchedule, beneficiary);
        },
    );

    return (
        <div className="w-full h-full flex justify-between">
            <div className="w-[77%]">
                <VestingSchedule data={data} />
            </div>
            <div className="w-[21%]">
                <Withdraw data={data} />
            </div>
        </div>
    );
};
