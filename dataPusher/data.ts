import * as TradingPlans from './models';
import * as Constants from './constants';
export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA', 'PANW', 'SPY', 'QQQ'];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 980072, tradingSum: 179483547 },
        dailyRange: 6,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [183.8] },
        short: {
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
        },
        long: {
            retracement: {
                entryAreas: [
                    {
                        priceArea: {
                            priceLevel: 182,
                            upperRoom: 1,
                            lowerRoom: 0.1
                        },
                        targets: Constants.presetTargets.breakeven,
                        stopPrice: 181.5,
                        setupQuality: Constants.scalp,
                    },
                ],
                lastDefense: 182,
            },
            openingDrive: {
                lastDefense: 182,
                stopForAgainstVwapEntry: 181.5,
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
            momentum: {
                targets: Constants.presetTargets.breakeven,
                setupQuality: Constants.scalp,
            },
        }
    },
    {
        symbol: 'PANW',
        vwapCorrection: { volumeSum: 76093, tradingSum: 15111539 },
        dailyRange: 4,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [200] },
        long: {
        },
        short: {
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: Constants.scalp,
            },
            retracement: {
                entryAreas: [
                    {
                        priceArea: {
                            priceLevel: 200,
                            upperRoom: 0.5,
                            lowerRoom: 0.5
                        },
                        targets: Constants.presetTargets.breakeven,
                        stopPrice: 202,
                        setupQuality: Constants.scalp,
                    },
                ],
                lastDefense: 201,
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