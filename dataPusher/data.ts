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
    'AMD',
    'TTD'
];
const nvdatrapped = 181.46;
const nvdadipbuy = 170;

const ttdtrapped = 13.75;
const amderhigh = 530;
const amdgapfill = 560;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 186.64 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nvdatrapped, low: nvdatrapped }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 7.77,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 400, 800, 1600],
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
        corePlan: `175 is yesterday's buyers first defense. short the breakdown of 175
        170 is buyers last defense. also short 170 breakdown.
        in between be careful, avoid shorting near above 170
        short only, already made gap fill yesterday. should continue downtrend
        short the pop above 175, under 181, but need to be small size and observe 175 support hold or not.
        below 175 is buyers trapped. above 175 can be choppy.`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
                { text: "165", partialCount: 1, atr: 0, rrr: 0, level: 165 },
            ],
            gapDownAndGoDownPlan: {
                midpointCheck: 172.5,
                buyersTrappedBelowThisLevel: nvdatrapped,
                coreTarget: 160,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: nvdatrapped, low: 180 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
                { text: "172", partialCount: 1, atr: 0, rrr: 0, level: 172 },
            ],
            /*
            gapDownAndGoUpPlan: {
                midpointCheck: (nvdadipbuy + 170) / 2,
                nearAboveKeyEventLevel: nvdadipbuy,
                coreCount: 0,
                coreTarget: 170,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 165, low: nvdadipbuy },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AMD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 515 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amderhigh, low: amderhigh }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 39,
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
        corePlan: `gap up 1 ATR already, so do not chase breakout, we are already near target. `,
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 188 },
                { text: "180", partialCount: 1, atr: 0, rrr: 0, level: 180 },
            ],
            /*
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3.6,
                coreCount: 0,
                coreTarget: 188,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: amderlow, low: 188 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: amdgapfill },
                { text: "570", partialCount: 1, atr: 0, rrr: 0, level: 570 },
            ],
            gapAndGoPlan: {
                midpointCheck: 545,
                nearAboveConsolidationRange: "earnings high",
                coreCount: 0,
                coreTarget: 500,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 476, low: amderhigh },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'TTD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 15 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ttdtrapped, low: ttdtrapped }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TTD,
        atr: {
            average: 0.72,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [500, 1000, 2000],
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
        corePlan: `buyers trapped below 13.75, short bid breakdown below it. it's near, so no need to wait
        target is 13-13.10`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "17", partialCount: 1, atr: 0, rrr: 0, level: 17 },
                { text: "16.5", partialCount: 1, atr: 0, rrr: 0, level: 16.5 },
            ],
            gapDownAndGoDownPlan: {
                midpointCheck: 13.25,
                buyersTrappedBelowThisLevel: ttdtrapped,
                coreCount: 0,
                coreTarget: 13.00,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: ttdtrapped, low: 13.5 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "352", partialCount: 1, atr: 0, rrr: 0, level: 352 },
                { text: "360", partialCount: 1, atr: 0, rrr: 0, level: 360 },
            ],
            /*
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "er low",
                coreCount: 0,
                coreTarget: 350,
                runnerCount: 0,
                runnerTriggerCondition: "pullback to vwap and hold",
                planConfigs: stock1Configs,
                support: { high: 335, low: dkngtrappedlevel },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
