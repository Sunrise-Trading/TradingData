import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "futures";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['AMD', 'PLTR', 'ORCL'];
const tslaTarget = {
    priceLevels: [244.5],
    rrr: [0.85, 1, 1.1, 1.9, 2, 2.1],
    dailyRanges: [],
};
const amdTarget = {
    priceLevels: [130.32, 132],
    rrr: [1, 1.1, 1.9, 2, 2.1],
    dailyRanges: [1.8, 2, 2.1],
}
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 754518, tradingSum: 97074945 },
        dailyRange: 4,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [129.2] },
        short: {
            pinnedTargets: [],
        },
        long: {
            pinnedTargets: [130.32, 132],
            openingDrive: {
                targets: amdTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 128.5,
                stopForAgainstVwapLimitOrMarketEntry: 128.4,
            },
            momentum: {
                targets: amdTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'PLTR',
        vwapCorrection: { volumeSum: 1498908, tradingSum: 23015939 },
        dailyRange: 1,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250, 246] },
        short: {
            pinnedTargets: [],
        },
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'ORCL',
        vwapCorrection: { volumeSum: 195980, tradingSum: 22377885 },
        dailyRange: 1,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250, 246] },
        short: {
            pinnedTargets: [],
            openingDrive: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 114,
                stopForAgainstVwapLimitOrMarketEntry: 114.5,
            },
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        long: {
            pinnedTargets: [],
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 4236557, tradingSum: 1054496930 },
        dailyRange: 8,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250, 246] },
        short: {
            pinnedTargets: [],
            openingDrive: {
                targets: tslaTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 228.45,
                stopForAgainstVwapLimitOrMarketEntry: 228.9,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1076660, tradingSum: 450628630 },
        dailyRange: 5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [417.78] },
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            }
        },
        short: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
        },
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 800327, tradingSum: 278339896 },
        dailyRange: 4,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [348.3] },
        short: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            }
        },
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            }
        },
    },
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
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