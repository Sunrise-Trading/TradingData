import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    allowMultipleStocks: true,
    equalWeightDivider: 4,
};
const oneATR: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
    dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    minimumTargets: {
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    }
}
export const stockSelections: string[] = [
    'DG',
    'NVO'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DG',
        vwapCorrection: { volumeSum: 81643, tradingSum: 8917376 },
        dailyRange: 3.5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 108,
            momentumStartForShort: 111,
        },
        short: {
            openingDrive: {
                targets: oneATR,
                stopForAgainstVwapLimitOrMarketEntry: 110.5,
                lastDefense: 110.5
            },
            momentum: { targets: oneATR },
        },
        long: {
            momentum: { targets: oneATR },
        }
    },
    {
        symbol: 'NVO',
        vwapCorrection: { volumeSum: 474155, tradingSum: 47245454 },
        dailyRange: 2.6,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 100,
            momentumStartForShort: 105,
        },
        short: {
            openingDrive: {
                targets: oneATR,
                stopForAgainstVwapLimitOrMarketEntry: 105,
                lastDefense: 105
            },
            momentum: { targets: oneATR },
        },
        long: {
            openingDrive: {
                targets: oneATR,
                stopForAgainstVwapLimitOrMarketEntry: 100,
                lastDefense: 110
            },
            momentum: { targets: oneATR },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 551594, tradingSum: 142548905 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 260,
            momentumStartForShort: 258.5,
        },
        short: {
            openingDrive: {
                targets: Constants.tslaStockTargets,
                lastDefense: 258.5,
                stopForAgainstVwapLimitOrMarketEntry: 258.5,
            },
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