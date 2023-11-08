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
const smallTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.6, 1.8, 1.8, 1.8, 2.5, 3, 5],
        dailyRanges: [0.45, 0.45, 0.5, 0.5, 0.5, 0.5, 0.5, 0.8, 0.9, 1],
    }
};
export const stockSelections: string[] = [
    'RBLX',
    'RIVN',
    'TTWO',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RBLX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3044182, tradingSum: 121461862 },
        dailyRange: 2.9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: smallTargets, planConfigs: bestConfigs },
            momentum: { targets: smallTargets, planConfigs: bestConfigs },
        },
        long: {
            openingDrive: { targets: smallTargets, planConfigs: bestConfigs },
            momentum: { targets: smallTargets, planConfigs: bestConfigs },
        }
    },
    {
        symbol: 'UPST',
        autoFlip: false,
        vwapCorrection: { volumeSum: 920815, tradingSum: 19973763 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: smallTargets, planConfigs: scalpConfigs },
        },
        long: {
        }
    },
    {
        symbol: 'RIVN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2912490, tradingSum: 54356017 },
        dailyRange: 2,
        deferTradingInSeconds: 180,
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
        }
    },
    {
        symbol: 'TTWO',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1296130, tradingSum: 125900084 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: bigTarget, planConfigs: scalpConfigs },
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
        long: {
        }
    },
];