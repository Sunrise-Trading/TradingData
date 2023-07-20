import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['SPY', 'TSLA', 'AMD'];

const okTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1.5, 1.8],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const msftLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1.5, 1.8],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const msftShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const amdLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [1, 1.5, 1.8],
    dailyRanges: [3, 4],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 1.5
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
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 441361, tradingSum: 200635411 },
        dailyRange: 3.8,
        deferTradingInSeconds: 0,
        fixQuantity: 150,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [455.11] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: okTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 454.5,
                stopForAgainstVwapLimitOrMarketEntry: 454.5,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: okTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {}
    },
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 232227, tradingSum: 26773983 },
        dailyRange: 4.4,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [115.55] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: okTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 115.4,
                stopForAgainstVwapLimitOrMarketEntry: 115.5,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: okTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {},
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1683449, tradingSum: 471851730 },
        dailyRange: 9.9,
        deferTradingInSeconds: 120,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [284.44] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: okTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: okTarget,
                planConfigs: Constants.dayTradeConfig,
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