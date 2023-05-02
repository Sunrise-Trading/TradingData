import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'TLT'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 497845, tradingSum: 80561275 },
        dailyRange: 7,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [162.66] },
        long: {
            openingDrive: {
                lastDefense: 161.5,
                targets: {
                    priceLevels: [162.5],
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
                        priceArea: { priceLevel: 160.84, upperRoom: 0.25, lowerRoom: 0.25 },
                        targets: {
                            priceLevels: [161.5],
                            rrr: [1.5],
                        }
                    },
                    {
                        priceArea: { priceLevel: 161.62, upperRoom: 0.15, lowerRoom: 0.15 },
                        targets: {
                            priceLevels: [162.25, 162.5],
                            rrr: [1.5],
                        }
                    }
                ],
                allowAgainstVwap: false,
                lastDefense: 160.8,
            }
        },
        short: {}
    },
    {
        symbol: 'TLT',
        vwapCorrection: { volumeSum: 340093, tradingSum: 35389358 },
        dailyRange: 1,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [104.42] },
        short: {
            momentum: {
                targets: {
                    priceLevels: [],
                    rrr: [],
                },
            },
        },
        long: {
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
    }
];