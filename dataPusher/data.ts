import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['SPY', 'QQQ'];

const tslaTarget = {
    priceLevels: [252.98, 253.15],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [3, 3.5],
}
const tslaShortTarget = {
    priceLevels: [271.71],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [3, 3.5],
}
const spceTarget = {
    priceLevels: [4.8, 4.95],
    rrr: [0.5, 0.9, 1, 1.1],
    dailyRanges: [0.25, 0.3, 0.4],
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
                targets: tslaShortTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        long: {
            pinnedTargets: [],
            openingDrive: {
                targets: tslaTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 251.31,
                stopForAgainstVwapLimitOrMarketEntry: 250.33,
            },
            momentum: {
                targets: tslaTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'SPCE',
        vwapCorrection: { volumeSum: 2296028, tradingSum: 10604452 },
        dailyRange: 0.5,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [5.06] },
        long: {
            openingDrive: {
                targets: spceTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 4.56,
                stopForAgainstVwapLimitOrMarketEntry: 4.55,
            },
            momentum: {
                targets: spceTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        short: {
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
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            }
        },
        short: {
            pinnedTargets: [],
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 436.57,
                stopForAgainstVwapLimitOrMarketEntry: 436.57,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.Scalp,
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
            pinnedTargets: [],
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
                lastDefense: 364.61,
                stopForAgainstVwapLimitOrMarketEntry: 364.61,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            }
        },
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
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
            pinnedTargets: [],
            newsBreakout: {
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
            }
        },
        short: {
            pinnedTargets: [],
            newsBreakout: {
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
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
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
            }
        },
        short: {
            newsBreakout: {
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
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
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
            }
        },
        short: {
            newsBreakout: {
                targets: Constants.emptyTarget,
                setupQuality: Constants.scalp,
            }
        },
    }
];