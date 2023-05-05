import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['PACW', 'SHOP'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PACW',
        vwapCorrection: { volumeSum: 1237671, tradingSum: 103253376 },
        dailyRange: 3,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [83.64, 83.76] },
        long: {},
        short: {
            openingDrive: {
                lastDefense: 4.22,
                targets: {
                    priceLevels: [83],
                    rrr: [1.5],
                }
            },
            momentum: {
                targets: {
                    priceLevels: [142],
                    rrr: [1.5],
                },
            },
            retracement: {
                entryAreas: [
                    {
                        priceArea: { priceLevel: 4.41, upperRoom: 0.1, lowerRoom: 0.1 },
                        targets: { priceLevels: [], rrr: [] },
                    },
                    {
                        priceArea: { priceLevel: 5, upperRoom: 0.1, lowerRoom: 0.1 },
                        targets: { priceLevels: [], rrr: [] },
                    },
                ],
                allowAgainstVwap: false,
                lastDefense: 5.2,
            }
        }
    },
    {
        symbol: 'SHOP',
        vwapCorrection: { volumeSum: 2705133, tradingSum: 145644760 },
        dailyRange: 2,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [54.67] },
        short: {
            openingDrive: {
                lastDefense: 55,
                targets: {
                    priceLevels: [],
                    rrr: [],
                }
            }
        },
        long: {
            openingDrive: {
                lastDefense: 53.6,
                targets: {
                    priceLevels: [283.6],
                    rrr: [],
                },
            },
            momentum: {
                targets: {
                    priceLevels: [],
                    rrr: [],
                },
            },
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
    },
    {
        symbol: 'USM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];