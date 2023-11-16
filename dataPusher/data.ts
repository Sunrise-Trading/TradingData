import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 8,
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
const indexTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    }
}
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
    'BABA',
    'WMT',
    //    'TSLA'
    //    'SPY', 'QQQ'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2410995, tradingSum: 581272442 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: smallTargets, planConfigs: scalpConfigs },
            momentum: { targets: smallTargets, planConfigs: scalpConfigs },
        },
        long: {
            openingDrive: { targets: smallTargets, planConfigs: scalpConfigs },
            momentum: { targets: smallTargets, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'BABA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 5022448, tradingSum: 405572246 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        }
    },
    {
        symbol: 'WMT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1572111, tradingSum: 250806333 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        }
    },
];