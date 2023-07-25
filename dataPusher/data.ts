import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['BABA', 'DIS'];

const babaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.85, 1, 1.8, 1.9, 2, 3,],
    dailyRanges: [2, 2.5, 3],
    pinnedPrices: [],
    minimumTargets: {}
};

const babaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.2, 0.3, 0.4, 0.5, 0.8, 0.85, 0.9, 1, 1.5, 2],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const disShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [84.5, 84.2],
    rrr: [0.8, 0.85, 1, 1.5],
    dailyRanges: [],
    pinnedPrices: [],
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
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 426180, tradingSum: 41705316 },
        dailyRange: 3,
        deferTradingInSeconds: 55,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [97.47] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'DIS',
        vwapCorrection: { volumeSum: 264688, tradingSum: 22699142 },
        dailyRange: 1.7,
        deferTradingInSeconds: 55,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [86] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: disShortTarget,
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