import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    //'NKE'
    'TSLA'
];
const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    dailyRanges: Constants.baseHitRareStockTargets.dailyRanges,
    minimumTargets: {
        ...Constants.baseHitRareStockTargets,
        rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    }
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NKE',
        vwapCorrection: { volumeSum: 609402, tradingSum: 59793450 },
        dailyRange: 3,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 4,
            momentumStartForShort: 100,
        },
        short: {
            openingDrive: {
                targets: Constants.tslaStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 100,
                lastDefense: 100
            },
            momentum: {
                targets: Constants.baseHitRareStockTargets,

            },
        },
        long: {
            momentum: {
                targets: Constants.baseHitRareStockTargets,

            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 860593, tradingSum: 215051258 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 249,
            momentumStartForShort: 250,
        },
        short: {
            /*
            openingDrive: {
                targets: Constants.tslaStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 245.5,
                lastDefense: 245.5
            },*/
            momentum: {
                targets: Constants.tslaStockTargets,

            },
        },
        long: {
            /*
            openingDrive: {
                targets: Constants.tslaStockTargets,
                planConfigs: {},
                stopForAgainstVwapLimitOrMarketEntry: 244.5,
                lastDefense: 244.5
            },*/
            momentum: {
                targets: Constants.tslaStockTargets,

            },
        }
    },
    /*
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 6,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [4000],
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        long: {
            newsBreakout: {
                planConfigs: {},
                targets: futuresTarget,
            },
            breakoutAlgo: {
                planConfigs: {},
                targets: futuresTarget,
                entryPrice: 4430,
                useHighLowOfDay: false,
                expirationInSeconds: 0,
                allowPremarket: true,
            },
        },
        short: {
            newsBreakout: {
                planConfigs: {},
                targets: futuresTarget,
            }
        },
    },
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 6,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [4000],
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        long: {
            newsBreakout: {
                planConfigs: {},
                targets: futuresTarget,
            },
            breakoutAlgo: {
                planConfigs: {},
                targets: futuresTarget,
                entryPrice: 4430,
                useHighLowOfDay: false,
                expirationInSeconds: 0,
                allowPremarket: true,
            },
        },
        short: {
            newsBreakout: {
                planConfigs: {},
                targets: futuresTarget,
            }
        },
    }*/
];