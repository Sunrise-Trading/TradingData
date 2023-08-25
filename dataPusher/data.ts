import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'NVDA',
    //'FL',
];

const nvdaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [475],
    rrr: [0.8, 1, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: {}
};
const qqqLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [363],
    rrr: [0.8, 1, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: {}
};
const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [232.25],
    rrr: [0.8, 1, 1.8, 1.9, 1.95],
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
        vwapCorrection: { volumeSum: 630386, tradingSum: 297226429 },
        dailyRange: 18,
        deferTradingInSeconds: 0,
        fixQuantity: 30,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 468.8,
            momentumStartForShort: 468.7,
        },
        short: {},
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nvdaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: nvdaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 505,
                stopForAgainstVwapLimitOrMarketEntry: 504.5,
            },
        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 728715, tradingSum: 263549071 },
        dailyRange: 3.2,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [512.48, 499.5],
            momentumStartForLong: 361.4,
            momentumStartForShort: 360.99,
        },
        short: {},
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqLongTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: qqqLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 505,
                stopForAgainstVwapLimitOrMarketEntry: 504.5,
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 510698, tradingSum: 117339638 },
        dailyRange: 6,
        deferTradingInSeconds: 0,
        fixQuantity: 60,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 230,
            momentumStartForShort: 228,
        },
        short: {},
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 230,
                stopForAgainstVwapLimitOrMarketEntry: 229,
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