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
    equalWeightDivider: 8,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
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
const muTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.9, 1, 1],
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
    'DYN', 'SOFI',
    'MARA', 'COIN'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DYN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1582104, tradingSum: 32599878 },
        atr: {
            average: 0.88,
            mutiplier: 3,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 15,
            momentumStartForShort: 21,
        },
        short: {
            redtoGreenPlan: { targets: tslaTargets, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: tslaTargets, planConfigs: todayConfigs },

        },
        long: {
        },
    },
    {
        symbol: 'SOFI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1418421, tradingSum: 12832034 },
        atr: {
            average: 0.45,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 9,
            momentumStartForShort: 9,
        },
        short: {
            redtoGreenPlan: { targets: tslaTargets, planConfigs: todayConfigs },
            momentum: { targets: tslaTargets, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: tslaTargets, planConfigs: todayConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 921107, tradingSum: 136822486 },
        atr: {
            average: 10,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 145,
            momentumStartForShort: 150,
        },
        short: {
            redtoGreenPlan: { targets: tslaTargets, planConfigs: todayConfigs },
            momentum: { targets: tslaTargets, planConfigs: todayConfigs },
            firstRetracementPlan: { targets: tslaTargets, planConfigs: todayConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'MARA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 4704655, tradingSum: 99002312 },
        atr: {
            average: 2.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 26,
            momentumStartForShort: 26,
        },
        short: {
            firstRetracementPlan: { targets: tslaTargets, planConfigs: todayConfigs },
            redtoGreenPlan: { targets: tslaTargets, planConfigs: todayConfigs },
            momentum: { targets: tslaTargets, planConfigs: todayConfigs },
        },
        long: {
        },
    },
];