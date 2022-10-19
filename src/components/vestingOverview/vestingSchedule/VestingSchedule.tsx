import { IVestingSchedule } from '../../../interfaces/vestingSchedule.interface';
import { ScheduleTab } from './ScheduleTab';

interface Props {
    data: IVestingSchedule[];
}

export const VestingSchedule = ({ data }: Props) => (
    <div className="w-full h-full flex flex-col items-center bg-black-700 rounded-[30px] inset-shadow px-4">
        <div className="w-full flex justify-start py-10 px-6">
            <div className="font-kanit-medium color-gray-gradient text-shadow text-xl tracking-[.12em]">
                YOUR $LAKE VESTING SCHEDULE
            </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
            <ScheduleTab data={data} />
        </div>
    </div>
);
