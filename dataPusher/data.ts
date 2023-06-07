import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA'];
const tslaTarget = {
    priceLevels: [225.66],
    rrr: [0.85, 1, 1.1],
    dailyRanges: [2, 2.5, 3],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1961855, tradingSum: 446340362 },
        dailyRange: 8,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [227.1, 225.5] },
        short: {
            openingDrive: {
                targets: tslaTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 228.45,
                stopForAgainstVwapEntry: 228.9,
            },
            momentum: {
                targets: tslaTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        long: {

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
                stopForAgainstVwapEntry: 36.92,
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