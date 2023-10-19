import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const tslaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.6, 1.8, 1.8, 1.8, 2, 2.5, 3],
        dailyRanges: [0.4, 0.4, 0.45, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
}

const nflxTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    }
}
export const stockSelections: string[] = [
    'NFLX',
    'TSLA',

];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NFLX',
        vwapCorrection: { volumeSum: 568981, tradingSum: 225342085 },
        dailyRange: 12,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 395,
            momentumStartForShort: 400,
        },
        short: {
            /*
            openingDrive: {
                targets: nflxTarget,
                stopForAgainstVwapLimitOrMarketEntry: 400,
                lastDefense: 400
            },*/
            momentum: { targets: nflxTarget },
        },
        long: {
            openingDrive: {
                targets: nflxTarget,
                stopForAgainstVwapLimitOrMarketEntry: 398,
                lastDefense: 398
            },
            momentum: { targets: nflxTarget },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 3348743, tradingSum: 760817561 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 226,
            momentumStartForShort: 230,
        },
        short: {
            openingDrive: {
                targets: tslaTarget,
                stopForAgainstVwapLimitOrMarketEntry: 230,
                lastDefense: 230
            },
            momentum: { targets: tslaTarget },
        },
        long: {
            /*
            openingDrive: {
                targets: tslaTarget,
                stopForAgainstVwapLimitOrMarketEntry: 224,
                lastDefense: 224
            },*/
            momentum: { targets: tslaTarget },
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