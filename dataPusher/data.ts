import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['PLTR', 'NKLA'];

const pltrLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [20.1],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [20.1],
    minimumTargets: {}
};

const pltrShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [19.05],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [19.05],
    minimumTargets: {}
};

const nklaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [2.88],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [2.88],
    minimumTargets: {}
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
        symbol: 'PLTR',
        vwapCorrection: { volumeSum: 2192888, tradingSum: 43104476 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        fixQuantity: 600,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [20.14] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 19.6,
                stopForAgainstVwapLimitOrMarketEntry: 19.5,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'NKLA',
        vwapCorrection: { volumeSum: 26956959, tradingSum: 85862809 },
        dailyRange: 0.5,
        deferTradingInSeconds: 0,
        fixQuantity: 800,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [2.8] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nklaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {}
    },
    {
        symbol: 'NIO',
        vwapCorrection: { volumeSum: 2913170, tradingSum: 55158755 },
        dailyRange: 0.96,
        deferTradingInSeconds: 0,
        fixQuantity: 600,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [18.6] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 19,
                stopForAgainstVwapLimitOrMarketEntry: 19.12,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
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