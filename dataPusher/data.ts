import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    requireReversal: true,
};
const smallConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 10,
    requireReversal: true,
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
const gmTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.28, 0.45, 0.45, 0.6, 0.6, 0.6, 0.85, 0.9, 0.95, 1.0],
    }
};
const crwdTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.35, 0.45, 0.45, 0.6, 0.6, 0.6, 0.85, 0.9, 0.95, 1.0],
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
    'PFE', 'ESTC'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PFE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2327167, tradingSum: 67997029 },
        dailyRange: 1, // 0.65
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 29.14,
            momentumStartForShort: 28.93,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 28.92, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 29.14, targets: bigTarget, planConfigs: bestConfigs },
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'PATH',
        autoFlip: false,
        vwapCorrection: { volumeSum: 464643, tradingSum: 10621084 },
        dailyRange: 1.2, // 0.77
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 22.43,
            momentumStartForShort: 22,
        },
        short: {
            levelBreakout: { entryPrice: 22, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
        long: {
            openingDrive: { targets: gmTargets, planConfigs: bestConfigs },
            momentum: { targets: gmTargets, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 32.26, targets: gmTargets, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'ESTC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 99741, tradingSum: 9533368 },
        dailyRange: 4, // 2.8
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 97.69,
            momentumStartForShort: 93,
        },
        short: {
        },
        long: {
            levelBreakout: { entryPrice: 97.69, targets: gmTargets, planConfigs: bestConfigs },
        },
    },
];