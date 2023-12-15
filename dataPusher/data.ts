import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const vwapTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const costConfig: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const intcConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    requireReversal: false,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const rangeScalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 8,
    requireReversal: true,
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
const intcTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 2, 2, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 2, 2, 4],
        priceLevels: [46.8, 46.85, 46.9, 46.95, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
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
    'INTC', 'COST'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 347988, tradingSum: 16000778 },
        atr: {
            average: 1.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 45.8,
            momentumStartForShort: 45.77,
        },
        short: {
        },
        long: {
            openingDrive: { targets: intcTarget, planConfigs: intcConfigs },
            momentum: { targets: intcTarget, planConfigs: intcConfigs },
            levelBreakout: { entryPrice: 46.34, targets: intcTarget, planConfigs: intcConfigs },
        },
    },
    {
        symbol: 'COST',
        autoFlip: false,
        vwapCorrection: { volumeSum: 27612, tradingSum: 17806218 },
        atr: {
            average: 8.9,
            mutiplier: 1.2,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 642,
            momentumStartForShort: 641.5,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: costConfig },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: costConfig },
            levelBreakout: { entryPrice: 648.2, targets: bigTarget, planConfigs: costConfig }
        },
    },
];