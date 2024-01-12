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
const tslaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
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
    'JPM',
    'DAL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'JPM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 450130, tradingSum: 78033338 },
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
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
            levelBreakout: { entryPrice: 174.75, targets: R2Target, planConfigs: todayConfigs },
        },
    },
    {
        symbol: 'DAL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 621372, tradingSum: 24881847 },
        atr: {
            average: 1,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 40,
            momentumStartForShort: 40,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1694110, tradingSum: 373698444 },
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 220,
            momentumStartForShort: 225,
        },
        short: {
            rangePlan: { targets: R2Target, planConfigs: tslaConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: tslaConfigs },

        },
        long: {
            rangePlan: { targets: R2Target, planConfigs: tslaConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'NFLX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 66586, tradingSum: 32461287 },
        atr: {
            average: 11,
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
            redtoGreenPlan: { targets: R2Target, planConfigs: tslaConfigs },
            momentum: { targets: R2Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: tslaConfigs },

        },
    },
];