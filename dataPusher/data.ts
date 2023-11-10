import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 3,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
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
}
const nvdaTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.6, 1.8, 1.8, 1.8, 2.5, 3, 5],
        dailyRanges: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.5, 0.5, 0.5],
    }
};
export const stockSelections: string[] = [
    'PLUG',
    'TTD',
    //'U',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLUG',
        autoFlip: false,
        vwapCorrection: { volumeSum: 4089443, tradingSum: 35140486 },
        dailyRange: 0.99,
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
        },
    },
    {
        symbol: 'TTD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 902038, tradingSum: 425976521 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        }
    },
    {
        symbol: 'U',
        autoFlip: false,
        vwapCorrection: { volumeSum: 902038, tradingSum: 425976521 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            openingDrive: { targets: bigTarget, planConfigs: bestConfigs },
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
        }
    }
];