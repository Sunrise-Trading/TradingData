import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const intc: TradingPlans.PlanConfigs = {
    sizeOverride: 0.2,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const coin: TradingPlans.PlanConfigs = {
    sizeOverride: 0.2,
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
    'INTC',
    'COIN',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3106319, tradingSum: 138220584 },
        atr: {
            average: 1.4,
            mutiplier: 1.4,
            minimumMultipler: 0.64,
        },
        keyLevels: {
            momentumStartForLong: 43.1,
            momentumStartForShort: 45.2,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: intc },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: intc },
        },
    },
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 311676, tradingSum: 39271569 },
        atr: {
            average: 9.7,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 124.5,
            momentumStartForShort: 128,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: coin },
            levelBreakout: { entryPrice: 127.6, targets: R2Target, planConfigs: coin }
        },
    },
];