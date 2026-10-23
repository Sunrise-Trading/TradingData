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
    'T'
];
const metalastsupport = 600;
const metamomentum = 610;

const ter = 21.79;


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        bookmapPatternsToMonitor: ['reclaim2ndBid'],
        analysis: {
            gap: { pdc: 148 },
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
        corePlan: "long bids hold. below 681, long reclaim 2 bids, bid retest holds. above 681, long price lift up on bids step up. for short, wait for a pop",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 673 },
                { text: "660", partialCount: 1, atr: 0, rrr: 0, level: 660 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: 720f,
                coreCount: 0,
                coreTarget: 660,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: 740, low: 720 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "689", partialCount: 1, atr: 0, rrr: 0, level: 689 },
                { text: "695", partialCount: 1, atr: 0, rrr: 0, level: 695 },
            ],

            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: metamomentum, low: metalastsupport },
                coreCount: 0,
                coreTarget: 689,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: metamomentum, low: metalastsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'T',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 22.74 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ter, low: ter }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.T,
        atr: {
            average: 0.71,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                //{ price: tslahigh, label: "range high" }
            ]
        },
        fixedShares: [400, 800],
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
        corePlan: "trapped earnings buyers, short bid breakdown. if reclaim er low, wait for a pullback and then long on bid holds",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "21", partialCount: 1, atr: 0, rrr: 0, level: 21 },
                { text: "21.22", partialCount: 1, atr: 0, rrr: 0, level: 21.22 },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 21.22,
                runnerCount: 0,
                runnerTriggerCondition: "stay below pm low",
                buyersTrappedBelowThisLevel: ter,
                resistance: { high: ter, low: 21.7 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "22.35", partialCount: 1, atr: 0, rrr: 0, level: 22.35 },
                { text: "22.5", partialCount: 1, atr: 1, rrr: 0, level: 22.5 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 22.35,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: ter, high: 22,
                },
                nearAboveKeyEventLevel: ter,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
