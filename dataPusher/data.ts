import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['SPY', 'QQQ'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [245.46],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [240.89, 240.3],
    rrr: [0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
};
const nvdaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [422],
    rrr: [0.9, 1.5, 1.75],
    dailyRanges: [7],
    pinnedPrices: [422],
};
const nvdaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [400, 397.55],
    rrr: [0.5, 0.85, 1,],
    dailyRanges: [4, 5],
    pinnedPrices: [],
};
const jobyTarget: TradingPlans.ExitTargets = {
    priceLevels: [9.74],
    rrr: [0.5, 0.85, 1,],
    dailyRanges: [1],
    pinnedPrices: [9.74],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1185005, tradingSum: 297369972 },
        dailyRange: 10,
        deferTradingInSeconds: 301,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250.39] },
        short: {
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
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1127989, tradingSum: 496773728 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [435.87] },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
                lastDefense: 441.67,
                stopForAgainstVwapLimitOrMarketEntry: 441.67,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            },
        },
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 1487378, tradingSum: 545385830 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [363.21] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
                lastDefense: 367.83,
                stopForAgainstVwapLimitOrMarketEntry: 367.83,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            }
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            }
        },
    },
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
    },
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
    },
    {
        symbol: 'US',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        fixQuantity: 2,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
    }
];