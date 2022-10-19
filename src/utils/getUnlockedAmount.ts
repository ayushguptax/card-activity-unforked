import { LAKE_TGE_TIMESTAMP } from '../constants/blockchain';

export const getUnlockedAmount = (
    cliff: number,
    terms: number,
    vestingRate: number,
) => {
    return (
        Math.floor(
            (new Date().getTime() / 1000 - LAKE_TGE_TIMESTAMP - cliff) / terms,
        ) * vestingRate
    );
};
