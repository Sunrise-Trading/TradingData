import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const metaConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const wConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.15,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const irbtConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.2,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};

const R2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
const R1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'META',
    'SMCI',
    'W',
    'IRBT',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        autoFlip: false,
        vwapCorrection: { volumeSum: 97977, tradingSum: 37081459 },
        atr: {
            average: 8,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 376,
            momentumStartForShort: 376,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: metaConfigs },
            firstRetracementPlan: { targets: R2Target, planConfigs: metaConfigs },
            vwapCrossFailPlan: { targets: R2Target, planConfigs: metaConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: metaConfigs },
            levelBreakout: { entryPrice: 380.46, targets: R2Target, planConfigs: metaConfigs },
        },
    },
    {
        symbol: 'SMCI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 225103, tradingSum: 78128984 },
        atr: {
            average: 18,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: stock2Configs },
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'W',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 3.3,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 57.73,
            momentumStartForShort: 59.6,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: wConfigs },
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: wConfigs },
        },
    },
    {
        symbol: 'IRBT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2040502, tradingSum: 31476634 },
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 15.75,
            momentumStartForShort: 15.5,
        },
        short: {},
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: irbtConfigs },
        },
    },
];