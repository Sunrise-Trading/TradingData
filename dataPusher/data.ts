import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;

const vwapTrendConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 3,
    requireReversal: true,
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
const coinSHort: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [141, 141, 141, 141, 141, 141, 141, 141, 141, 141],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
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
    'COIN', 'EYPT', 'TSLA'
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
            openingDrive: { targets: coinSHort, planConfigs: vwapTrendConfigs },
            momentum: { targets: coinSHort, planConfigs: vwapTrendConfigs },
            levelBreakout: { entryPrice: 143, targets: coinSHort, planConfigs: vwapTrendConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 146.5, targets: bigTarget, planConfigs: vwapTrendConfigs },
            //openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            //momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
    },
    {
        symbol: 'EYPT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2261454, tradingSum: 63307004 },
        atr: {
            average: 5,
            mutiplier: 1,
            minimumMultipler: 0.8,
        },
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 30,
            momentumStartForShort: 21.5,
        },
        short: {
            levelBreakout: { entryPrice: 21.5, targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 728226, tradingSum: 172872846 },
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 0.4,
        },
        deferTradingInSeconds: 120,
        keyLevels: {
            momentumStartForLong: 237.6,
            momentumStartForShort: 237.5,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: vwapTrendConfigs },
        },
    },
];