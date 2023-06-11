import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA'];
const tslaTarget = {
    priceLevels: [244.5],
    rrr: [0.85, 1, 1.1, 1.9, 2, 2.1],
    dailyRanges: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 4236557, tradingSum: 1054496930 },
        dailyRange: 8,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250, 246] },
        short: {
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
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'U',
        vwapCorrection: { volumeSum: 987063, tradingSum: 37181035 },
        dailyRange: 3,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [36.92, 38.47] },
        long: {
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
                lastDefense: 37,
                stopForAgainstVwapLimitOrMarketEntry: 36.92,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            }
        },
        short: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            }
        },
    },
    {
        symbol: 'GTLB',
        vwapCorrection: { volumeSum: 272418, tradingSum: 12379485 },
        dailyRange: 2,
        fixQuantity: 300,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [46.79] },
        long: {
        },
        short: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            }
        },
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1076660, tradingSum: 450628630 },
        dailyRange: 5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [417.78] },
        long: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            }
        },
        short: {
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
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            }
        },
        long: {
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