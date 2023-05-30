import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA', 'NVDA', 'AI'];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 2529437, tradingSum: 506005297 },
        dailyRange: 7,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [200] },
        short: {
        },
        long: {
            momentum: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
            },
            openingDrive: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
                lastDefense: 199.5,
                stopForAgainstVwapEntry: 199,
            }
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 1417822, tradingSum: 574690162 },
        dailyRange: 10,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [400] },
        long: {
            momentum: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
            },
            openingDrive: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
                lastDefense: 403,
                stopForAgainstVwapEntry: 401,
            }
        },
        short: {

        },
    },
    {
        symbol: 'AI',
        vwapCorrection: { volumeSum: 2125902, tradingSum: 77284146 },
        dailyRange: 3,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [34.68] },
        long: {
            openingDrive: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
                lastDefense: 36,
                stopForAgainstVwapEntry: 35.5
            },
            momentum: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
            }
        },
        short: {

        },
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 869619, tradingSum: 288766437 },
        dailyRange: 4,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [309.16] },
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
        symbol: 'MESM23',
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
        symbol: 'MNQM23',
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
        symbol: 'USU23',
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