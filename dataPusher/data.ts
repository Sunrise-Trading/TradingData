import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'DKS'
];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [122.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    minimumTargets: {}
};

const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [110.5],
    rrr: [0.9, 1.5, 1.8, 2, 2.5, 3, 3.5],
    dailyRanges: [],
    minimumTargets: {}
};

const flLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [122.5],
    rrr: [0.85, 0.9, 1.5, 1.8, 1.9, 1.95, 2, 2.5, 3],
    dailyRanges: [],
    minimumTargets: {}
};

const flShortTarget: TradingPlans.ExitTargets = {
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
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1407139, tradingSum: 322178130 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 229.55,
            momentumStartForShort: 230,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 230,
                stopForAgainstVwapLimitOrMarketEntry: 230,
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
        symbol: 'FL',
        vwapCorrection: { volumeSum: 2550171, tradingSum: 41604786 },
        dailyRange: 0.9,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [],
            momentumStartForLong: 16.5,
            momentumStartForShort: 16.5,
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: flShortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 16.5,
                stopForAgainstVwapLimitOrMarketEntry: 16.5,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: flShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: flLongTarget,
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