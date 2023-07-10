import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['SPY', 'QQQ'];

const spyLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [25.95],
    rrr: [0.5, 1],
    dailyRanges: [2],
    pinnedPrices: [],
}
const qqqShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [364.8],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [2],
    pinnedPrices: [],
};
const babaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [91.57],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [2],
    pinnedPrices: [],
}
const babaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [85.5],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [2],
    pinnedPrices: [],
};
const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    pinnedPrices: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 712828, tradingSum: 312408526 },
        dailyRange: 3.5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [440] },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: spyLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: spyLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },

        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 666248, tradingSum: 243649354 },
        dailyRange: 2.5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [91.57] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqShortTarget,
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