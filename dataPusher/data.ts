import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
const stock1Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const qcomConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const himsConfigs: TradingPlans.PlanConfigs = {
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
export const googleDocLink = "https://docs.google.com/document/d/1JQqazJTzvYQ-jWa05BUWejvlm1XuuqT2uJ2ayb6KZl8/edit?tab=t.0";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
}
export const stockSelections: string[] = [
    'GOOGL', 'HIMS', 'QCOM'
];
const GOOGLlevel = 349;
const googleDailyLevle = 326.54;
const googlAccelerationLevel = 319.35;
const qcomLevel = 133.76;
const qcomPmHigh = 136.73;
const himsLevel = 29.59;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        analysis: {
            dailyChartStory: 1,
            gap: { pdc: 333 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: GOOGLlevel, low: GOOGLlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 8.8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 8,
            maxQuantity: -1,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: stock1Configs, defaultTargets: stock1Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false, },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1, waitForClose: false, },
                longAboveWaterBreakout: { waitForClose: true, allowCloseWithin: false, },
                shortOpenFlush: { enabled: 1 },
                longVwapScalp: {},
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: { waitForClose: true },
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: googlAccelerationLevel,
            finalTargets: [
                { text: `${googlAccelerationLevel}`, partialCount: 2, atr: 0, rrr: 0, level: googlAccelerationLevel },
                { text: "310", partialCount: 3, atr: 0, rrr: 0, level: 310 },
            ],
            reversalPlan: { keyLevel: googleDailyLevle, requireLevelTouch: false, targets: stock1Target, planConfigs: stock1Configs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
        }
    },
    {
        symbol: 'QCOM',
        analysis: {
            dailyChartStory: 2, gap: { pdc: 149 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: qcomLevel, low: qcomLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.QCOM,
        atr: {
            average: 4.46,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 5,
            maxQuantity: -1,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: qcomConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: {},
                longEmergingStrengthBreakout: { enabled: 1, waitForClose: false, allowCloseWithin: true },
            },
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longAboveWaterBreakout: { enabled: 1, waitForClose: false, allowCloseWithin: true },
                shortOpenFlush: {},
                longVwapScalp: {},
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longOpenDrive: { enabled: 1 },
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: { waitForClose: true },
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false, },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qcomConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: qcomConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qcomConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: qcomPmHigh,
            finalTargets: [
                { text: `pm high ${qcomPmHigh}`, partialCount: 3, atr: 0, rrr: 0, level: qcomPmHigh },
                { text: "140", partialCount: 2, atr: 0, rrr: 0, level: 140 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qcomConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: qcomConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qcomConfigs },
        }
    },
    {
        symbol: 'HIMS',
        analysis: {
            dailyChartStory: 1, gap: { pdc: 24.4 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 1,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: himsLevel, low: himsLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.HIMS,
        atr: {
            average: 1.94,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 2,
            maxQuantity: -1,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: himsConfigs, defaultTargets: stock3Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: {},
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false, },
            },
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longAboveWaterBreakout: { waitForClose: true, allowCloseWithin: false, },
                shortOpenFlush: {},
                longVwapScalp: {},
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: { waitForClose: true },
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false, },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "27", partialCount: 2, atr: 0, rrr: 0, level: 27 },
                { text: "26", partialCount: 3, atr: 0, rrr: 0, level: 26 },
            ],
            reversalPlan: { keyLevel: 40, requireLevelTouch: false, targets: stock3Target, planConfigs: himsConfigs, defaultRiskLevel: 29.5 },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: himsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: himsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: himsConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "28", partialCount: 1, atr: 0, rrr: 0, level: 28 },
                { text: "29", partialCount: 1, atr: 0, rrr: 0, level: 29 },
            ],
            reversalPlan: { keyLevel: 27.2, requireLevelTouch: false, targets: stock3Target, planConfigs: himsConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: himsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: himsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: himsConfigs },
        }
    },
    {
        symbol: 'stock4',
        analysis: {
            dailyChartStory: -1, gap: { pdc: 0 }, // optional, pdv is previous day close
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: -1,
            stopTradingAfterSeconds: -1,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock4Level, low: stock4Level }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
            maxQuantity: -1,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: {},
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false },
            },
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true },
                longAboveWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                shortOpenFlush: {},
                longVwapScalp: {},
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false, },
                longVwapPushdownFail: { waitForClose: true },
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
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
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        }
    },
];