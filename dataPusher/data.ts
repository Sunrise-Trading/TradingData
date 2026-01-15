import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
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
const asmlConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const lrcxCOnfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const amatConfigs: TradingPlans.PlanConfigs = {
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
export const googleDocLink = "https://docs.google.com/document/d/1tppbX_WTXIb_X3Wl9VkEAu7UhGBGa5CNOs2heVLsCU4/edit?tab=t.0#heading=h.3ta3qw9hoewr";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
}
export const stockSelections: string[] = [
    'TSM',
    'ASML',
    'LRCX',
    'AMAT',
];
const tsmlevel = 342;
const ASMLlevel = 1291.48;
const asmlpmHigh = 1358.05;
const LRCXlevel = 222.58;
const lrcxpmHigh = 227.1;
const AMATlevel = 310.64;
const amatpmhigh = 332.25;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSM',
        analysis: {
            dailyChartStory: 2,
            gap: { pdc: 327 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: tsmlevel, low: tsmlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 2357171, tradingSum: 809985184 },
        marketCapInMillions: Constants.marketCaps.TSM,
        atr: {
            average: 8.5,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 8,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: tsmConfigs, defaultTargets: stock1Target,
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
                shortOpenDrive: { enabled: 1 },
                longVwapPushdownFail: { enabled: 1, waitForClose: false },
            },
            vwap_open_level: {
                shortBelowWaterBreakout: { enabled: 1, waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: { enabled: 1, waitForClose: false, },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 1 },
                shortEmergingWeaknessBreakdown: { enabled: 1, waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "340", partialCount: 2, atr: 0, rrr: 0, level: 340 },
                { text: "R6 335", partialCount: 2, atr: 0, rrr: 0, level: 335 },
            ],
            openProfitTakingPlan: { defaultRiskLevel: 350, mustOpenWithin: 350, targets: stock1Target, planConfigs: tsmConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tsmConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 350,
            finalTargets: [
                { text: "pm high 350", partialCount: 3, atr: 0, rrr: 0, level: 350 },
                { text: "355", partialCount: 2, atr: 0, rrr: 0, level: 355 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tsmConfigs },
        }
    },
    {
        symbol: 'ASML',
        analysis: {
            dailyChartStory: 1, gap: { pdc: 1263 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ASMLlevel, low: ASMLlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ASML,
        atr: {
            average: 35,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 35,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: asmlConfigs, defaultTargets: stock2Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: {},
                longEmergingStrengthBreakout: { waitForClose: true, allowCloseWithin: false },
            },
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true, },
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
                shortBelowWaterBreakout: { waitForClose: true, allowCloseWithin: false },
                longVwapPushdownFail: { waitForClose: true },
            },
            open_vwap_level: {
                longVwapContinuation: { enabled: 1 },
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
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: asmlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: asmlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: asmlConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: asmlpmHigh,
            finalTargets: [
                { text: `pm high ${asmlpmHigh}`, partialCount: 5, atr: 0, rrr: 0, level: asmlpmHigh },
                { text: "1400", partialCount: 2, atr: 0, rrr: 0, level: 1400 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: asmlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: asmlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: asmlConfigs },
        }
    },
    {
        symbol: 'LRCX',
        analysis: {
            dailyChartStory: 1, gap: { pdc: 209 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: LRCXlevel, low: LRCXlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.LRCX,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 8,
            maxRisk: 8,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: lrcxCOnfigs, defaultTargets: stock3Target,
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
                longVwapContinuation: { enabled: 1 },
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false, },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: lrcxCOnfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: lrcxCOnfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: lrcxCOnfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: lrcxpmHigh,
            finalTargets: [
                { text: `pm high ${lrcxpmHigh}`, partialCount: 3, atr: 0, rrr: 0, level: lrcxpmHigh },
                { text: "230", partialCount: 2, atr: 0, rrr: 0, level: 230 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: lrcxCOnfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: lrcxCOnfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: lrcxCOnfigs },
        }
    },
    {
        symbol: 'AMAT',
        analysis: {
            dailyChartStory: 1, gap: { pdc: 302 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: AMATlevel, low: AMATlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 218938, tradingSum: 70779469 },
        marketCapInMillions: Constants.marketCaps.AMAT,
        atr: {
            average: 9.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 10,
        },
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        defaultConfigs: amatConfigs, defaultTargets: stock4Target,
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
                longVwapContinuation: { enabled: 1 },
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amatConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: amatConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amatConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: amatpmhigh,
            finalTargets: [
                { text: `pm high ${amatpmhigh}`, partialCount: 5, atr: 0, rrr: 0, level: amatpmhigh },
                { text: "335", partialCount: 2, atr: 0, rrr: 0, level: 335 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amatConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: amatConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amatConfigs },
        }
    },
];