import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['AMZN', 'AAPL'];

const amznLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [143],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [143],
    minimumTargets: {}
};

const amnzShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [138.2],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [138.2],
    minimumTargets: {}
};

const aaplShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [75.2],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [75.2],
    minimumTargets: {}
};

const aaplLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [83.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [83.5],
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
        symbol: 'AMZN',
        vwapCorrection: { volumeSum: 3717543, tradingSum: 522013520 },
        dailyRange: 3.2,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [143] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: amnzShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 141,
                stopForAgainstVwapLimitOrMarketEntry: 141.6,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: amnzShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: amznLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 140,
                stopForAgainstVwapLimitOrMarketEntry: 139.8,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: amznLongTarget,
                planConfigs: Constants.scalpConfig,
            },

        }
    },
    {
        symbol: 'AAPL',
        vwapCorrection: { volumeSum: 1714509, tradingSum: 3193512726 },
        dailyRange: 2.8,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [78.11] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: aaplShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: aaplLongTarget,
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