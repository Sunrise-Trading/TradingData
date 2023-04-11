import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'MRNA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1056262, tradingSum: 197153899 },
        dailyRange: 8,
        fixQuantity: 50,
        keyLevels: { otherLevels: [187.77] },
        long: {
            momentum: {
                breakoutLevels: [180],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 186, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                lastDefense: 185,
            },
            openingDrive: { lastDefense: 186 },
        },
        short: {},
    },
    {
        symbol: 'MRNA',
        vwapCorrection: { volumeSum: 143934, tradingSum: 21703049 },
        dailyRange: 4,
        fixQuantity: 30,
        keyLevels: { otherLevels: [156] },
        long: {
            openingDrive: { lastDefense: 148.2 },
            momentum: {
                breakoutLevels: [154.45],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 150, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                lastDefense: 148,
            }
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