import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'TSLA',
    //'AAPL'
];

const atr = [0.4, 0.45, 0.5, 0.55, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9];
const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: atr,
    minimumTargets: {
        ...Constants.baseHitTargets,
        dailyRanges: atr,
    }
};
const baseTargets: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: Constants.baseHitTargets,
};
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: Constants.baseHitTargets,
};
const amcRR = [0.8, 1, 1, 1.5, 2, 2, 2.5, 3, 3.5, 5, 5];
const amcATR = [0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 2, 2, 2];

const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: {
        ...Constants.baseHitTargets,
        rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    }
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 503694, tradingSum: 126491156 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 800,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 250,
            momentumStartForShort: 249.8,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 249.5,
                lastDefense: 250.5
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'AAPL',
        vwapCorrection: { volumeSum: 684574, tradingSum: 121687498 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 177.5,
            momentumStartForShort: 177.47,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 177.6,
                lastDefense: 177.6
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseTargets,
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