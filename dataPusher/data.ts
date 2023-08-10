import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['BABA'];

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

const pennLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [29.9, 30.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [29.9, 30.5],
    minimumTargets: {}
};

const pennShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [27.37],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    pinnedPrices: [27.37],
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
        vwapCorrection: { volumeSum: 1559896, tradingSum: 54690886 },
        dailyRange: 2.5,
        deferTradingInSeconds: 0,
        fixQuantity: 250,
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
        symbol: 'PENN',
        vwapCorrection: { volumeSum: 2160450, tradingSum: 62384991 },
        dailyRange: 1.2,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [33.45],
            momentumStartForLong: 29,
            momentumStartForShort: 28.9,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pennShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: pennLongTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 29,
                stopForAgainstVwapLimitOrMarketEntry: 28.9,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: pennLongTarget,
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