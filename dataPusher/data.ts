import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['BABA', 'QQQ'];

const babaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [99.89],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [99.89],
    minimumTargets: {}
};

const babaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [96.4],
    rrr: [0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [96.4],
    minimumTargets: {}
};

const qqqLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [372.25],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [372.25],
    minimumTargets: {}
};

const qqqShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [369.77],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [369.77],
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
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 2742268, tradingSum: 269515651 },
        dailyRange: 3,
        deferTradingInSeconds: 0,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [100],
            momentumStartForLong: 98,
            momentumStartForShort: 97.5,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: babaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 98.5,
                stopForAgainstVwapLimitOrMarketEntry: 98.5,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 98,
                stopForAgainstVwapLimitOrMarketEntry: 98,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 2666908, tradingSum: 989265529 },
        dailyRange: 5.4,
        deferTradingInSeconds: 0,
        fixQuantity: 150,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [252.47],
            momentumStartForLong: 371,
            momentumStartForShort: 370.5,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqLongTarget,
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