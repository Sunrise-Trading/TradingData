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
    'CRM', 'SNOW',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CRM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 282842, tradingSum: 71063854 },
        dailyRange: 6.5, //4
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 251.77,
            momentumStartForShort: 250,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 248.47, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 252, targets: bigTarget, planConfigs: bestConfigs },
            // openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            // momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'SNOW',
        autoFlip: false,
        vwapCorrection: { volumeSum: 171004, tradingSum: 32278560 },
        dailyRange: 7, // 5.4
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 194,
            momentumStartForShort: 190,
        },
        short: {
            levelBreakout: { entryPrice: 186.55, targets: scaledOutAtrTargets, planConfigs: bestConfigs },
            momentum: { targets: gmTargets, planConfigs: bestConfigs },
            openingDrive: { targets: gmTargets, planConfigs: bestConfigs },
        },
        long: {
            //openingDrive: { targets: gmTargets, planConfigs: bestConfigs },
            //momentum: { targets: gmTargets, planConfigs: bestConfigs },
            //levelBreakout: { entryPrice: 32.26, targets: gmTargets, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'CRWD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 136791, tradingSum: 29852608 },
        dailyRange: 8,
        deferTradingInSeconds: 60,
        keyLevels: {
            momentumStartForLong: 219,
            momentumStartForShort: 216,
        },
        long: {
            openingDrive: { targets: crwdTargets, planConfigs: scalpConfigs },
            momentum: { targets: crwdTargets, planConfigs: scalpConfigs },
            levelBreakout: { entryPrice: 222.5, targets: crwdTargets, planConfigs: scalpConfigs },
        },
        short: {
            levelBreakout: { entryPrice: 216, targets: crwdTargets, planConfigs: scalpConfigs },
        },
    }
];