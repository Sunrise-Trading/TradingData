import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    allowMultipleStocks: false,
    equalWeightDivider: 0,
};
export const stockSelections: string[] = [
    'RIVN',
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
        vwapCorrection: { volumeSum: 2275505, tradingSum: 49005977 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 21.5,
            momentumStartForShort: 21.69,
        },
        short: {
            openingDrive: {
                targets: Constants.baseHitFrequentStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 21.6,
                lastDefense: 21.58
            },
            momentum: { targets: Constants.baseHitFrequentStockTargets },
        },
        long: {
            /*
            openingDrive: {
                targets: Constants.baseHitFrequentStockTargets,
                stopForAgainstVwapLimitOrMarketEntry: 21.25,
                lastDefense: 21.5
            },*/
            momentum: { targets: Constants.baseHitFrequentStockTargets },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 688112, tradingSum: 170229094 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 247.3,
            momentumStartForShort: 247.2,
        },
        short: {
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