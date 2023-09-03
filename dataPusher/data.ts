import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'TSLA',
];

const longTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1.5, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: Constants.baseHitTargets,
};
const shortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1.2, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: Constants.baseHitTargets,
};


const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    minimumTargets: {
        rrr: [],
        priceLevels: [],
        dailyRanges: [],
    }
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1090832, tradingSum: 281584482 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 259,
            momentumStartForShort: 258.5,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 259,
                lastDefense: 258.5
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: longTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1600957, tradingSum: 724750885 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 453,
            momentumStartForShort: 452.85,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: longTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'LULU',
        vwapCorrection: { volumeSum: 39501, tradingSum: 15427707 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 394,
            momentumStartForShort: 390,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
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
                planType: TradingPlans.PlanType.NewsBreakout,
                planConfigs: Constants.scalpConfig,
                targets: futuresTarget,
            },
            breakoutAlgo: {
                planType: TradingPlans.PlanType.BreakoutAlgo,
                planConfigs: Constants.scalpConfig,
                targets: futuresTarget,
                entryPrice: 4430,
                useHighLowOfDay: false,
                expirationInSeconds: 0,
                allowPremarket: true,
            },
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                planConfigs: Constants.scalpConfig,
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
                planType: TradingPlans.PlanType.NewsBreakout,
                planConfigs: Constants.scalpConfig,
                targets: futuresTarget,
            },
            breakoutAlgo: {
                planType: TradingPlans.PlanType.BreakoutAlgo,
                planConfigs: Constants.scalpConfig,
                targets: futuresTarget,
                entryPrice: 4430,
                useHighLowOfDay: false,
                expirationInSeconds: 0,
                allowPremarket: true,
            },
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                planConfigs: Constants.scalpConfig,
                targets: futuresTarget,
            }
        },
    }
];