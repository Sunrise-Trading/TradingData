import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "futures";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'PDD',
];

const longTarget: TradingPlans.ExitTargets = {
    priceLevels: [91.96, 94.5],
    rrr: [0.5, 0.8, 1, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: {
        rrr: [0.8, 0.8, 1, 1, 1.5, 1.8, 2, 2, 3, 3.5],
        priceLevels: [],
        dailyRanges: [],
    }
};
const shortTarget: TradingPlans.ExitTargets = {
    priceLevels: [88.35, 87.8],
    rrr: [0.8, 1.2, 1.8, 1.9, 1.95],
    dailyRanges: [],
    minimumTargets: {
        rrr: [0.8, 0.8, 1, 1, 1.5, 1.8, 2, 2, 3, 3.5],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 87.2],
        dailyRanges: [],
    }
};


const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    minimumTargets: {
        rrr: [],
        priceLevels: [],
        dailyRanges: [],
    }
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PDD',
        vwapCorrection: { volumeSum: 1991760, tradingSum: 179958728 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [89.88],
            momentumStartForLong: 90,
            momentumStartForShort: 92,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: shortTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 92,
                stopForAgainstVwapLimitOrMarketEntry: 92.44,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: longTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: longTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 90,
                stopForAgainstVwapLimitOrMarketEntry: 89.87,
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