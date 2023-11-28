import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 3,
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
const scaledOutAtrTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.45, 0.45, 0.45, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1.0],
    }
};
export const stockSelections: string[] = [
    'PDD'
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
            levelBreakout: { entryPrice: 27.12, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
        long: {
            momentum: { targets: scaledOutAtrTargets, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 27.69, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'PDD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1703173, tradingSum: 227199178 },
        dailyRange: 7.5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 132.49,
            momentumStartForShort: 132,
        },
        long: {
            openingDrive: { targets: scaledOutAtrTargets, planConfigs: bestConfigs },
            momentum: { targets: scaledOutAtrTargets, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 136.4, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
        short: {
            levelBreakout: { entryPrice: 132, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
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
            levelBreakout: { entryPrice: 72.27, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 73.45, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
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
            levelBreakout: { entryPrice: 112.81, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 114.87, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
        },
    }
];