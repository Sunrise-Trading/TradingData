import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const rumConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const tkoConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 60,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const babaConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const plugConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};

const R2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
const R1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'RUM',
    'TKO',
    'BABA',
    'VZ',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RUM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 6712221, tradingSum: 37953296 },
        atr: {
            average: 1.2,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 5.53,
            momentumStartForShort: 5.53,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: rumConfigs },
        },
    },
    {
        symbol: 'TKO',
        autoFlip: false,
        vwapCorrection: { volumeSum: 607213, tradingSum: 55951282 },
        atr: {
            average: 1.8,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 90,
            momentumStartForShort: 95,
        },
        short: {
            falseBreakoutPlan: { targets: R2Target, planConfigs: tkoConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'BABA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2741474, tradingSum: 197859321 },
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 71.83,
            momentumStartForShort: 73.52,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: babaConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: babaConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: babaConfigs }
        },
    },
    {
        symbol: 'PLUG',
        autoFlip: false,
        vwapCorrection: { volumeSum: 7322000, tradingSum: 24456233 },
        atr: {
            average: 0.36,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 3.28,
            momentumStartForShort: 3.28,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: plugConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: plugConfigs },
        },
    },
    {
        symbol: 'VZ',
        autoFlip: false,
        vwapCorrection: { volumeSum: 954769, tradingSum: 39433833 },
        atr: {
            average: 0.7,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 41.45,
            momentumStartForShort: 41.45,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: plugConfigs },
        },
        long: {
        },
    },
];