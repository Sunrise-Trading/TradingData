import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['SOFI', 'PLTR'];

const pltrLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [19.48],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [19.48],
    minimumTargets: {}
};

const pltrShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [18.6],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [18.6],
    minimumTargets: {}
};
const xpevLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [19.48],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [19.48],
    minimumTargets: {}
};

const xpevShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [18.6],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [18.6],
    minimumTargets: {}
};

const sofiLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [11.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [11.5],
    minimumTargets: {}
};

const sofiShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [10.19],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [10.19],
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
        symbol: 'SOFI',
        vwapCorrection: { volumeSum: 9947389, tradingSum: 99559464 },
        dailyRange: 0.52,
        deferTradingInSeconds: 0,
        fixQuantity: 600,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [10.23] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: sofiShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: sofiLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 10.5,
                stopForAgainstVwapLimitOrMarketEntry: 10.4,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: sofiLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'PLTR',
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
        symbol: 'XPEV',
        vwapCorrection: { volumeSum: 3373007, tradingSum: 76120731 },
        dailyRange: 1.49,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [21.83] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 22,
                stopForAgainstVwapLimitOrMarketEntry: 22.5,
                requireReversal: true,
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