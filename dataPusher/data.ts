import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const amd: TradingPlans.PlanConfigs = {
    sizeOverride: 0.15,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const googl: TradingPlans.PlanConfigs = {
    sizeOverride: 0.15,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const nycb: TradingPlans.PlanConfigs = {
    sizeOverride: 0.15,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const plug: TradingPlans.PlanConfigs = {
    sizeOverride: 0.15,
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
    'GOOGL',
    'NYCB',
    'PLUG',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2172688, tradingSum: 355297148 },
        atr: {
            average: 6.9,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 160,
            momentumStartForShort: 165.5,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: amd },
        },
    },
    {
        symbol: 'GOOGL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 566439, tradingSum: 81097125 },
        atr: {
            average: 2.7,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 140,
            momentumStartForShort: 144,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: googl },
        },
        long: {
        },
    },
    {
        symbol: 'NYCB',
        autoFlip: false,
        vwapCorrection: { volumeSum: 6793523, tradingSum: 50589587 },
        atr: {
            average: 0.27,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 6,
            momentumStartForShort: 8,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: nycb },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: nycb },
        },
    },
    {
        symbol: 'PLUG',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3804894, tradingSum: 15281070 },
        atr: {
            average: 0.39,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 4,
            momentumStartForShort: 4.16,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: plug },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: plug },
        },
    },
];