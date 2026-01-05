import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
const muConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const tsmConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const cvxConfigs: TradingPlans.PlanConfigs = {
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
export const googleDocLink = "https://docs.google.com/document/d/1Mz4wem_4RkpnsyzInWVvA5ulQM8jk4Yo2kIewZ1faEE/edit?tab=t.0#heading=h.3ta3qw9hoewr";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
}
export const stockSelections: string[] = [
    'MU', 'TSM', 'CVX',
];
const MULevel = 326.37;
const mupmhigh = 328.5;
const tsmLevel = 333.34;
const cvxLevel = 187;
const cvxpmhigh = 172.18;
const xomLevel = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MU',
        analysis: {
            dailyChartStory: 2,
            gap: { pdc: 315 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: MULevel, low: MULevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 14,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 10,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: muConfigs, defaultTargets: stock1Target,
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
                shortVwapBounceFail: { enabled: 1, waitForClose: false, },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: {},
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: {},
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "R3 321.12", partialCount: 2, atr: 0, rrr: 0, level: 321.12 },
                { text: "R2 319.22", partialCount: 2, atr: 0, rrr: 0, level: 319.22 },
                { text: "R1 317.32", partialCount: 2, atr: 0, rrr: 0, level: 317.32 },

            ],
            openProfitTakingPlan: { defaultRiskLevel: mupmhigh, mustOpenWithin: mupmhigh, targets: stock1Target, planConfigs: muConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: muConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: muConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: muConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: muConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: muConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: muConfigs },
        }
    },
    {
        symbol: 'TSM',
        analysis: {
            dailyChartStory: 2, gap: { pdc: 319 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: tsmLevel, low: tsmLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSM,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: tsmConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1 },
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1, waitForClose: false, },
                longAboveWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                shortOpenFlush: { enabled: 1 },
                longVwapScalp: {},
            },
            open_level_vwap: {
                shortVwapBounceFail: { enabled: 1, waitForClose: false, },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: {},
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: {},
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
                { text: "R5 327.77", partialCount: 2, atr: 0, rrr: 0, level: 327.77 },
                { text: "pm low 327", partialCount: 2, atr: 0, rrr: 0, level: 327 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: tsmLevel, mustOpenWithin: tsmLevel, targets: stock2Target, planConfigs: tsmConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
        }
    },
    {
        symbol: 'CVX',
        analysis: {
            dailyChartStory: 2, gap: { pdc: 155.9 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: cvxLevel, low: cvxLevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CVX,
        atr: {
            average: 2.27,
            mutiplier: 2,
            minimumMultipler: 2,
            maxRisk: 3,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
            otherLevels: [
                165.85
            ],
        },
        defaultConfigs: cvxConfigs, defaultTargets: stock3Target,
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
                longVwapPushdownFail: {},
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: {},
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
                { text: "pm low 165", partialCount: 1, atr: 0, rrr: 0, level: 165 },
                { text: "gap fill", partialCount: 5, atr: 0, rrr: 0, level: 162 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: cvxpmhigh, mustOpenWithin: cvxpmhigh, targets: stock3Target, planConfigs: cvxConfigs },
            reversalPlan: { keyLevel: cvxpmhigh, targets: stock3Target, planConfigs: cvxConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: cvxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: cvxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: cvxConfigs },
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: cvxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: cvxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: cvxConfigs },
        }
    },
    {
        symbol: 'XOM',
        analysis: {
            dailyChartStory: 2, gap: { pdc: 122.65 }, // optional, pdv is previous day close
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: xomLevel, low: xomLevel }],
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
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 1, },
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false },
            },
            level_open_vwap: {
                shortVwapBounceFail: { enabled: 1, waitForClose: false },
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
                longVwapPushdownFail: {},
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false, },
                longVwapPushdownFail: {},
            },
            open_vwap_level: {
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "pm low 125.66", partialCount: 2, atr: 0, rrr: 0, level: 125.66 },
                { text: "R5 125.19", partialCount: 2, atr: 0, rrr: 0, level: 125.19 },
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