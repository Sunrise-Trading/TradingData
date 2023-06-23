import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA'];

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
const fdxTarget = {
    priceLevels: [220.2, 220.1],
    rrr: [0.9, 1, 1.1],
    dailyRanges: [4, 4.5],
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
        symbol: 'FDX',
        vwapCorrection: { volumeSum: 83507, tradingSum: 18788050 },
        dailyRange: 5,
        deferTradingInSeconds: 300,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [220] },
        long: {
        },
        short: {
            pinnedTargets: [],
            momentum: {
                targets: fdxTarget,
                setupQuality: TradingPlans.SetupQuality.Scalp,
            },
        }
    },
    {
        symbol: 'SPCE',
        vwapCorrection: { volumeSum: 2480956, tradingSum: 14621851 },
        dailyRange: 0.8,
        deferTradingInSeconds: 0,
        fixQuantity: 1000,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [6.06] },
        short: {
        },
        long: {
            openingDrive: {
                targets: Constants.presetTargets.scalp,
                setupQuality: TradingPlans.SetupQuality.Scalp,
                lastDefense: 5.80,
                stopForAgainstVwapLimitOrMarketEntry: 5.8,
            },
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
        vwapCorrection: { volumeSum: 2386242, tradingSum: 864830521 },
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