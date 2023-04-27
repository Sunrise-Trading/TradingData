import type * as TradingPlans from './models';

export const stockSelections: string[] = ['META'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'FRC',
        vwapCorrection: { volumeSum: 13581148, tradingSum: 94845125 },
        dailyRange: 2,
        fixQuantity: 300,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [7.92] },
        short: {
            openingDrive: { lastDefense: 7.5 },
            momentum: { breakoutLevels: [12.3] },
        },
        long: {},
    },
    {
        symbol: 'META',
        vwapCorrection: { volumeSum: 2003128, tradingSum: 473658613 },
        dailyRange: 6,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [236.15] },
        short: {
            openingDrive: { lastDefense: 243 },
            momentum: { breakoutLevels: [209.5] },
            retracement: {
                entryAreas: [
                    { priceLevel: 242.27, upperRoom: 0.2, lowerRoom: 1 }
                ],
                allowAgainstVwap: false,
                lastDefense: 243,
            }
        },
        long: {
            momentum: { breakoutLevels: [236.15] },
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