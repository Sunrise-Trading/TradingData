import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['META'];

const metaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.85, 1, 1.8, 1.9, 2, 3,],
    dailyRanges: [5],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 1,
    }
};

const metaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.3, 0.5, 0.8, 0.85, 0.9, 1, 1.5, 2],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 0.5,
    }
};

const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        vwapCorrection: { volumeSum: 1668415, tradingSum: 545101272 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [129.04] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: metaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 328,
                stopForAgainstVwapLimitOrMarketEntry: 328,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: metaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: metaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 326.5,
                stopForAgainstVwapLimitOrMarketEntry: 326.5,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: metaLongTarget,
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
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
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
];