import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['PLTR', 'INTC', 'XPEV'];

const intcLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [1, 1, 1.8, 1.9, 2, 3,],
    dailyRanges: [5],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 0.1,
    }
};

const intcShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [1, 1, 1, 1.5, 2],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 0.5,
    }
};


const babaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 0.85, 0.9, 1, 1.5, 2],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 1,
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
        symbol: 'INTC',
        vwapCorrection: { volumeSum: 1193181, tradingSum: 43890807 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        fixQuantity: 800,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [37.62] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: intcShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 328,
                stopForAgainstVwapLimitOrMarketEntry: 328,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: intcShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: intcLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 555834, tradingSum: 54700210 },
        dailyRange: 3,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [97.99] },
        short: {},
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'PLTR',
        vwapCorrection: { volumeSum: 2215499, tradingSum: 37536984 },
        dailyRange: 0.9,
        deferTradingInSeconds: 0,
        fixQuantity: 400,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [17.19] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 17,
                stopForAgainstVwapLimitOrMarketEntry: 16.95,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
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