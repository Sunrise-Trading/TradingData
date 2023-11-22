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
const smallTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1],
        dailyRanges: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.5, 0.5, 0.5],
    }
};
export const stockSelections: string[] = [
    'DE', 'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 848648, tradingSum: 200651295 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 243.44,
            momentumStartForShort: 242.46,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
            levelBreakout: { entryPrice: 243.45, targets: bigTarget, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'DE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 109757, tradingSum: 39457783 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 363,
            momentumStartForShort: 358,
        },
        short: {
            levelBreakout: { entryPrice: 356.38, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 363, targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'NVDA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1747058, tradingSum: 875831505 },
        dailyRange: 19,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 507,
            momentumStartForShort: 498,
        },
        short: {
            openingDrive: { targets: smallTargets, planConfigs: scalpConfigs },
            momentum: { targets: smallTargets, planConfigs: scalpConfigs },
            levelBreakout: { entryPrice: 497.95, targets: smallTargets, planConfigs: scalpConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 507, targets: smallTargets, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'SPY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 522833, tradingSum: 237603545 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 455,
            momentumStartForShort: 451,
        },
        short: {
            levelBreakout: { entryPrice: 451, targets: smallTargets, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 455, targets: smallTargets, planConfigs: bestConfigs },
        },
    }
];