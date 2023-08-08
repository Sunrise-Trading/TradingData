import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['DDOG'];

const ddogLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [87.89],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [87.89],
    minimumTargets: {}
};

const ddogShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [82.1],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [82.1],
    minimumTargets: {}
};

const llyLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [87.89],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [87.89],
    minimumTargets: {}
};

const llyShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [82.1],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [82.1],
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
        symbol: 'DDOG',
        vwapCorrection: { volumeSum: 1473993, tradingSum: 125909300 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 150,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [89, 89.2],
            momentumStartForLong: 85.8,
            momentumStartForShort: 84.99,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: ddogShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 86,
                stopForAgainstVwapLimitOrMarketEntry: 86,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: ddogShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: ddogLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 85,
                stopForAgainstVwapLimitOrMarketEntry: 84.5,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: ddogLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'LLY',
        vwapCorrection: { volumeSum: 377394, tradingSum: 185493777 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 80,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [488],
            momentumStartForLong: 495,
            momentumStartForShort: 489.99,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: llyShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 500,
                stopForAgainstVwapLimitOrMarketEntry: 500,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: llyShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: llyLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 492,
                stopForAgainstVwapLimitOrMarketEntry: 492,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: llyLongTarget,
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
];