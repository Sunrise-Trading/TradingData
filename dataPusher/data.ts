import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'AMC',
];
const rrr = [0.8, 1, 1.5, 2, 2, 2.5, 3, 3.5, 5, 5];
const atr = [0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 2, 2, 2];
const longTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: rrr,
    dailyRanges: atr,
    minimumTargets: {
        rrr: rrr,
        dailyRanges: atr,
        priceLevels: [0, 0, 0, 0, 0, 145, 0, 0, 150, 155]
    },
};
const shortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: Constants.baseHitTargets,
};
const amcRR = [0.8, 1, 1, 1.5, 2, 2, 2.5, 3, 3.5, 5, 5];
const amcATR = [0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 2, 2, 2];
const baseHitsShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: Constants.baseHitTargets,
};
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
        symbol: 'AMC',
        vwapCorrection: { volumeSum: 2427133, tradingSum: 29007600 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 12.16,
            momentumStartForShort: 12,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseHitsShortTarget,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 12.16,
                lastDefense: 12
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: baseHitsShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {

        }
    },
    {
        symbol: 'ROKU',
        vwapCorrection: { volumeSum: 668278, tradingSum: 61876399 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 92.6,
            momentumStartForShort: 92.5,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 93,
                lastDefense: 92.8
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {

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