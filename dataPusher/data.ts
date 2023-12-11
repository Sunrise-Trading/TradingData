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
const rblxConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const rblxEarlyConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: true,
};
const rangeScalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
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
    'SE', 'CI'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1383592, tradingSum: 49440620 },
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 35.6,
            momentumStartForShort: 35.6,
        },
        short: {
            levelBreakout: { entryPrice: 35.6, targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
            levelBreakout: { entryPrice: 36.13, targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
    },
    {
        symbol: 'CI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 306807, tradingSum: 89854150 },
        atr: {
            average: 6.8,
            mutiplier: 1.4,
            minimumMultipler: 1,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 293,
            momentumStartForShort: 293,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 300, targets: bigTarget, planConfigs: rblxConfigs },
            openingDrive: { targets: bigTarget, planConfigs: rblxEarlyConfigs },
            momentum: { targets: bigTarget, planConfigs: rblxConfigs },
        },
    }
];