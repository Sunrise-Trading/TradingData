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
const muConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 5,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: true,
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
    'MU', 'TSLA',
    'SPY', 'QQQ'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MU',
        autoFlip: false,
        vwapCorrection: { volumeSum: 361490, tradingSum: 89794663 },
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 0.91,
        },
        keyLevels: {
            momentumStartForLong: 83,
            momentumStartForShort: 82.75,
        },
        short: {
        },
        long: {
            openingDrive: { targets: muTargets, planConfigs: muConfigs },
            momentum: { targets: muTargets, planConfigs: muConfigs },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 361490, tradingSum: 89794663 },
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 250,
            momentumStartForShort: 249,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 251.92, targets: bigTarget, planConfigs: tslaConfigs },
            openingDrive: { targets: bigTarget, planConfigs: tslaConfigs },
            momentum: { targets: bigTarget, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'SPY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 473450, tradingSum: 121353846 },
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 470,
            momentumStartForShort: 468,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: indexConfigs },
        },
    },
    {
        symbol: 'QQQ',
        autoFlip: false,
        vwapCorrection: { volumeSum: 473450, tradingSum: 121353846 },
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 23,
            momentumStartForShort: 22.5,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: indexConfigs },
        },
    },
];