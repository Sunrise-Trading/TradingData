import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    //'IMVT'
    //'SLNO'
    'TSLA'
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
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 630944, tradingSum: 154315468 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 243,
            momentumStartForShort: 244.5,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 244.5,
                lastDefense: 244.5
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 244.5,
                lastDefense: 244.5
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'SLNO',
        vwapCorrection: { volumeSum: 6324567, tradingSum: 91703615 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 16,
            momentumStartForShort: 16,
        },
        short: {
            /*
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitRareStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 243,
                lastDefense: 242.5
            },*/
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitRareStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 18,
                lastDefense: 18
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'IMVT',
        vwapCorrection: { volumeSum: 2960878, tradingSum: 94001175 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 32,
            momentumStartForShort: 31.9,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 32.5,
                lastDefense: 32
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 32,
                lastDefense: 32
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.tslaStockTargets,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    /*
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
    }*/
];