import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const rblx: TradingPlans.PlanConfigs = {
    size: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const snap: TradingPlans.PlanConfigs = {
    size: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const baba: TradingPlans.PlanConfigs = {
    size: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const enph: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
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
        rrr: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    minimumTargets: {
        rrr: [0.5, 0.5, 0.5, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'RBLX',
    'SNAP',
    'BABA',
    'ENPH',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RBLX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2351629, tradingSum: 105573375 },
        atr: {
            average: 1.45,
            mutiplier: 2,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 44.5,
            momentumStartForShort: 47.39,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: rblx },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: rblx },
        },
    },
    {
        symbol: 'SNAP',
        autoFlip: false,
        vwapCorrection: { volumeSum: 5057854, tradingSum: 61087567 },
        atr: {
            average: 0.6,
            mutiplier: 2,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 11.73,
            momentumStartForShort: 12.31,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: snap },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: snap },
        },
    },
    {
        symbol: 'BABA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 6563315, tradingSum: 506332375 },
        atr: {
            average: 2.13,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 74.25,
            momentumStartForShort: 82.75,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: baba },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: baba },
        },
    },
    {
        symbol: 'ENPH',
        autoFlip: false,
        vwapCorrection: { volumeSum: 213166, tradingSum: 24836014 },
        atr: {
            average: 6.3,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 113,
            momentumStartForShort: 120,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: enph },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: enph },
        },
    },
];