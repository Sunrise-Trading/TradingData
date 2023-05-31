import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA', 'AI', 'NVDA'];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 632626, tradingSum: 126012945 },
        dailyRange: 6,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [200] },
        short: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
                lastDefense: 199.8,
                stopForAgainstVwapEntry: 200.5,
            }
        },
        long: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
                lastDefense: 199,
                stopForAgainstVwapEntry: 198.8,
            }
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 450291, tradingSum: 177636481 },
        dailyRange: 10,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [395] },
        long: {
            retracement: {
                entryAreas: [
                    {
                        priceArea: { priceLevel: 40, upperRoom: 0.3, lowerRoom: 0.3 },
                        stopPrice: 39.5,
                        targets: Constants.presetTargets.breakeven,
                        setupQuality: TradingPlans.SetupQuality.DayTrade,
                    },
                ],
                lastDefense: 39.9,
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
        symbol: 'AI',
        vwapCorrection: { volumeSum: 2356619, tradingSum: 100149904 },
        dailyRange: 3,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [40] },
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
            openingDrive: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
                lastDefense: 42.8,
                stopForAgainstVwapEntry: 43
            },
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