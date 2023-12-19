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
const costConfig: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const runConfig: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const runFastConfig: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    requireReversal: false,
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
const tslaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: false,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
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
const nioShortTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 2, 2, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
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
    'RUN', 'AFRM', 'TSLA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RUN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 287033, tradingSum: 5427281 },
        atr: {
            average: 1,
            mutiplier: 1.5,
            minimumMultipler: 0.9,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 18.95,
            momentumStartForShort: 1,
        },
        short: {
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: runConfig },
            momentum: { targets: bigTarget, planConfigs: runConfig },
            levelBreakout: { entryPrice: 19.17, targets: bigTarget, planConfigs: runFastConfig },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 403046, tradingSum: 101982306 },
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.4,
        },
        deferTradingInSeconds: 60,
        keyLevels: {
            momentumStartForLong: 252.75,
            momentumStartForShort: 1,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 253.72, targets: bigTarget, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'AFRM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 63599, tradingSum: 2803269 },
        atr: {
            average: 3,
            mutiplier: 1.2,
            minimumMultipler: 0.8,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 45,
            momentumStartForShort: 1,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 46.59, targets: bigTarget, planConfigs: rangeScalpConfigs },
            openingDrive: { targets: bigTarget, planConfigs: rangeScalpConfigs },
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
];