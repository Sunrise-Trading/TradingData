import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA', 'RIVN'];


const rivnLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [24.54],
    rrr: [0.5, 1, 1.5, 1.8],
    dailyRanges: [0.5, 1],
    pinnedPrices: [],
    minimumTargets: {}
};
const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.9, 1, 1.5, 1.8],
    dailyRanges: [4.5],
    pinnedPrices: [],
    minimumTargets: {
        price: 290
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
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1519800, tradingSum: 435816187 },
        dailyRange: 9.95,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [285.3] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.holdToDayCloseConfig,
                lastDefense: 286.35,
                stopForAgainstVwapLimitOrMarketEntry: 286.35,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.holdToDayCloseConfig,
            },
        },
        short: {
        }
    },
    {
        symbol: 'RIVN',
        vwapCorrection: { volumeSum: 1753608, tradingSum: 42033119 },
        dailyRange: 1.57,
        deferTradingInSeconds: 61,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [24.54] },
        short: {

        },
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