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
};
const gtlbConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 3,
    requireReversal: false,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: false,
};
const rangeScalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
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
    'RIVN', 'AMD'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RIVN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 737957, tradingSum: 14080615 },
        atr: {
            average: 1.1,
            mutiplier: 1.5,
            minimumMultipler: 0.9,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 19,
            momentumStartForShort: 18,
        },
        short: {

        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            levelBreakout: { entryPrice: 19.24, targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
    },
    {
        symbol: 'AMD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 741280, tradingSum: 88910166 },
        atr: {
            average: 3.7,
            mutiplier: 1.2,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 121,
            momentumStartForShort: 119.6,
        },
        short: {
            levelBreakout: { entryPrice: 119.6, targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 121.31, targets: bigTarget, planConfigs: rangeScalpConfigs },
        },
    },
    {
        symbol: 'S',
        autoFlip: false,
        vwapCorrection: { volumeSum: 251806, tradingSum: 5991572 },
        atr: {
            average: 0.76,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 24.4,
            momentumStartForShort: 23.8,
        },
        short: {
            levelBreakout: { entryPrice: 22.96, targets: bigTarget, planConfigs: vwapTrendConfigs },
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {

        },
    },
];