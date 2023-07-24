import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA'];

const dwacLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 0.85, 0.9, 1, 1.8, 1.9, 2, 2.1, 3, 4],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 0.85, 0.9, 1, 1.8, 1.9, 2, 2.1, 3, 4],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.2, 0.3, 0.4, 0.5, 0.8, 0.85, 0.9, 1, 1.5, 2],
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
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1173951, tradingSum: 300789939 },
        dailyRange: 11,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [255.8, 255] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 255.8,
                stopForAgainstVwapLimitOrMarketEntry: 255,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'DWAC',
        vwapCorrection: { volumeSum: 161239, tradingSum: 3051610 },
        dailyRange: 5,
        deferTradingInSeconds: 120,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [18.26] },
        short: {
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dwacLongTarget,
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