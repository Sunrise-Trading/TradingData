import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    allowMultipleStocks: false,
    equalWeightDivider: 4,
};

export const nvdaTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.9, 1.3, 1.6, 2, 2, 2, 2.5, 2.5, 3, 5],
    dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1],
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 1.3, 1.5, 1.6, 1.8, 2, 2.5, 2.5, 3, 5],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1],
    }
};
export const stockSelections: string[] = [
    'NVDA',
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
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 665187, tradingSum: 294112565 },
        dailyRange: 14,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 440,
            momentumStartForShort: 439.5,
        },
        short: {
        },
        long: {
            openingDrive: {
                targets: nvdaTarget,
                stopForAgainstVwapLimitOrMarketEntry: 440,
                lastDefense: 440
            },
            momentum: { targets: nvdaTarget },
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