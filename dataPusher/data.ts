import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'NVDA',
    //'FL',
];

const nvdaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [517],
    rrr: [0.5, 0.8, 0.85, 0.9, 1.5, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: {}
};

const nvdaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [485.5],
    rrr: [0.9, 1.5, 1.8, 2, 2.5, 3, 3.5],
    dailyRanges: [],
    minimumTargets: {}
};

const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    minimumTargets: {}
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 1909442, tradingSum: 966007158 },
        dailyRange: 18,
        deferTradingInSeconds: 0,
        fixQuantity: 30,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [512.48],
            momentumStartForLong: 512.4,
            momentumStartForShort: 510,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: nvdaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 508,
                stopForAgainstVwapLimitOrMarketEntry: 510,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nvdaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nvdaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: nvdaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 505,
                stopForAgainstVwapLimitOrMarketEntry: 504.5,
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
        alwaysUseFixQuantity: false,
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
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 6,
        alwaysUseFixQuantity: false,
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
    }
];