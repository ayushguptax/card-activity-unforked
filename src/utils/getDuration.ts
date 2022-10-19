import { LAKE_TGE_TIMESTAMP } from '../constants/blockchain';
import { SEC_PER_DAY } from '../constants/commons';

export const getDurationProgress = (
    cliff: number,
    duration: number,
): number => {
    return (
        ((new Date().getTime() / 1000 - LAKE_TGE_TIMESTAMP) * 100) /
        (cliff + duration)
    );
};

export const getDurationLeft = (cliff: number, duration: number): number => {
    return (
        Math.floor(
            (LAKE_TGE_TIMESTAMP +
                cliff +
                duration -
                new Date().getTime() / 1000) /
                SEC_PER_DAY,
        ) + 1
    );
};

export const isVestingScheduleUnlocked = (cliff: number, duration: number) => {
    return LAKE_TGE_TIMESTAMP + cliff + duration < new Date().getTime() / 1000;
};
