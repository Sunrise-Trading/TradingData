import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const amdConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: true,
};
const msftConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: true,
};
const gsConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: true,
};
const aaplConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
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
    'AMD',
    'MSFT',
    'GS',
    'AAPL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 721058, tradingSum: 107418496 },
        atr: {
            average: 4.8,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 148,
            momentumStartForShort: 150,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: amdConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: amdConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: amdConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: amdConfigs },
        },
    },
    {
        symbol: 'MSFT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 231901, tradingSum: 90845927 },
        atr: {
            average: 5.9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 390,
            momentumStartForShort: 393,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: msftConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: msftConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: msftConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: msftConfigs },
        },
    },
    {
        symbol: 'GS',
        autoFlip: false,
        vwapCorrection: { volumeSum: 45019, tradingSum: 17140761 },
        atr: {
            average: 6.8,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: gsConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: msftConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: msftConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: msftConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'AAPL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 402424, tradingSum: 73596637 },
        atr: {
            average: 2.9,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 183,
            momentumStartForShort: 183,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: aaplConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: aaplConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: aaplConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: aaplConfigs },
        },
        long: {
        },
    },
];