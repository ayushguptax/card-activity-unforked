export interface IVestingSchedule {
    name: string;
    terms: number;
    cliff: number;
    duration: number;
    durationLeft: number;
    durationProgress: number;
    vestingRate: number;
    vestingRateAsString: string;
    allocatedAmount: number;
    releasedAmount: number;
    unlockedAmount: number;
    isUnlocked: boolean;
}

export interface IVestingScheduleFromResponse {
    name: string;
    terms: number;
    cliff: number;
    duration: number;
    totalAmount: number;
    allocatedAmount: number;
    releasedAmount: number;
    initialized: boolean;
    revoked: boolean;
}
