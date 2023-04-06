import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: {
            volumeSum: 1619608, tradingSum: 297583167
        },
        dailyRange: 8,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [183.76],
        },
        long: {
            momentum: {
                breakoutLevels: [184],
            },
        },
        short: {
            momentum: {
                breakoutLevels: [184],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 184, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 185, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                lastDefense: 185.76,
            }
        },
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 2,
        keyLevels: {
            otherLevels: [],
        },
        long: {},
        short: {},
    },
    {
        symbol: 'MNQM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 2,
        keyLevels: {
            otherLevels: [],
        },
        long: {},
        short: {},
    }
];