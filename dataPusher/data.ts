import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA'];

const tslaTarget: TradingPlans.ExitTargets = {
    priceLevels: [252.98, 253.15],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [3, 3.5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [271.71],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [3, 3.5],
    pinnedPrices: [],
}
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 2776512, tradingSum: 698693208 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [257.31] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: tslaTarget,
                planConfigs: Constants.scalpConfig,
                lastDefense: 251.31,
                stopForAgainstVwapLimitOrMarketEntry: 250.33,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1244025, tradingSum: 539935557 },
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
                lastDefense: 436.57,
                stopForAgainstVwapLimitOrMarketEntry: 436.57,
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
        vwapCorrection: { volumeSum: 1175722, tradingSum: 427131094 },
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
                lastDefense: 364.61,
                stopForAgainstVwapLimitOrMarketEntry: 364.61,
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