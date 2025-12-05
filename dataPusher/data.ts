import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.1; // 0.21
const nflxConfigs: TradingPlans.PlanConfigs = {
    size: 0.05,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const ultaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const irbtConfigs: TradingPlans.PlanConfigs = {
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
export const googleDocLink = "https://docs.google.com/document/d/12BEEPWgZR8JwTmmSshkO3KNBpbkWkxQ7idJ9qK5uVHI/edit?tab=t.0#heading=h.3ta3qw9hoewr";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
}
export const stockSelections: string[] = [
    'IRBT', 'NFLX', 'ULTA'
];
const nflxLevel = 98.4;
const ultaLevel = 571.79;
const irbtlevel = 3.5;
const pmhigh = 3.83;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NFLX',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1,
            gap: { pdc: 103.22 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: nflxLevel, low: nflxLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
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
        marketCapInMillions: Constants.marketCaps.NFLX,
        atr: {
            average: 3.43,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 2.5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: nflxConfigs, defaultTargets: stock1Target,
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
                shortBelowWaterBreakout: { enabled: 1 },
                longVwapPushdownFail: { enabled: 1 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 1 },
                shortEmergingWeaknessBreakdown: { enabled: 1 },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "R6 100.99", partialCount: 2, atr: 0, rrr: 0, level: 100.99 },
                { text: "R5 101.55", partialCount: 2, atr: 0, rrr: 0, level: 101.55 },
                { text: "y-low 101.77", partialCount: 2, atr: 0, rrr: 0, level: 101.77 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
        }
    },
    {
        symbol: 'ULTA',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 2, gap: { pdc: 534 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: ultaLevel, low: ultaLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
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
        marketCapInMillions: Constants.marketCaps.ULTA,
        atr: {
            average: 15,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 12,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: ultaConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { enabled: 1 },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1 },
                longAboveWaterBreakout: { enabled: 1 },
                shortOpenFlush: { enabled: 1 },
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
                { text: "pm low 563.22", partialCount: 3, atr: 0, rrr: 0, level: 563.22 },
                { text: "R6 561.35", partialCount: 2, atr: 0, rrr: 0, level: 561.35 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: ultaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: ultaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: ultaConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 574.46,
            finalTargets: [
                { text: "pm high 573.93", partialCount: 4, atr: 0, rrr: 0, level: 573.93 },
                { text: "ath 574.76", partialCount: 1, atr: 0, rrr: 0, level: 574.76 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: ultaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: ultaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: ultaConfigs },
        }
    },
    {
        symbol: 'IRBT',
        analysis: {
            isFreshNews: true,
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            dailyChartStory: 1, gap: { pdc: 3.03 },
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: irbtlevel, low: irbtlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
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
        marketCapInMillions: 1100,
        atr: {
            average: 0.45,
            mutiplier: 1.5,
            minimumMultipler: 1.5,
            maxRisk: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: irbtConfigs, defaultTargets: stock3Target,
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
                shortVwapBounceFail: { enabled: 1 },
                longOpenDrive: { enabled: 1 },
            },
            vwap_level_open: {
                shortOpenDrive: { enabled: 1 },
                longVwapPushdownFail: { enabled: 1 },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 1 },
                longVwapPushdownFail: { enabled: 1 },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 1 },
                shortEmergingWeaknessBreakdown: { enabled: 1 },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: irbtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: irbtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: irbtConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: pmhigh,
            finalTargets: [
                { text: "pm high 3.83", partialCount: 5, atr: 0, rrr: 0, level: pmhigh },
                { text: "4.00", partialCount: 2, atr: 0, rrr: 0, level: 4 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: irbtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: irbtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: irbtConfigs },
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
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
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