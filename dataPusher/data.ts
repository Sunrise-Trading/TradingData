import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const pyplConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 60,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const admConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const smciConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.05,
    deferTradingInSeconds: 120,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
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
    'PYPL',
    'ADM',
    'SMCI',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PYPL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 437457, tradingSum: 29717427 },
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 68.5,
            momentumStartForShort: 66.5,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: pyplConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: pyplConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: pyplConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: pyplConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'ADM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 949929, tradingSum: 55498059 },
        atr: {
            average: 1.2,
            mutiplier: 2.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 56.6,
            momentumStartForShort: 60,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: admConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: admConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: admConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: admConfigs },
        },
        long: {

        },
    },
    {
        symbol: 'SMCI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 371568, tradingSum: 166538708 },
        atr: {
            average: 25,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 445,
            momentumStartForShort: 460,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: smciConfigs },
        },
        long: {
            //redtoGreenPlan: { targets: R2Target, planConfigs: smciConfigs },
        },
    },
    {
        symbol: 'stock4',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 2.13,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {

        },
    },
];