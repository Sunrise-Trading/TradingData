import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
const ddogConfigs: TradingPlans.PlanConfigs = {
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
const duolConfigs: TradingPlans.PlanConfigs = {
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
const snapConfigs: TradingPlans.PlanConfigs = {
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
const stock4Configs: TradingPlans.PlanConfigs = {
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
export const googleDocId = "1I73CG9IVg9WaOhe5f-NOi7-nW6eNTkpAi2bV_qbAQyg";
export const stockSelections: string[] = [
    'DDOG', 'DUOL', 'SNAP'
];
const ddogLevel = 191.94;
const duolLevel = 200;
const snapLevel = 8.88;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DDOG',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 2,
            gap: { pdc: 155 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 1,
            singleMomentumKeyLevel: [{ high: ddogLevel, low: ddogLevel }],
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },

        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 1191069, tradingSum: 216791173 },
        marketCapInMillions: Constants.marketCaps.DDOG,
        atr: {
            average: 5.35,
            mutiplier: 2,
            minimumMultipler: 1.5,
            maxRisk: 5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: ddogConfigs, defaultTargets: stock1Target,
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
                { text: "185 for 10%", partialCount: 1, atr: 0, rrr: 0, level: 185 },
                { text: "183 for 30%", partialCount: 3, atr: 0, rrr: 0, level: 183 },
                { text: "vwap for 40%", partialCount: 4, atr: 0, rrr: 0, level: 180 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: ddogLevel, targets: stock1Target, planConfigs: ddogConfigs },
            reversalPlan: { keyLevel: ddogLevel, targets: stock1Target, planConfigs: ddogConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ddogConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ddogConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
        }
    },
    {
        symbol: 'DUOL',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 260 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: duolLevel, low: duolLevel }],
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
        marketCapInMillions: Constants.marketCaps.DUOL,
        atr: {
            average: 15,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 10,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: duolConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { enabled: 1 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1 },
                longAboveWaterBreakout: { enabled: 1 },
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
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "1 atr for 50%", partialCount: 5, atr: 1, rrr: 0, level: 0 },
                { text: "2 atr with trail", partialCount: 5, atr: 2, rrr: 0, level: 0 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: duolLevel, targets: stock2Target, planConfigs: duolConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: duolConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: duolConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: duolConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "1 atr for 50%", partialCount: 5, atr: 1, rrr: 0, level: 0 },
                { text: "2 atr with trail", partialCount: 5, atr: 2, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: duolConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: duolConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: duolConfigs },
        }
    },
    {
        symbol: 'SNAP',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 7.3 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: snapLevel, low: snapLevel }],
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
        marketCapInMillions: Constants.marketCaps.SNAP,
        atr: {
            average: 0.31,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: snapConfigs, defaultTargets: stock3Target,
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
                { text: "pm low for 50%", partialCount: 5, atr: 0, rrr: 0, level: 8.41 },
                { text: "scale to 8.1 for 50%", partialCount: 5, atr: 0, rrr: 0, level: 8.1 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: snapLevel, targets: stock3Target, planConfigs: snapConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: snapConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: snapConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: snapConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: snapConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: snapConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: snapConfigs },
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