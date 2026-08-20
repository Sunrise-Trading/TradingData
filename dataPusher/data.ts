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
    'WMT', 'MRNA'
];
const mrnalevel = 163.47;
const wmtlevel = 106.79;
const wmtpmlow = 105.67;

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
                { text: "136", partialCount: 1, atr: 0, rrr: 0, level: 136 },
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 15,
                resistance: { high: mrnalevel, low: 160 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "lost vwap",
                coreTarget: 150,
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
                { text: "174", partialCount: 1, atr: 0, rrr: 0, level: 174 },
                { text: "194", partialCount: 1, atr: 1, rrr: 0, level: 194 },
            ],
            gapAndGoPlan: {
                support: { high: 150, low: 147.8 },
                enableOfferBreakout: false,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "survive pullback above pm high, but mainly a scalp",
                nearPreviousKeyEventLevel: "previous news gap down at 15.94",
                coreTarget: 174,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'WMT',
        analysis: {
            gap: { pdc: 114 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: wmtlevel, low: wmtlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.WMT,
        atr: {
            average: 2.4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [],
            zones: [
                //{ high: mupmlow + 5, low: mupmlow, color: "green", label: "pm low" }
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
            enabled: true,
            firstTargetToAdd: wmtpmlow,
            finalTargets: [
                { text: "104", partialCount: 1, atr: 0, rrr: 0, level: 104 },
                { text: "103", partialCount: 1, atr: 0, rrr: 0, level: 103 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: wmtlevel,
                resistance: { high: wmtlevel, low: wmtpmlow },
                waitForPullback: false,
                enableBidBreakdown: false,
                enableOfferReversal: true,
                runnerTriggerCondition: "confirm below pm low",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 104,
                planConfigs: stock2Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "108", partialCount: 1, atr: 0, rrr: 0, level: 108 },
                { text: "109", partialCount: 1, atr: 0, rrr: 0, level: 109 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 107, low: wmtlevel },
                nearAboveSupport: { high: 107, low: wmtlevel },
                runnerTriggerCondition: "reclaim vwap",
                coreTarget: 108,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
