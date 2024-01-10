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
    equalWeightDivider: 11,
    deferTradingInSeconds: 120,
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
    'CHWY', 'AMZN'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CHWY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 967930, tradingSum: 19319708 },
        atr: {
            average: 1.2,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 20.2,
            momentumStartForShort: 20.2,
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
        symbol: 'AEHR',
        autoFlip: false,
        vwapCorrection: { volumeSum: 315914, tradingSum: 5822251 },
        atr: {
            average: 1.7,
            mutiplier: 1.3,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 19,
            momentumStartForShort: 19,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: scalpConfigs },
            momentum: { targets: R2Target, planConfigs: scalpConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: scalpConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 301910, tradingSum: 71136786 },
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 235,
            momentumStartForShort: 235,
        },
        short: {
        },
        long: {
            momentum: { targets: R2Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'AMZN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 124795, tradingSum: 18960296 },
        atr: {
            average: 3,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 151.5,
            momentumStartForShort: 151.5,
        },
        short: {
        },
        long: {
            momentum: { targets: R2Target, planConfigs: scalpConfigs },
            levelBreakout: { entryPrice: 152.23, targets: R2Target, planConfigs: scalpConfigs },
        },
    }
];