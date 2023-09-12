import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = [
    'TSLA',
];

const atr = [0.4, 0.45, 0.5, 0.55, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9];
const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: Constants.baseHitTargets.rrr,
    dailyRanges: atr,
    minimumTargets: {
        ...Constants.baseHitTargets,
        dailyRanges: atr,
    }
};

const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    dailyRanges: Constants.baseHitTargets.dailyRanges,
    minimumTargets: {
        ...Constants.baseHitTargets,
        rrr: [0.8, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    }
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 3387236, tradingSum: 891982710 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: {
            otherLevels: [266.35],
            momentumStartForLong: 262.6,
            momentumStartForShort: 262.48,
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitTargets,
                planConfigs: Constants.scalpConfig,
            },

        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitTargets,
                planConfigs: Constants.scalpConfig,
                stopForAgainstVwapLimitOrMarketEntry: 262.5,
                lastDefense: 262.5
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.baseHitTargets,
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