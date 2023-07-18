import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['PLTR', 'BAC'];


const pltrLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1.5, 1.8],
    dailyRanges: [0.5, 1],
    pinnedPrices: [],
    minimumTargets: {}
};
const bacLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 1, 1.5, 1.8],
    dailyRanges: [0.5],
    pinnedPrices: [],
    minimumTargets: {}
};
const pltrShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.9, 1, 1],
    dailyRanges: [0.5],
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
        symbol: 'BAC',
        vwapCorrection: { volumeSum: 2672356, tradingSum: 78482799 },
        dailyRange: 0.65,
        deferTradingInSeconds: 0,
        fixQuantity: 700,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [30.1, 30.28] },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: bacLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {
        }
    },
    {
        symbol: 'PLTR',
        vwapCorrection: { volumeSum: 1786905, tradingSum: 32053493 },
        dailyRange: 0.87,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [17.59] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 17.82,
                stopForAgainstVwapLimitOrMarketEntry: 17.81,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pltrLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {

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