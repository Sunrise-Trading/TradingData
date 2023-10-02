import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
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
        symbol: 'RIVN',
        vwapCorrection: { volumeSum: 2263846, tradingSum: 54291806 },
        dailyRange: 1.2,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 24,
            momentumStartForShort: 23.99,
        },
        short: {
            openingDrive: {
                targets: Constants.baseHitRareStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 24.5,
                lastDefense: 23.99
            },
            momentum: { targets: Constants.baseHitRareStockTargets },
        },
        long: {
            momentum: { targets: Constants.baseHitRareStockTargets },
            openingDrive: {
                targets: Constants.baseHitRareStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 24,
                lastDefense: 23
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 737533, tradingSum: 184613613 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 240,
            momentumStartForShort: 246.35,
        },
        short: {
            openingDrive: {
                targets: Constants.tslaStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 246.35,
                lastDefense: 246.35
            },
            momentum: { targets: Constants.tslaStockTargets },
        },
        long: {
            momentum: { targets: Constants.tslaStockTargets },
            /*
            openingDrive: {
                targets: Constants.tslaStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 240,
                lastDefense: 239.2
            },
            */
        }
    },
    /*
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixedQuantity: 6,
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
        fixedQuantity: 6,
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