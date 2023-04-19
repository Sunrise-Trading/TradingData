import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'WAL', 'NFLX'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1726534, tradingSum: 310358832 },
        dailyRange: 5,
        fixQuantity: 60,
        keyLevels: { otherLevels: [180.93] },
        long: {},
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 180.93, upperRoom: 0.25, lowerRoom: 0.25 },
                    { priceLevel: 180, upperRoom: 0.25, lowerRoom: 0.25 },
                ],
                allowAgainstVwap: false,
                lastDefense: 182,
            },
            openingDrive: { lastDefense: 182 },
            momentum: {
                breakoutLevels: [185.16],
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