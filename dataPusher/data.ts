import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const vwapTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 10,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const todayConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 7,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};

const scalConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 10,
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
    'BA', 'NVDA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'BA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 949709, tradingSum: 218683010 },
        atr: {
            average: 5.5,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 225,
            momentumStartForShort: 235,
        },
        short: {
            redtoGreenPlan: { targets: R1Target, planConfigs: todayConfigs },
            momentum: { targets: R1Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R1Target, planConfigs: todayConfigs },
        },
        long: {
            // redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R1Target, planConfigs: todayConfigs },
            falseBreakoutPlan: { targets: R1Target, planConfigs: todayConfigs },
            momentum: { targets: R1Target, planConfigs: todayConfigs },
        },
    },
    {
        symbol: 'NVDA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 295050, tradingSum: 145749115 },
        atr: {
            average: 12,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 487,
            momentumStartForShort: 487,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
            falseBreakoutPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
        },
    }
];