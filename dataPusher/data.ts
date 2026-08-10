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
    'ACHR',
];
const docsgap = 32.66;
const achrpreerhigh = 6.75;
const achrlevel = achrpreerhigh;
const gmetrappedlevel = 20.89;
const spcxlevel = 120;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ACHR',
        analysis: {
            gap: { pdc: 5.59 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: achrlevel, low: achrlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 6000,
        atr: {
            average: 0.34,
            mutiplier: 2,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                //{ high: 9.11, low: 8.92, color: "red", label: "gap down" }
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
                { text: "6", partialCount: 1, atr: 0, rrr: 0, level: 6 },
                { text: "5.9", partialCount: 1, atr: 0, rrr: 0, level: 5.9 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2.8,
                resistance: { high: achrlevel, low: 6.5 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "rejected at vwap",
                coreTarget: 6,
                enableOfferReversal: true,
                enableBidBreakdown: true,
                waitForPullback: false,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "7.5", partialCount: 1, atr: 0, rrr: 0, level: 7.5 },
                { text: "8", partialCount: 1, atr: 1, rrr: 0, level: 8 },
            ],
            gapAndGoPlan: {
                support: { high: 7, low: achrlevel },
                enableOfferBreakout: true,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "hold above pm high",
                nearPreviousKeyEventLevel: "previous earnings high at 6.75",
                coreTarget: 7.5,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SPCX',
        analysis: {
            gap: { pdc: 120 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: spcxlevel, low: spcxlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GME,
        atr: {
            average: 0.49,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [{ label: "trapped below", price: gmetrappedlevel }],
            zones: []
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
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "20", partialCount: 1, atr: 0, rrr: 0, level: 20 },
                { text: "19", partialCount: 1, atr: 0, rrr: 0, level: 19 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: gmetrappedlevel,
                resistance: { high: gmetrappedlevel, low: 20.62 },
                waitForPullback: true,
                enableBidBreakdown: true,
                enableOfferReversal: true,
                runnerTriggerCondition: "lost vwap",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 20,
                planConfigs: stock2Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "20.5", partialCount: 1, atr: 0, rrr: 0, level: 20.5 },
                { text: "20.8", partialCount: 1, atr: 0, rrr: 0, level: 20.8 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 20, low: 19.93 },
                nearAboveSupport: { high: 20, low: 19.93 },
                runnerTriggerCondition: "breakout vwap",
                coreTarget: 20.5,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
