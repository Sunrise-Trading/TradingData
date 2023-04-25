import type * as TradingPlans from './models';

export const stockSelections: string[] = ['FRC', 'SPOT', 'GM'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'FRC',
        vwapCorrection: { volumeSum: 4716172, tradingSum: 58236470 },
        dailyRange: 3,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [11.52] },
        short: {
            momentum: { breakoutLevels: [12.3] },
        },
        long: {
            openingDrive: { lastDefense: 11.75 },
            momentum: {
                breakoutLevels: [12.41],
            }
        },
    },
    {
        symbol: 'GM',
        vwapCorrection: { volumeSum: 597963, tradingSum: 21060764 },
        dailyRange: 1,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [35.8] },
        short: {
            openingDrive: { lastDefense: 35.5 },
            momentum: { breakoutLevels: [35.3] },
            retracement: {
                entryAreas: [
                    { priceLevel: 35.3, upperRoom: 0.15, lowerRoom: 0.15 },
                ],
                allowAgainstVwap: false,
                lastDefense: 35.5,
            }
        },
        long: {},
    },
    {
        symbol: 'SPOT',
        vwapCorrection: { volumeSum: 200602, tradingSum: 27558684 },
        dailyRange: 3.5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [136.73] },
        short: {
            openingDrive: { lastDefense: 142.48 },
        },
        long: {
            momentum: { breakoutLevels: [136.73] },
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