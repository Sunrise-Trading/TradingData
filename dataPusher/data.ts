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
};
const gtlbConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 3,
    requireReversal: false,
    alwaysAllowStopOutOrFlatten: false,
};
const rangeScalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
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
    'BTI', 'FLNC', 'S'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'BTI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1543226, tradingSum: 44709970 },
        atr: {
            average: 0.424,
            mutiplier: 3,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 29.3,
            momentumStartForShort: 29,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            levelBreakout: { entryPrice: 28.5, targets: bigTarget, planConfigs: gtlbConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'FLNC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 966111, tradingSum: 21794467 },
        atr: {
            average: 1.7,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 23.7,
            momentumStartForShort: 22.6,
        },
        short: {
            levelBreakout: { entryPrice: 22.45, targets: bigTarget, planConfigs: vwapTrendConfigs },
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {

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