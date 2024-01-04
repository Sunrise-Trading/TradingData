import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const vwapTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const todayConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
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
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 2],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
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

const tslaTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.2, 1.3, 1.5, 1.8, 1.8, 1.8, 1.8, 2],
        dailyRanges: [0.5, 0.5, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1.0],
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
    'MBLY', 'WBA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MBLY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1602402, tradingSum: 46548365 },
        atr: {
            average: 1.5,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 26.95,
            momentumStartForShort: 29,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: tslaTargets, planConfigs: scalConfigs },
        },
        long: {
            falseBreakoutPlan: { targets: R2Target, planConfigs: scalConfigs },
            momentum: { targets: tslaTargets, planConfigs: scalConfigs },
        },
    },
    {
        symbol: 'WBA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 786117, tradingSum: 20274303 },
        atr: {
            average: 0.85,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 24,
            momentumStartForShort: 25.75,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: todayConfigs },
            momentum: { targets: tslaTargets, planConfigs: scalConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: todayConfigs },
        },
        long: {
        },
    }
];