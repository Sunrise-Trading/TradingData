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
    allowEarlyExits: true,
};
const mrnaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
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
    'MRNA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MRNA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 713901, tradingSum: 62159478 },
        atr: {
            average: 3.8,
            mutiplier: 1.8,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 85,
            momentumStartForShort: 88.77,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: mrnaConfigs },
            levelBreakout: { entryPrice: 86.4, targets: bigTarget, planConfigs: mrnaConfigs },
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: mrnaConfigs },
            momentum: { targets: bigTarget, planConfigs: mrnaConfigs },
            levelBreakout: { entryPrice: 88.8, targets: bigTarget, planConfigs: mrnaConfigs },
        },
    },
    {
        symbol: 'OXY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 346948, tradingSum: 20284391 },
        atr: {
            average: 1.2,
            mutiplier: 1.4,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 58.4,
            momentumStartForShort: 58.5,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
];