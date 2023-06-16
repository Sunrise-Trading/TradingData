import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['NVDA', 'SPCE', 'TSLA'];

const pltrTarget = {
    priceLevels: [17, 16.5],
    rrr: [1, 1.1, 1.9, 2, 2.1],
    dailyRanges: [0.5,],
}
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SPCE',
        vwapCorrection: { volumeSum: 7138549, tradingSum: 41207029 },
        dailyRange: 0.5,
        fixQuantity: 1000,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [6] },
        short: {},
        long: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
            openingDrive: {
                targets: pltrTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 5.7,
                stopForAgainstVwapLimitOrMarketEntry: 5.5,
            },
        }
    },
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1116397, tradingSum: 287329022 },
        dailyRange: 8,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [258.95] },
        short: {
            pinnedTargets: [],
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
            openingDrive: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 259,
                stopForAgainstVwapLimitOrMarketEntry: 259,
            },
        },
        long: {
            pinnedTargets: [],
            openingDrive: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 257,
                stopForAgainstVwapLimitOrMarketEntry: 256.5,
            },
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 628500, tradingSum: 271324715 },
        dailyRange: 15,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [432.89, 434] },
        long: {
            pinnedTargets: [],
            openingDrive: {
                targets: Constants.presetTargets.r2,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 431,
                stopForAgainstVwapLimitOrMarketEntry: 429,
            },
            momentum: {
                targets: Constants.presetTargets.r2,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        },
        short: {
        }
    },
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 752021, tradingSum: 94118349 },
        dailyRange: 5,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [123.81] },
        long: {
        },
        short: {
            momentum: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1934664, tradingSum: 841073332 },
        dailyRange: 4,
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
        vwapCorrection: { volumeSum: 2386242, tradingSum: 864830521 },
        dailyRange: 5,
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