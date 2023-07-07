import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['SPY', 'QQQ'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [270, 267],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [10],
    pinnedPrices: [],
};
const spyLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [2],
    pinnedPrices: [],
}
const spyShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [438.4],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [2],
    pinnedPrices: [],
};
const qqqLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [367.66],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [2.2],
    pinnedPrices: [],
}
const qqqShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [438.4],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [2.2],
    pinnedPrices: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 3117056, tradingSum: 866445943 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [277, 280] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.holdToDayCloseConfig,
                targets: tslaLongTarget,
                requireReversal: true,
                lastDefense: 278,
                stopForAgainstVwapLimitOrMarketEntry: 278.5,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.holdToDayCloseConfig,
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
        symbol: 'SPY',
        vwapCorrection: { volumeSum: 1679152, tradingSum: 739526744 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [441.18, 438.28] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: spyShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: spyLongTarget,
                planConfigs: Constants.scalpConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.dayTradeConfig,
                targets: spyLongTarget,
                lastDefense: 439.28,
                requireReversal: true,
                stopForAgainstVwapLimitOrMarketEntry: 439.28,
            },
        }
    },
    {
        symbol: 'QQQ',
        vwapCorrection: { volumeSum: 1493851, tradingSum: 548810010 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [367, 365.3] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.scalpConfig,
                targets: qqqLongTarget,
                lastDefense: 365.76,
                requireReversal: true,
                stopForAgainstVwapLimitOrMarketEntry: 365.76,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: qqqLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        }
    }
];