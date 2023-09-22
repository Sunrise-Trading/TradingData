import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    //'BABA',
    'TSLA'
];

const pinsTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.9, 0.95, 1.6, 1.8, 1.9, 2, 2, 2, 3, 10],
    dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.6, 1.8, 1.8, 1.8, 1.8, 2.5, 10],
        dailyRanges: [0.5, 0.5, 0.5, 0.5, 0.6, 0.65, 0.7, 0.8, 1, 1],
    }
};


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
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 482394, tradingSum: 42310824 },
        dailyRange: 2.2,
        deferTradingInSeconds: 0,
        fixQuantity: 300,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 87.9,
            momentumStartForShort: 88.2,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitRareStockTargets,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 88,
                lastDefense: 87.9
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 771911, tradingSum: 198840411 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 257,
            momentumStartForShort: 256.8,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitFrequentStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 257,
                lastDefense: 257.5
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