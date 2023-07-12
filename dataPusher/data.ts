import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['PLTR', 'LCID'];

const pltrLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.8, 1, 1.5, 1.8],
    dailyRanges: [0.5],
    pinnedPrices: [],
};
const lcidShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.8, 1, 1.5, 1.8],
    dailyRanges: [0.25],
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
        symbol: 'PLTR',
        vwapCorrection: { volumeSum: 1527134, tradingSum: 25656252 },
        dailyRange: 0.88,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [16.7, 17.16] },
        short: {},
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 16.8,
                stopForAgainstVwapLimitOrMarketEntry: 16.78,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },

        }
    },
    {
        symbol: 'LCID',
        vwapCorrection: { volumeSum: 1846673, tradingSum: 15268831 },
        dailyRange: 0.5,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [8] },
        long: {},
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: lcidShortTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 8,
                stopForAgainstVwapLimitOrMarketEntry: 8.1,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
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