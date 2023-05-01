import type * as TradingPlans from './models';

export const stockSelections: string[] = ['JPM'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'JPM',
        vwapCorrection: { volumeSum: 459018, tradingSum: 65857695 },
        dailyRange: 2.5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [144.34] },
        short: {
            openingDrive: {
                lastDefense: 144.34,
                targets: {
                    priceLevels: [142],
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
                        priceArea: { priceLevel: 145, upperRoom: 0.2, lowerRoom: 0.6 },
                        targets: {
                            priceLevels: [142],
                            rrr: [1.5],
                        }
                    }
                ],
                allowAgainstVwap: false,
                lastDefense: 145.2,
            }
        },
        long: {}
    },
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
                targets: {
                    priceLevels: [],
                    rrr: [],
                },
            },
            momentum: {
                targets: {
                    priceLevels: [],
                    rrr: [],
                },
            },
            retracement: {
                entryAreas: [
                    {
                        priceArea: { priceLevel: 242.27, upperRoom: 1, lowerRoom: 3 },
                        targets: {
                            priceLevels: [],
                            rrr: [],
                        },
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