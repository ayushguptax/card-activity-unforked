import { IBeneficiary } from '../interfaces/beneficiary.interface';
import {
    IVestingSchedule,
    IVestingScheduleFromResponse,
} from '../interfaces/vestingSchedule.interface';
import {
    getDurationLeft,
    getDurationProgress,
    isVestingScheduleUnlocked,
} from './getDuration';
import { getTermsAsString } from './getTermsAsString';
import { getUnlockedAmount } from './getUnlockedAmount';

export const formatVestingScheduleData = (
    vestingSchedule: IVestingScheduleFromResponse,
    beneficiary: IBeneficiary,
): IVestingSchedule => {
    const { name, terms, cliff, duration } = vestingSchedule;
    const vestingRate = (beneficiary.allocatedAmount * terms) / duration;
    const isUnlocked = isVestingScheduleUnlocked(
        vestingSchedule.cliff,
        vestingSchedule.duration,
    );
    return {
        ...beneficiary,
        name,
        terms,
        cliff,
        duration,
        durationLeft: isUnlocked
            ? 0
            : getDurationLeft(vestingSchedule.cliff, vestingSchedule.duration),
        durationProgress: isUnlocked
            ? 100
            : getDurationProgress(
                  vestingSchedule.cliff,
                  vestingSchedule.duration,
              ),
        vestingRate,
        vestingRateAsString: isUnlocked
            ? 'FULLY VESTED'
            : `${vestingRate} $LAKE / ${getTermsAsString(terms)}`,
        unlockedAmount: isUnlocked
            ? beneficiary.allocatedAmount
            : getUnlockedAmount(vestingSchedule.cliff, terms, vestingRate),
        isUnlocked,
    };
};
