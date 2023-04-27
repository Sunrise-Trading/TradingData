import type * as TradingPlans from './models';

export const stockSelections: string[] = ['BA', 'FRC', 'MSFT', 'GOOGL'];
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
        symbol: 'BA',
        vwapCorrection: { volumeSum: 322925, tradingSum: 67397333 },
        dailyRange: 5,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [209.5] },
        short: {
            openingDrive: { lastDefense: 209.5 },
            momentum: { breakoutLevels: [209.5] },
            retracement: {
                entryAreas: [
                    { priceLevel: 209.5, upperRoom: 0.2, lowerRoom: 1 }
                ],
                allowAgainstVwap: false,
                lastDefense: 210,
            }
        },
        long: {},
    },
    {
        symbol: 'MSFT',
        vwapCorrection: { volumeSum: 1595620, tradingSum: 474060176 },
        dailyRange: 6,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [302] },
        short: {
            openingDrive: { lastDefense: 299 },
        },
        long: {
            momentum: { breakoutLevels: [302] },
        },
    },
    {
        symbol: 'GOOGL',
        vwapCorrection: { volumeSum: 923243, tradingSum: 95691364 },
        dailyRange: 2.5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [136.73] },
        short: {
        },
        long: {
            openingDrive: { lastDefense: 103.5 },
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