import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['BABA', 'CVNA'];

const bbaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [1, 1.5, 1.8],
    dailyRanges: [2, 2.5],
    pinnedPrices: [],
};
const cvnaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [37.95],
    rrr: [0.5, 0.8, 1, 1.5, 1.8],
    dailyRanges: [3.5],
    pinnedPrices: [],
};
const cvnaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [35.6, 35.26],
    rrr: [0.5, 1, 1.5, 1.8],
    dailyRanges: [3.5],
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
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 278028, tradingSum: 26463668 },
        dailyRange: 2.8,
        deferTradingInSeconds: 55,
        fixQuantity: 150,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [95.5] },
        short: {
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: bbaLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 95,
                stopForAgainstVwapLimitOrMarketEntry: 94.7,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: bbaLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        }
    },
    {
        symbol: 'CVNA',
        vwapCorrection: { volumeSum: 1391224, tradingSum: 50818561 },
        dailyRange: 3.8,
        deferTradingInSeconds: 0,
        fixQuantity: 150,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [35.6] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: cvnaShortTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 37,
                stopForAgainstVwapLimitOrMarketEntry: 37,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: cvnaShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: cvnaLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 36.29,
                stopForAgainstVwapLimitOrMarketEntry: 35.91,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: cvnaLongTarget,
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