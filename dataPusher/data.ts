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
    'RKLB',
];
const rklbylow = 59;
const rklbpmlow = 52;
const tslasupport = 376;
const tslahigh = 386.83;


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RKLB',
        bookmapPatternsToMonitor: ['falseBreakout'],
        analysis: {
            gap: { pdc: 59 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: rklbylow, low: rklbylow }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RKLB,
        atr: {
            average: 3.9,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [500, 800],
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
        corePlan: "short: wait for a pop for offer pattern, then short bid breakdown. wait for a 5K order signal first",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: rklbpmlow },
                { text: "47", partialCount: 1, atr: 0, rrr: 0, level: 47 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: rklbylow,
                coreCount: 0,
                coreTarget: rklbpmlow,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: rklbylow, low: 56 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1", // premarket high
            finalTargets: [
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: 77 },
                { text: "75", partialCount: 1, atr: 0, rrr: 0, level: 75 },
            ],
            /*
            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: 70, low: rklbylow },
                coreCount: 0,
                coreTarget: crwvylow,
                runnerCount: 0,
                runnerTriggerCondition: "reclaim vwap",
                planConfigs: stock1Configs,
                support: { high: 70, low: rklbylow },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'TSLA',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 375 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: tslasupport, low: tslasupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 11,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                { price: tslahigh, label: "range high" }
            ]
        },
        fixedShares: [50, 100],
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
        corePlan: "near its previous earnings level 30.11. Long above 30.11, short below 30.11. Due to being in a downtrend, long must wait for pullback.",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "378", partialCount: 1, atr: 0, rrr: 0, level: 378 },
                { text: "376", partialCount: 1, atr: 0, rrr: 0, level: tslasupport },
            ],
            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: tslasupport,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                heavySupplyZoneDays: 25,
                resistance: { high: 400, low: 390 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "390", partialCount: 1, atr: 0, rrr: 0, level: 390 },
                { text: "400", partialCount: 1, atr: 1, rrr: 0, level: 400 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: tslahigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: tslasupport, high: 378,
                },
                nearAboveConsolidationRange: "340-375",
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
