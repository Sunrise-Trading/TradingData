import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'SPY', 'QQQ'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1957167, tradingSum: 354502002 },
        dailyRange: 8,
        fixQuantity: 50,
        keyLevels: { otherLevels: [179.74] },
        long: {},
        short: {
            momentum: {
                breakoutLevels: [180],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 182, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                lastDefense: 183.2,
            },
            openingDrive: { lastDefense: 183.2 },
        },
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 443671, tradingSum: 180923180 },
        dailyRange: 4,
        fixQuantity: 100,
        keyLevels: { otherLevels: [407.8] },
        long: {
            openingDrive: { lastDefense: 406.2 },
        },
        short: {},
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 671255, tradingSum: 212336072 },
        dailyRange: 4,
        fixQuantity: 100,
        keyLevels: { otherLevels: [315.97] },
        long: {
            openingDrive: { lastDefense: 314.89 },
        },
        short: {},
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