import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'DKS'
];

const dksLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [122.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    minimumTargets: {}
};

const dksShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [110.5],
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
        symbol: 'DKS',
        vwapCorrection: { volumeSum: 709804, tradingSum: 84307750 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 120.01,
            momentumStartForShort: 119.99,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 120,
                stopForAgainstVwapLimitOrMarketEntry: 121.17,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 1408929, tradingSum: 501720284 },
        dailyRange: 2.8,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 355.2,
            momentumStartForShort: 356.3,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 356.5,
                stopForAgainstVwapLimitOrMarketEntry: 356.5,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 356,
                stopForAgainstVwapLimitOrMarketEntry: 355.7,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1193168, tradingSum: 255860487 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [100],
            momentumStartForLong: 214.2,
            momentumStartForShort: 214.4,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: dksShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 214.25,
                stopForAgainstVwapLimitOrMarketEntry: 214.2,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: dksLongTarget,
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