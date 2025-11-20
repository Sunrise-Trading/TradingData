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
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const wmtConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const amdConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
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
export const googleDocId = "1Am11ddqsov9lP9xoUNn4Nt-XWxFBTlhdMwS5TDyyXMI";
export const stockSelections: string[] = [
    'GOOGL',
    'WMT',
    'AMD'
];
const GOOGLLevel = 303.81;
const wmtLevel = 104.73;
const amdLevel = 236;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 2,
            gap: { pdc: 293 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: GOOGLLevel, low: GOOGLLevel }],
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
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 9.4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 3,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: googleConfigs, defaultTargets: stock1Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 0 },
                longEmergingStrengthBreakout: { enabled: 1 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 0 },
                longAboveWaterBreakout: { enabled: 1 },
                shortOpenFlush: { enabled: 0 },
                longVwapScalp: { enabled: 0 },
            },
            open_level_vwap: {
                shortVwapBounceFail: { enabled: 0 },
                longOpenDrive: { enabled: 1 },
            },
            vwap_level_open: {
                shortOpenDrive: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 0 },
                shortEmergingWeaknessBreakdown: { enabled: 0 },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 305.68,
            finalTargets: [
                { text: "pm high", partialCount: 3, atr: 0, rrr: 0, level: 305.68 },
                { text: "R5", partialCount: 2, atr: 0, rrr: 0, level: 306.98 },
                { text: "R6", partialCount: 2, atr: 0, rrr: 0, level: 311.71 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: googleConfigs },
        }
    },
    {
        symbol: 'WMT',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 100 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 1,
            singleMomentumKeyLevel: [{ high: wmtLevel, low: wmtLevel }],
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
        marketCapInMillions: Constants.marketCaps.WMT,
        atr: {
            average: 1.81,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: wmtConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { enabled: 0 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1 },
                longAboveWaterBreakout: { enabled: 0 },
                shortOpenFlush: { enabled: 1 },
                longVwapScalp: { enabled: 0 },
            },
            open_level_vwap: {
                shortVwapBounceFail: { enabled: 0 },
                longOpenDrive: { enabled: 0 },
            },
            vwap_level_open: {
                shortOpenDrive: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 0 },
                shortEmergingWeaknessBreakdown: { enabled: 0 },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "R6", partialCount: 2, atr: 0, rrr: 0, level: 102.84 },
                { text: "R5", partialCount: 2, atr: 0, rrr: 0, level: 102.28 },
                { text: "vwap", partialCount: 4, atr: 0, rrr: 0, level: 102 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: wmtLevel, targets: stock2Target, planConfigs: wmtConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: wmtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: wmtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: wmtConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: wmtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: wmtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: wmtConfigs },
        }
    },
    {
        symbol: 'AMD',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 223.55 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: amdLevel, low: amdLevel }],
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
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 13,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: amdConfigs, defaultTargets: stock3Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { enabled: 0 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1 },
                longAboveWaterBreakout: { enabled: 0 },
                shortOpenFlush: { enabled: 0 },
                longVwapScalp: { enabled: 0 },
            },
            open_level_vwap: {
                shortVwapBounceFail: { enabled: 1 },
                longOpenDrive: { enabled: 1 },
            },
            vwap_level_open: {
                shortOpenDrive: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 0 },
                shortEmergingWeaknessBreakdown: { enabled: 0 },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "R4", partialCount: 2, atr: 0, rrr: 0, level: 232.11 },
                { text: "pm low", partialCount: 2, atr: 0, rrr: 0, level: 230 },
                { text: "R3", partialCount: 5, atr: 0, rrr: 0, level: 227.83 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: amdConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: amdConfigs },
        }
    },
    {
        symbol: 'stock4',
        analysis: {
            isFreshNews: false,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Unknown,
            dailyChartStory: -1, gap: { pdc: 0 }, // optional, pdv is previous day close
            deferTradingInSeconds: -1,
            stopTradingAfterSeconds: -1,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: stock4Level, low: stock4Level }],
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
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 0 },
                longEmergingStrengthBreakout: { enabled: 0 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 0 },
                longAboveWaterBreakout: { enabled: 0 },
                shortOpenFlush: { enabled: 0 },
                longVwapScalp: { enabled: 0 },
            },
            open_level_vwap: {
                shortVwapBounceFail: { enabled: 0 },
                longOpenDrive: { enabled: 0 },
            },
            vwap_level_open: {
                shortOpenDrive: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 0 },
                longVwapPushdownFail: { enabled: 0 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 0 },
                shortEmergingWeaknessBreakdown: { enabled: 0 },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        }
    },
];