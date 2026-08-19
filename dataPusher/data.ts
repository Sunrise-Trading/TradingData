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
const stock3Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};


export const stockSelections: string[] = [
    'MRNA',
];
const mrnagapdownlow = 118.1;
const mrnagapdownhigh = 122.45;
const mrnalevel = mrnagapdownhigh;
const mrnahighopen = 123.57;
const lastsupport = 930;
const moreberish = 15.81;
const mulevel = lastsupport;
const mupmlow = 956;
const mupmhigh = 995;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MRNA',
        analysis: {
            gap: { pdc: 63 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: mrnalevel, low: mrnalevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MRNA,
        atr: {
            average: 3.64,
            mutiplier: 3,
            minimumMultipler: 1.5,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                //{ high: 16.85, low: 16.5, color: "red", label: "main profit target" }
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
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "103", partialCount: 1, atr: 0, rrr: 0, level: 103 },
                { text: "114", partialCount: 1, atr: 0, rrr: 0, level: 114 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 15,
                resistance: { high: 134, low: mrnagapdownlow },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "lost vwap",
                coreTarget: 103,
                enableOfferReversal: true,
                enableBidBreakdown: false,
                waitForPullback: false,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "125", partialCount: 1, atr: 0, rrr: 0, level: 125 },
                { text: "130", partialCount: 1, atr: 1, rrr: 0, level: 130 },
            ],
            gapAndGoPlan: {
                support: { high: 125, low: mrnahighopen },
                enableOfferBreakout: false,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "survive pullback above pm high, but mainly a scalp",
                nearPreviousKeyEventLevel: "previous news gap down at 15.94",
                coreTarget: 130,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 1011 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: mulevel, low: mulevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 72,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [],
            zones: [
                { high: mupmlow + 5, low: mupmlow, color: "green", label: "pm low" }
            ]
        },
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
        short: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "30", partialCount: 1, atr: 0, rrr: 0, level: 30 },
                { text: "29", partialCount: 1, atr: 0, rrr: 0, level: 29 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: onontrappedlevel,
                resistance: { high: onontrappedlevel, low: 34 },
                waitForPullback: true,
                enableBidBreakdown: false,
                enableOfferReversal: true,
                runnerTriggerCondition: "confirm below pm low",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 30,
                planConfigs: stock2Configs,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: mupmhigh },
                { text: "R4", partialCount: 1, atr: 0, rrr: 0, level: 978 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 940, low: mulevel },
                nearAboveSupport: { high: 940, low: mulevel },
                runnerTriggerCondition: "reclaim vwap",
                coreTarget: mupmhigh,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
