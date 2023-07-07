import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA', 'BABA'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [284],
    rrr: [0.5, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [270, 267],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [10],
    pinnedPrices: [],
};
const babaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [87.9],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [2],
    pinnedPrices: [],
}
const babaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [85.5],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [2],
    pinnedPrices: [],
};
const futuresTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.8, 1, 2],
    dailyRanges: [],
    pinnedPrices: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1735892, tradingSum: 481617968 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [280] },
        long: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.scalpConfig,
                targets: tslaLongTarget,
                requireReversal: false,
                lastDefense: 277,
                stopForAgainstVwapLimitOrMarketEntry: 276,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        short: {
        }
    },
    {
        symbol: 'BABA',
        vwapCorrection: { volumeSum: 711406, tradingSum: 61550517 },
        dailyRange: 2.5,
        deferTradingInSeconds: 61,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [85.92] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: babaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
];