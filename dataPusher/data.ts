import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

export const defaultSize = 0.21; // 0.21
const defaultCorePlan = {
    coreTarget: 0,
    coreCount: 5,
    runnerCount: 5,
    runnerTriggerCondition: "",
};
const createDefaultLevelMomentumPlan = (
    planConfigs: TradingPlans.PlanConfigs,
): TradingPlans.LevelMomentumPlan => ({
    planConfigs,
    ...defaultCorePlan,
});

const stock1Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};

export const stockSelections: string[] = [
    'NBIS'
];
const nbisergap = 216;
const crwdmoreaggressive = 218.31;
const crwdlevel = 215;
const nvdaath = 236.54;
const nvdapmhigh = 232.48;
const intcyhigh = 103.23;
const intcrecenthigh = 106.69;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NBIS',
        analysis: {
            gap: { pdc: 209 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nbisergap, low: nbisergap }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NBIS,
        atr: {
            average: 17,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                { price: 244, label: "1st target" },
                // { price: 175, label: "final T" }
            ]
        },
        defaultConfigs: stock1Configs,
        tradebooksConfig: {
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true },
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                longVwapPushdownFail: { waitForClose: true },
            },
        },
        corePlan: "wait for test for both bid and offer, then long above 625, short below 663, use 643 as pivot",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "220", partialCount: 1, atr: 0, rrr: 0, level: 220 },
                { text: "216", partialCount: 1, atr: 0, rrr: 0, level: 216 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock1Configs,
                coreTarget: 220,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "scalp",
                extendedGapUpInAtr: 1.6,
                resistance: { high: 280, low: 270 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "244", partialCount: 1, atr: 0, rrr: 0, level: 244 },
                { text: "250", partialCount: 1, atr: 0, rrr: 0, level: 250 },
            ],
            gapAndGoPlan: {
                planConfigs: stock1Configs,
                coreTarget: 244,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "bid step up on premarket high",
                support: { high: 220, low: 216 },
                nearPreviousKeyEventLevel: "previous earnings gap 216"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'CRWD',
        analysis: {
            gap: { pdc: 206 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: crwdlevel, low: crwdlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRWD,
        atr: {
            average: 11,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        defaultConfigs: stock2Configs,
        tradebooksConfig: {
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true },
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                longVwapPushdownFail: { waitForClose: true },
            },
        },
        corePlan: "small gap up, already pull back in premarket, no need to wait for pullback, long first breakout",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 352 },
                { text: "ah low", partialCount: 1, atr: 0, rrr: 0, level: 342 },
            ],
            /*
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreTarget: 352,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "stay below pm low",
                resistance: { high: 360, low: 358 },
                buyersTrappedBelowThisLevel: 360,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: `-1`,
            finalTargets: [
                { text: "228", partialCount: 1, atr: 0, rrr: 0, level: 228 },
                { text: "all time high", partialCount: 1, atr: 0, rrr: 0, level: 233 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreTarget: 228,
                coreCount: 1,
                support: { high: crwdmoreaggressive, low: crwdlevel },
                runnerCount: 1,
                runnerTriggerCondition: "hold above y high",
                nearAboveConsolidationRange: "earnings level 205-218"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
