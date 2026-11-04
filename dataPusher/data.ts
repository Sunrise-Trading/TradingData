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
    'PLTR',
    'AMD', 'TSLA'
];
const pltrer = 165.25;

const amdkeylevel = 475.07;
const tslakeylevel = 380.51;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 178 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pltrer, low: pltrer }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 8.36,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [60, 100, 200, 300],
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
        corePlan: `PLTR was bought up yesterday on earnings gap down, if the election results breakdown yesterday's low, that's my trapped buyers playbook.
        short bid breakdown below 165.25`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "155", partialCount: 1, atr: 0, rrr: 0, level: 155 },
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: pltrer,
                coreCount: 0,
                coreTarget: 160,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: pltrer, low: 160 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "172", partialCount: 1, atr: 0, rrr: 0, level: 172 },
                { text: "177", partialCount: 1, atr: 0, rrr: 0, level: 177 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: 170, low: pltrer },
                coreCount: 0,
                coreTarget: 177,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 170, low: pltrer },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'TSLA',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 398 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: tslakeylevel, low: tslakeylevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 13.4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100, 150],
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
        corePlan: `use earnings gap as key level decision. 
        short bid breakdown below 380.5. 
        after breakout 380.5, look for bid hold, best pattern is bid hold retest.`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "370", partialCount: 1, atr: 0, rrr: 0, level: 370 },
                { text: "365", partialCount: 1, atr: 0, rrr: 0, level: 365 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: tslakeylevel,
                coreCount: 0,
                coreTarget: 370,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: tslakeylevel, low: 377 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "387", partialCount: 1, atr: 0, rrr: 0, level: 387 },
                { text: "395", partialCount: 1, atr: 0, rrr: 0, level: 395 },
            ],

            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: tslakeylevel,
                coreCount: 0,
                coreTarget: 387,
                runnerCount: 0,
                runnerTriggerCondition: "hold above all time high",
                planConfigs: stock1Configs,
                support: { high: 385, low: tslakeylevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AMD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 450 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amdkeylevel, low: amdkeylevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 30.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [25, 50, 100, 150],
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
        corePlan: "long after a bid retest hold above 475. short after we breakdown a bid below 475",
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "450", partialCount: 1, atr: 0, rrr: 0, level: 450 },
                { text: "440", partialCount: 1, atr: 0, rrr: 0, level: 440 },
            ],
            gapAndCrapPlan: {
                nearBelowPreviousEventKeyLevel: "er low",
                coreCount: 0,
                coreTarget: 450,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: amdkeylevel, low: 470 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
                { text: "520", partialCount: 1, atr: 0, rrr: 0, level: 520 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: amdkeylevel,
                coreCount: 0,
                coreTarget: 500,
                runnerCount: 0,
                runnerTriggerCondition: "pullback to vwap and hold",
                planConfigs: stock1Configs,
                support: { high: 480, low: amdkeylevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
