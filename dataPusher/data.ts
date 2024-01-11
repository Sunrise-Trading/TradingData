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
    deferTradingInSeconds: 120,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 11,
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
    'COIN', 'MARA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 919330, tradingSum: 144926865 },
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 155,
            momentumStartForShort: 161,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
    },
    {
        symbol: 'MARA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3847553, tradingSum: 103976607 },
        atr: {
            average: 3,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 19,
            momentumStartForShort: 27.7,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1557392, tradingSum: 362943959 },
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 230,
            momentumStartForShort: 235,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: tslaConfigs },
            momentum: { targets: R2Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: tslaConfigs },
        },
        long: {

        },
    },
];