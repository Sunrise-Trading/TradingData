import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 4091860, tradingSum: 682650298 },
        dailyRange: 5,
        fixQuantity: 60,
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
        symbol: 'WAL',
        vwapCorrection: { volumeSum: 529334, tradingSum: 20642079 },
        dailyRange: 3,
        fixQuantity: 60,
        keyLevels: { otherLevels: [39] },
        long: {
            openingDrive: { lastDefense: 38.27 },
            momentum: {
                breakoutLevels: [39],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 38.35, upperRoom: 0.2, lowerRoom: 0.2 },
                ],
                allowAgainstVwap: false,
                lastDefense: 38.27,
            }
        },
        short: {
        },
    },
    {
        symbol: 'NFLX',
        vwapCorrection: { volumeSum: 377160, tradingSum: 123577401 },
        dailyRange: 3,
        fixQuantity: 50,
        keyLevels: { otherLevels: [330.5] },
        short: {
            openingDrive: { lastDefense: 328 },
            momentum: {
                breakoutLevels: [328],
            },
        },
        long: {
        },
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
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
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];