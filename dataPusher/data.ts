import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}

export const defaultSize = 0.21; // 0.21
const nbisConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock3Configs: TradingPlans.PlanConfigs = {
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
export const googleDocLink = "https://docs.google.com/document/d/1Y1DKU5nbEX-UMcjD_N5o8OZaWrtVdw7LOHXujnvPEMk/edit?tab=t.0#heading=h.3ta3qw9hoewr";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
}
export const stockSelections: string[] = [
    'NBIS',
    //  'CRWV',
];
const nbisath = 141.1;
const nbisR6 = 120.02;
const nbispmhigh = 133;
const NBISlevel = nbispmhigh;
const nbisrisk: string[] = [`${nbisath}`, `${nbispmhigh}`, `${nbisR6}`];
const stock2Level = 1;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NBIS',
        analysis: {
            dailyChartStory: 2,
            gap: { pdc: 112.95 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: 0,
            stopTradingAfterSeconds: 0,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: NBISlevel, low: NBISlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NBIS,
        atr: {
            average: 8.34,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 8,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [nbisath, nbispmhigh, nbisR6]
        },
        defaultConfigs: nbisConfigs, defaultTargets: stock1Target,
        tradebooksConfig: {
            level_vwap_open: {
                shortVwapContinuation: { enabled: 0, },
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
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "122", partialCount: 1, atr: 0, rrr: 0, level: 122 },
                { text: "R6", partialCount: 3, atr: 0, rrr: 0, level: nbisR6 },
            ],
            gapAndCrapPlan: {
                aboveThisLevelNoMoreShort: nbispmhigh,
                defaultRiskLevels: nbisrisk,
                extendedGapUpInAtr: 1.5,
                belowThisLevelOnlyVwapContinuation: 120, targets: stock1Target, planConfigs: nbisConfigs
            },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nbisConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nbisConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "135", partialCount: 1, atr: 0, rrr: 0, level: 135 },
                { text: "138", partialCount: 2, atr: 0, rrr: 0, level: 138 },
                { text: "140", partialCount: 2, atr: 0, rrr: 0, level: 140 },
            ],
            gapAndGoPlan: {
                defaultRiskLevels: nbisrisk, nearAboveConsolidationRange: "80-130",
                support: { high: nbispmhigh, low: nbispmhigh }, targets: stock1Target, planConfigs: nbisConfigs
            },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nbisConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nbisConfigs },
        }
    },
    {
        symbol: 'CRWV',
        analysis: {
            dailyChartStory: -1, gap: { pdc: 0 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: -1,
            stopTradingAfterSeconds: -1,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock2Level, low: stock2Level }],
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

        },
        defaultConfigs: stock2Configs, defaultTargets: stock2Target,
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
                longVwapContinuation: {},
                shortEmergingWeaknessBreakdown: { waitForClose: true, allowCloseWithin: false, },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },

            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },

            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
        }
    },
    {
        symbol: 'stock3',
        analysis: {
            dailyChartStory: -1, gap: { pdc: 0 },
            dailySetup: TradingPlans.DailySetup.TwoWayOpen,
            deferTradingInSeconds: -1,
            stopTradingAfterSeconds: -1,
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock3Level, low: stock3Level }],
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

        },
        defaultConfigs: stock3Configs, defaultTargets: stock3Target,
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
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
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
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        }
    },
];