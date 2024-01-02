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
const rivnConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
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
    allowEarlyExits: false,
};
const indexConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 0,
    requireReversal: false,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
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
    'TSLA', 'RIVN'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 150859, tradingSum: 375726439 },
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.4,
        },
        keyLevels: {
            momentumStartForLong: 247.5,
            momentumStartForShort: 247,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { targets: tslaTargets, planConfigs: tslaConfigs },
            momentum: { targets: tslaTargets, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'RIVN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1294783, tradingSum: 29126464 },
        atr: {
            average: 1,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 21.25,
            momentumStartForShort: 22.8,
        },
        short: {
            redtoGreenPlan: { targets: tslaTargets, planConfigs: rivnConfigs },
            momentum: { targets: tslaTargets, planConfigs: rivnConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'MARA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 4821828, tradingSum: 127865425 },
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
        },
        long: {
            levelBreakout: { entryPrice: 27.56, targets: tslaTargets, planConfigs: rivnConfigs },
            redtoGreenPlan: { targets: tslaTargets, planConfigs: rivnConfigs },
        },
    },
];