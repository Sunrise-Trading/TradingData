import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const vwapTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const rblxConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const rblxEarlyConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const rangeScalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};

const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
    }
};
const scaledOutAtrTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.5, 0.5, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1.0],
    }
};
export const stockSelections: string[] = [
    'SPY'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'LULU',
        autoFlip: false,
        vwapCorrection: { volumeSum: 21588, tradingSum: 9807954 },
        atr: {
            average: 9,
            mutiplier: 1.5,
            minimumMultipler: 1.3,
        },
        deferTradingInSeconds: 180,
        keyLevels: {
            momentumStartForLong: 458,
            momentumStartForShort: 452.23,
        },
        short: {
            levelBreakout: { entryPrice: 4449, targets: bigTarget, planConfigs: vwapTrendConfigs },
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {


        },
    },
    {
        symbol: 'RBLX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 466407, tradingSum: 19339261 },
        atr: {
            average: 1.48,
            mutiplier: 1.4,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 41.5,
            momentumStartForShort: 41.25,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 42.14, targets: bigTarget, planConfigs: rblxConfigs },
            openingDrive: { targets: bigTarget, planConfigs: rblxEarlyConfigs },
            momentum: { targets: bigTarget, planConfigs: rblxConfigs },
        },
    },
    {
        symbol: 'SPY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1678745, tradingSum: 767447818 },
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        deferTradingInSeconds: 1740,
        keyLevels: {
            momentumStartForLong: 458,
            momentumStartForShort: 456,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
];