import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['COIN', 'META'];


const coinShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [35.6, 35.26],
    rrr: [0.5, 1, 1.5, 1.8],
    dailyRanges: [3.5],
    pinnedPrices: [],
    minimumTargets: {}
};
const coinLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.8, 1, 1.5, 1.8],
    dailyRanges: [2.5],
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
        symbol: 'COIN',
        vwapCorrection: { volumeSum: 474763, tradingSum: 49921525 },
        dailyRange: 5.2,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [107.75] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: coinLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 105,
                stopForAgainstVwapLimitOrMarketEntry: 104.5,
                requireReversal: true,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: coinLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: coinShortTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 106.8,
                stopForAgainstVwapLimitOrMarketEntry: 108,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: coinShortTarget,
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