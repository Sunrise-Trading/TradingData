import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

const defaultCorePlan = {
    midpointCheck: 0,
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
    'ANT', 'AMD', 'ANTZ'
];
const nvdainflection = 125;
const nvdakeysupport = 150;

const antlevel = 83;
const amdswingsupport = 475;
const amdyhigh = 594;
const amd200ma = 430;
const amdfinaltarget = 400;
const amdpmlow = 451;
const amznshort = 300;
const antzlevel = 100;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 173 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nvdainflection, low: nvdainflection }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 8.7,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 300, 400],
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
        corePlan: `quickly bought up from 150 to 160, key session low 156.2 as key level. long above and short below.
        we are still in the bigger range of 150-170. so expect initial price discovery.
        best setup is after it hit large offer and large bid. due to bearish, best to hit bids`,
        short: {
            enabled: false,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "149", partialCount: 1, atr: 0, rrr: 0, level: 149 },
            ],
            gapDownAndGoDownPlan: {
                midpointCheck: 153,
                buyersTrappedBelowThisLevel: nvdainflection,
                coreTarget: nvdakeysupport,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: nvdainflection, low: 149 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
            ],

            gapDownAndGoUpPlan: {
                midpointCheck: 160,
                nearAboveKeyEventLevel: nvdainflection,
                coreCount: 0,
                coreTarget: 170,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 155, low: nvdainflection },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AMD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 585 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amdswingsupport, low: amdswingsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 43,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [25, 50, 75, 100],
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
        corePlan: `468 is the level AMD gap up on NVDA CEO news. now we lost it. 
        buyers will be trapped. short bids breakdown as long as AMD is below 468.
        if AMD reclaim 468, go long when bids below to form. flip short if those bids lose `,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: amdpmlow },
                { text: "final", partialCount: 1, atr: 0, rrr: 0, level: amdfinaltarget },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: amdswingsupport,
                midpointCheck: 430,
                coreCount: 0,
                coreTarget: 188,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: amdswingsupport, low: 456.2 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "yesterday high", partialCount: 1, atr: 0, rrr: 0, level: amdyhigh },
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 585,
                nearAboveSupport: { high: 470, low: amdswingsupport },
                coreCount: 0,
                coreTarget: amdyhigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 470, low: amdswingsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'ANT',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 87 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: antlevel, low: antlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ANT,
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [100, 200, 300, 400, 500],
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
        corePlan: `wait for the dip to 83 ipo level and buy the dip with small risk
        add if bid step up and hold. short if 83 bid loss`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 81.5 },
                { text: "75", partialCount: 1, atr: 0, rrr: 0, level: 75 },
            ],
            gapDownAndGoDownPlan: {
                nearBelowConsolidationRange: { high: antlevel, low: 80 },
                midpointCheck: 80,
                coreCount: 0,
                coreTarget: 75,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: antlevel, low: 80 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "90", partialCount: 1, atr: 0, rrr: 0, level: 90 },
                { text: "85", partialCount: 1, atr: 0, rrr: 0, level: 85 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 87.5,
                nearAboveKeyEventLevel: antlevel,
                coreCount: 0,
                coreTarget: 88,
                runnerCount: 0,
                runnerTriggerCondition: "scalp only",
                planConfigs: stock1Configs,
                support: { high: 85, low: antlevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
    {
        symbol: 'ANTZ',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 585 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: antzlevel, low: antzlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ANT,
        atr: {
            average: 6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [100, 200, 300, 400],
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
        corePlan: `long ANTZ when ANT lose the 83 bid. 
        below 83, there's no new target, so use ATR based targets,
        20% at premarket low 81.28, 20% at 80. then swing short to hold the rest. 
        40% at 1 ATR of $10 move. hold last 20% to swing short`,
        short: {
            enabled: false,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 250 },
                { text: "200 ma", partialCount: 1, atr: 0, rrr: 0, level: 245 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: amznshort,
                midpointCheck: 245,
                coreCount: 0,
                coreTarget: 245,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: amznshort, low: 250 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "yesterday high", partialCount: 1, atr: 0, rrr: 0, level: amdyhigh },
                { text: "600", partialCount: 1, atr: 0, rrr: 0, level: 600 },
            ],
            gapAndGoPlan: {
                midpointCheck: 585,
                nearAboveConsolidationRange: "ANT 83",
                coreCount: 0,
                coreTarget: amdyhigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 25, low: 1 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
];
