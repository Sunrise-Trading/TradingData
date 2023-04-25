import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 4091860, tradingSum: 682650298 },
        dailyRange: 5,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [163.91] },
        short: {},
        long: {
            retracement: {
                entryAreas: [
                    { priceLevel: 165, upperRoom: 1.5, lowerRoom: 1.5 },
                ],
                allowAgainstVwap: false,
                lastDefense: 163.91,
            },
            openingDrive: { lastDefense: 163.91 },
            momentum: {
                breakoutLevels: [163.91],
            }
        },
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    },
    {
        symbol: 'MNQM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];