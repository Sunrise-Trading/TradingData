import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['NVDA', 'AMD'];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 1871147, tradingSum: 221047402 },
        dailyRange: 5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [120] },
        short: {
            openingDrive: {
                lastDefense: 118.2,
                stopForAgainstVwapEntry: 118.6,
                targets: Constants.presetTargets.r2,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
        },
        long: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 5159065, tradingSum: 2019735158 },
        dailyRange: 15,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [400, 390, 395] },
        long: {
            openingDrive: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
                lastDefense: 390,
                stopForAgainstVwapEntry: 388,
            },
            momentum: {
                targets: Constants.presetTargets.doubleTop,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
            retracement: {
                entryAreas: [
                    {
                        priceArea: {
                            priceLevel: 390,
                            upperRoom: 1,
                            lowerRoom: 1,
                        },
                        targets: Constants.presetTargets.breakeven,
                        stopPrice: 388,
                        setupQuality: TradingPlans.SetupQuality.DayTrade,
                    },
                ],
                lastDefense: 389,
            },
        },
        short: {
            openingDrive: {
                lastDefense: 393,
                stopForAgainstVwapEntry: 394,
                targets: Constants.presetTargets.r2,
                setupQuality: TradingPlans.SetupQuality.DayTrade,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
        },
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1037874, tradingSum: 428533534 },
        dailyRange: 4,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [66.43, 65.08] },
        long: {
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            }
        },
        short: {
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            }

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
        symbol: 'USM23',
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