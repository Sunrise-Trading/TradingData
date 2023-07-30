import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['PLTR', 'INTC', 'XPEV'];

const intcLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [5],
    pinnedPrices: [],
    minimumTargets: {}
};

const intcShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
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