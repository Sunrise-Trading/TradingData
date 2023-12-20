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
const fdxTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: false,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 300,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
    allowEarlyExits: true,
};
const maraConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
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
const nioShortTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 2, 2, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
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
    'GOOGL', 'FDX', 'TSLA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'FDX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 361490, tradingSum: 89794663 },
        atr: {
            average: 5.38,
            mutiplier: 1.66,
            minimumMultipler: 0.91,
        },
        keyLevels: {
            momentumStartForLong: 244,
            momentumStartForShort: 243,
        },
        short: {
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
    },
    {
        symbol: 'GOOGL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 628064, tradingSum: 86740364 },
        atr: {
            average: 3,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 137.5,
            momentumStartForShort: 137.8,
        },
        short: {
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 473450, tradingSum: 121353846 },
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 257.05,
            momentumStartForShort: 255.5,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 258.34, targets: bigTarget, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'MARA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 473450, tradingSum: 121353846 },
        atr: {
            average: 1,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 23,
            momentumStartForShort: 22.5,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: maraConfigs },
        },
    },
];