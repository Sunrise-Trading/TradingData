import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'NIO',
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
        symbol: 'NIO',
        vwapCorrection: { volumeSum: 854693, tradingSum: 233235104 },
        dailyRange: 0.6,
        deferTradingInSeconds: 0,
        fixQuantity: 1000,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 10,
            momentumStartForShort: 10,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitRareStockTargets,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitRareStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 10,
                lastDefense: 10
            }
        },
        long: {
            /*
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 271,
                lastDefense: 271
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
            },*/
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 854693, tradingSum: 233235104 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 270,
            momentumStartForShort: 273,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 273,
                lastDefense: 273
            }
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 271,
                lastDefense: 271
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
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