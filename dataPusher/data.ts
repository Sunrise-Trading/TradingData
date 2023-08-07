import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [256],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [256],
    minimumTargets: {}
};

const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [245.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [245.5],
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
        symbol: 'VTGN',
        vwapCorrection: { volumeSum: 1, tradingSum: 1 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [30],
            momentumStartForLong: 10,
            momentumStartForShort: 19.99,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 141,
                stopForAgainstVwapLimitOrMarketEntry: 141.6,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 140,
                stopForAgainstVwapLimitOrMarketEntry: 139.8,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 393961, tradingSum: 100542098 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [250.49],
            momentumStartForLong: 255.68,
            momentumStartForShort: 255.32,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 255,
                stopForAgainstVwapLimitOrMarketEntry: 255.7,
                requireReversal: false,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
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
            momentumStartForLong: 0,
            momentumStartForShort: 0,
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