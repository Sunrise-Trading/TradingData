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
    'CRWV',
    'META'
];
const metalastsupport = 633.27;
const metamomentum = 610;

const crwvresistance = 54;


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
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 610 },
                { text: "625", partialCount: 1, atr: 0, rrr: 0, level: 625 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: 633,
                coreCount: 0,
                coreTarget: 610,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: 633, low: 630 },
            },
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
        symbol: 'CRWV',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 54.24 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: crwvresistance, low: crwvresistance }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRWV,
        atr: {
            average: 6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                //{ price: tslahigh, label: "range high" }
            ]
        },
        fixedShares: [400, 600],
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
        corePlan: "continue selloff if we lose 54, the temp pause from last week",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "50", partialCount: 1, atr: 0, rrr: 0, level: 50 },
                { text: "49", partialCount: 1, atr: 0, rrr: 0, level: 49 },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 50,
                runnerCount: 0,
                runnerTriggerCondition: "stay below pm low",
                buyersTrappedBelowThisLevel: crwvresistance,
                resistance: { high: crwvresistance, low: 53 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "22.35", partialCount: 1, atr: 0, rrr: 0, level: 22.35 },
                { text: "22.5", partialCount: 1, atr: 1, rrr: 0, level: 22.5 },
            ],
            /*
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 22.35,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: crwvresistance, high: 22,
                },
                nearAboveKeyEventLevel: crwvresistance,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
