import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

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
    requireReversal: true,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    requireReversal: true,
    sizingCount: 10,
};

export const stockSelections: string[] = [
    'SOFI',
    'META'
];
const metalastsupport = 625;
const metamomentum = 610;

const sofier = 15.77;


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 642 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: metalastsupport, low: metalastsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 25,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100],
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
        corePlan: "below 633, earnings dip buyers are trapped. short bid breakdown. After it hit gap fill 625, watch long",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 610 },
                { text: "625", partialCount: 1, atr: 0, rrr: 0, level: 625 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: 633,
                coreCount: 0,
                coreTarget: 610,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: 633, low: 630 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "660", partialCount: 1, atr: 0, rrr: 0, level: 660 },
                { text: "638", partialCount: 1, atr: 0, rrr: 0, level: 638 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: 626, low: 624.8 },
                coreCount: 0,
                coreTarget: 689,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 626, low: 624.8 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SOFI',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 14.46 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: sofier, low: sofier }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SOFI,
        atr: {
            average: 0.61,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [1000, 2000],
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
        corePlan: "use 15.77 as key level. long above, short below. wait bids behavior",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "15.3", partialCount: 1, atr: 0, rrr: 0, level: 15.3 },
                { text: "14.9", partialCount: 1, atr: 0, rrr: 0, level: 14.9 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                coreCount: 0,
                coreTarget: 15.3,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: sofier, low: 15.5 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 16.41 },
                { text: "ma50", partialCount: 1, atr: 0, rrr: 0, level: 16.66 },
            ],
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "previous er",
                coreCount: 0,
                coreTarget: 17,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 16, low: sofier },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
];
