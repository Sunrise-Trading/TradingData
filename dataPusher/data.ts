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
    equalWeightDivider: 8,
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
    'RBLX', 'PFE'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TTWO',
        autoFlip: false,
        vwapCorrection: { volumeSum: 46307, tradingSum: 7515738 },
        atr: {
            average: 3.5,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 102,
            momentumStartForShort: 105.77,
        },
        short: {
            levelBreakout: { entryPrice: 102.9, targets: bigTarget, planConfigs: rangeScalpConfigs },
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
    {
        symbol: 'PFE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 5837202, tradingSum: 155922163 },
        atr: {
            average: 0.65,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 26,
            momentumStartForShort: 27,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 26, targets: bigTarget, planConfigs: rangeScalpConfigs },
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
    {
        symbol: 'RBLX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 103061, tradingSum: 4409268 },
        atr: {
            average: 1.5,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 42.5,
            momentumStartForShort: 42,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 43.3, targets: bigTarget, planConfigs: rblxConfigs },
            openingDrive: { targets: bigTarget, planConfigs: rblxEarlyConfigs },
            momentum: { targets: bigTarget, planConfigs: rblxConfigs },
        },
    }
];