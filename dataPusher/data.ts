import type * as TradingPlans from './models';

export const stockSelections: string[] = ['META'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        vwapCorrection: { volumeSum: 2003128, tradingSum: 473658613 },
        dailyRange: 6,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [236.15] },
        short: {
            openingDrive: {
                lastDefense: 243,
                targets: [],
            },
            momentum: {
                breakoutLevels: [209.5],
                targets: [],
            },
            retracement: {
                entryAreas: [
                    {
                        priceArea: { priceLevel: 242.27, upperRoom: 1, lowerRoom: 3 },
                        targets: [],
                    }
                ],
                allowAgainstVwap: true,
                lastDefense: 243,
            }
        },
        long: {},
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