import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA', 'RIVN'];

const rivnLongTarget: TradingPlans.ExitTargets = {
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
        vwapCorrection: { volumeSum: 1773599, tradingSum: 472691096 },
        dailyRange: 11,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [265] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 265,
                stopForAgainstVwapLimitOrMarketEntry: 264,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 852378, tradingSum: 322838537 },
        dailyRange: 5.2,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [380] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        }
    },
    {
        symbol: 'RIVN',
        vwapCorrection: { volumeSum: 1003363, tradingSum: 26377704 },
        dailyRange: 1.6,
        deferTradingInSeconds: 120,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [26.14] },
        short: {},
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: rivnLongTarget,
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