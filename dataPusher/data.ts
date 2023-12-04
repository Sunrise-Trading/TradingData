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
    'COIN',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 648676, tradingSum: 94365769 },
        atr: {
            average: 6.5,
            mutiplier: 1.2,
            minimumMultipler: 0.7,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 146.5,
            momentumStartForShort: 145,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 143, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 146.5, targets: bigTarget, planConfigs: bestConfigs },
            //openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            //momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'EYPT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2261454, tradingSum: 63307004 },
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
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
];