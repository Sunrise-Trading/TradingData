import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['MSFT', 'AMD'];


const msftLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1.5, 1.8],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const msftShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    dailyRanges: [],
    pinnedPrices: [],
    minimumTargets: {}
};
const amdLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [1, 1.5, 1.8],
    dailyRanges: [3, 4],
    pinnedPrices: [],
    minimumTargets: {
        rrr: 1.5
    }
};
const cvnaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.9, 1, 1],
    dailyRanges: [3, 3.5],
    pinnedPrices: [],
    minimumTargets: {}
};
const cvnaLongTarget: TradingPlans.ExitTargets = {
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
        symbol: 'MSFT',
        vwapCorrection: { volumeSum: 216580, tradingSum: 78307491 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [362.9] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: msftLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 360,
                stopForAgainstVwapLimitOrMarketEntry: 360,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: msftLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: msftShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        }
    },
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 552713, tradingSum: 66185037 },
        dailyRange: 4.4,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [122.12] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: amdLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 120,
                stopForAgainstVwapLimitOrMarketEntry: 119.5,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: amdLongTarget,
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