import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
const googleConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const aaplConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const openCOnfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const smrConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};

const unlimitTargetForAll: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },

    trail5Count: 10,
    trail15Count: 10,
};
const unlimitTargetForHalf: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
    },

    trail5Count: 10,
    trail15Count: 10,
};
const stock1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2],
        dailyRanges: [0.75, 0.75, 0.75, 0.8, 0.9, 1, 1, 1, 1, 1],
    },

    trail5Count: 10,
    trail15Count: 10,
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2],
        dailyRanges: [0.75, 0.75, 0.75, 0.8, 0.9, 1, 1, 1, 1, 1],
    },

    trail5Count: 10,
    trail15Count: 10,
};
const stock3Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2],
        dailyRanges: [0.75, 0.75, 0.75, 0.8, 0.9, 1, 1, 1, 1, 1],
    },

    trail5Count: 10,
    trail15Count: 10,
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2],
        dailyRanges: [0.75, 0.75, 0.75, 0.8, 0.9, 1, 1, 1, 1, 1],
    },

    trail5Count: 10,
    trail15Count: 10,
};
export const googleDocId = "1RwEg3oO0FPwrDiwM83a2Ly2zCp7tS5k2ropXjxWisk0";
export const stockSelections: string[] = [
    'OPEN',
    'SMR',
    'AAPL', 'GOOGL'
];
const googleLevel = 229.75;
const aaplLevel = 239.5;
const openLevel = 5.19;
const smrLevel = 38.49;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Two_Extremely_High,
            dailyChartStory: 2,
            gap: { pdc: 211 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: googleLevel, low: googleLevel }],
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },

        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 2030273, tradingSum: 455887183 },
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 4.56,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: googleConfigs, defaultTargets: stock1Target,
        short: {
            enabled: true,
            firstTargetToAdd: 222.44,
            finalTarget: "pm low: 50%, if lost it, add 30% back",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
            reversalPlan: { keyLevel: 227.03, targets: stock1Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTarget: "pm high: 50%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
            vwapScalpPlan: { threshold: 222.44, targets: stock1Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
        }
    },
    {
        symbol: 'AAPL',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 230 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: aaplLevel, low: aaplLevel }],
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },

        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAPL,
        atr: {
            average: 4.33,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 2.5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: aaplConfigs, defaultTargets: stock2Target,
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTarget: "pm low: 50%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTarget: "245: 20%, 247: 20%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
        }
    },
    {
        symbol: 'OPEN',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 5.13 },
            deferTradingInSeconds: 280,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: openLevel, low: openLevel }],
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },

        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.OPEN,
        atr: {
            average: 0.68,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: openCOnfigs, defaultTargets: stock3Target,
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTarget: "1 ATR: 50%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: openCOnfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: openCOnfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: openCOnfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 5.45,
            finalTarget: "5.87: 50%",
            vwapScalpPlan: { threshold: 5.13, targets: stock3Target, planConfigs: openCOnfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: openCOnfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: openCOnfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: openCOnfigs },
        }
    },
    {
        symbol: 'SMR',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 37.25 }, // optional, pdv is previous day close
            deferTradingInSeconds: 280,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: smrLevel, low: smrLevel }],
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },

        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMR,
        atr: {
            average: 3.2,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: smrConfigs, defaultTargets: stock4Target,
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTarget: "1 ATR: 50%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: smrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: smrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: smrConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 39.71,
            finalTarget: "1 ATR or 41.91: 50%",
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: smrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: smrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: smrConfigs },
        }
    },
];