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
        dailyRanges: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.8, 0.9, 0.1],
    }
};
export const stockSelections: string[] = [
    'AFRM', 'SHOP', 'COIN'
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
        symbol: 'AFRM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 257695, tradingSum: 7003922 },
        dailyRange: 2.2,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 27.3,
            momentumStartForShort: 27.13,
        },
        short: {
            levelBreakout: { entryPrice: 27.12, targets: smallTargets, planConfigs: bestConfigs },
        },
        long: {
            momentum: { targets: smallTargets, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 27.69, targets: smallTargets, planConfigs: bestConfigs },
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
        symbol: 'SHOP',
        autoFlip: false,
        vwapCorrection: { volumeSum: 164383, tradingSum: 11966085 },
        dailyRange: 3,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 73.45,
            momentumStartForShort: 72.27,
        },
        short: {
            levelBreakout: { entryPrice: 72.27, targets: smallTargets, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 73.45, targets: smallTargets, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 144503, tradingSum: 16419225 },
        dailyRange: 5.8,
        deferTradingInSeconds: 55,
        keyLevels: {
            momentumStartForLong: 114.86,
            momentumStartForShort: 112.81,
        },
        short: {
            levelBreakout: { entryPrice: 112.81, targets: smallTargets, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 114.87, targets: smallTargets, planConfigs: bestConfigs },
        },
    }
];