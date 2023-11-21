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
    'TSLA', 'DKS',
    'AI', 'ZM'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 848648, tradingSum: 200651295 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 237.1,
            momentumStartForShort: 232.7,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 237.1, targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'AI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 338936, tradingSum: 9670027 },
        dailyRange: 2.8,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 28.53,
            momentumStartForShort: 28.31,
        },
        short: {
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
            levelBreakout: { entryPrice: 29, targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'ZM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 390237, tradingSum: 25212116 },
        dailyRange: 2.4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 65.38,
            momentumStartForShort: 64.48,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 63.6, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {

        },
    },
    {
        symbol: 'DKS',
        autoFlip: false,
        vwapCorrection: { volumeSum: 152520, tradingSum: 19643577 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 130.44,
            momentumStartForShort: 128.83,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 127.47, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {

        },
    }
];