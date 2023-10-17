import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const oneATR: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [1.4, 1.5, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1],
    }
}

const nvdaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    }
}
export const stockSelections: string[] = [
    'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'BAC',
        vwapCorrection: { volumeSum: 2377708, tradingSum: 64913357 },
        dailyRange: 0.62,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 27.25,
            momentumStartForShort: 27.24,
        },
        short: {
            openingDrive: {
                targets: oneATR,
                stopForAgainstVwapLimitOrMarketEntry: 403,
                lastDefense: 399.99
            },
            momentum: { targets: oneATR },
        },
        long: {
            openingDrive: {
                targets: oneATR,
                stopForAgainstVwapLimitOrMarketEntry: 27.25,
                lastDefense: 27.25
            },
            momentum: { targets: oneATR },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 1144372, tradingSum: 513833317 },
        dailyRange: 14,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 450,
            momentumStartForShort: 449.9,
        },
        short: {
            openingDrive: {
                targets: nvdaTarget,
                stopForAgainstVwapLimitOrMarketEntry: 450,
                lastDefense: 450
            },
            momentum: { targets: nvdaTarget },
        },
        long: {
            openingDrive: {
                targets: nvdaTarget,
                stopForAgainstVwapLimitOrMarketEntry: 450,
                lastDefense: 450
            },
            momentum: { targets: nvdaTarget },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 648033, tradingSum: 161144509 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 248,
            momentumStartForShort: 248.5,
        },
        short: {
            momentum: { targets: Constants.tslaStockTargets },
        },
        long: {
            momentum: { targets: Constants.tslaStockTargets },
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