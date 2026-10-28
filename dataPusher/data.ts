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
    'VRT',
    'SKHY'
];
const vrtsupplyhigh = 255;
const vrtsupplylow = 240;
const metamomentum = 610;

const skhygaptop = 161.3;


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'VRT',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 208 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: vrtsupplyhigh, low: vrtsupplyhigh }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.VRT,
        atr: {
            average: 11,
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
        corePlan: "short only gap and crap. big gap up, short first bid breakdown",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "228", partialCount: 1, atr: 0, rrr: 0, level: 228 },
                { text: "220", partialCount: 1, atr: 0, rrr: 0, level: 220 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                coreCount: 0,
                coreTarget: 228,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: vrtsupplyhigh, low: vrtsupplylow },
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
            gapAndGoPlan: {
                nearAboveConsolidationRange: "gap fill",
                coreCount: 0,
                coreTarget: 689,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 158, low: skhygaptop },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SKHY',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 146 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: skhygaptop, low: skhygaptop }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SKHY,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 300],
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
        corePlan: "gap and crap until 157.5, small size until below pm low to go heavy",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "148", partialCount: 1, atr: 0, rrr: 0, level: 148 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                coreCount: 0,
                coreTarget: 15.3,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: skhygaptop, low: 154.6 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 16.41 },
                { text: "ma50", partialCount: 1, atr: 0, rrr: 0, level: 16.66 },
            ],
            /*
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "previous er",
                coreCount: 0,
                coreTarget: 17,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 16, low: skhygaptop },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
];
