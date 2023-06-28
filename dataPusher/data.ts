import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['NVDA', 'TSLA'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [245.46],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [240.89, 240.3],
    rrr: [0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
};
const nvdaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [409.78],
    rrr: [0.9, 1.5, 1.75],
    dailyRanges: [7],
    pinnedPrices: [],
};
const nvdaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [400, 397.55],
    rrr: [0.5, 0.85, 1,],
    dailyRanges: [4, 5],
    pinnedPrices: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1185005, tradingSum: 297369972 },
        dailyRange: 10,
        deferTradingInSeconds: 301,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250.39] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 1314777, tradingSum: 530301458 },
        dailyRange: 15,
        deferTradingInSeconds: 0,
        fixQuantity: 30,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [419.4] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: nvdaLongTarget,
                planConfigs: Constants.dayTradeConfig,
                lastDefense: 402.58,
                stopForAgainstVwapLimitOrMarketEntry: 402.58,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nvdaLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: nvdaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
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
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
                lastDefense: 436.57,
                stopForAgainstVwapLimitOrMarketEntry: 436.57,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
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
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
                lastDefense: 364.61,
                stopForAgainstVwapLimitOrMarketEntry: 364.61,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
            }
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: Constants.presetTargets.breakeven,
                planConfigs: Constants.scalpConfig,
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
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
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
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
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
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                targets: Constants.emptyTarget,
                planConfigs: Constants.scalpConfig,
            }
        },
    }
];