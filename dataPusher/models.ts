export interface TradingSettings {
    useSingleOrderForEntry: boolean,
    /**
     * snap to the high/low of the closed candle for moving stops
     */
    snapMode: boolean,
}

export interface Analysis {
    isFreshNews: boolean,
    /**
     * 0: low or normal news, 1: higher than normal, 2: extremely high news
     */
    newsImpactScore?: number,
    /**
     * from -10 to 10. Within -6 and 6 is small trend trade. default to 0.
     */
    marketReactionScore?: number,
    /**
     * 0: low or normal, 1: higher than normal, 2: extremely high
     */
    premarketVolumeScore: PremarketVolumeScore,
    /**
     * A number from 0 to 1 (100%) indicating the portion of the position to hold for swing trade
     */
    swingHoldRatio?: number,
    dailyChartStory: number,
    gap: Gap,
    weeklychart: string,
    dailyChart: string,
    hourlyChart: string,
    premarketChart: string,
    keyLevels?: number[],
    vwapExtensionDistance: number,
    singleMomentumKeyLevel: LevelArea[],
    /**
     * 1: use premarket high, -1: use premarket low, 0: not use premarket levels
     */
    usePremarketKeyLevel: number,
    dualMomentumKeyLevels: number[],
    tradableAreas: TradableArea[],
    profitTargetsForLong: ProfitTargets,
    profitTargetsForShort: ProfitTargets,
}
export interface Gap {
    pdc: number,
}
export interface TradingPlans {
    symbol: string,
    analysis: Analysis,
    autoFlip: boolean,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    atr: AverageTrueRange,
    marketCapInMillions: number,
    fixedQuantity?: number,
    keyLevels: keyLevels,
    defaultTargets: ExitTargets,
    defaultConfigs: PlanConfigs,
    long: SingleDirectionPlans,
    short: SingleDirectionPlans,
};
export interface AverageTrueRange {
    average: number,
    mutiplier: number,
    minimumMultipler: number,
    maxRisk: number
}
export interface VwapCorrection {
    volumeSum: number,
    tradingSum: number,
    open: number,
}

export interface SingleDirectionPlans {
    enabled: boolean,
    firstTargetToAdd: number,
    /* used strategies begin */
    levelMomentumPlan?: LevelMomentumPlan,
    vwapBounceFailPlan?: VwapBounceFailPlan,
    /* used strategies end */

    profitTakingFade60Plan?: ProfitTakingFade60Plan,
    openDriveContinuation60Plan?: OpenDriveContinuation60Plan,
    retracement?: RetracementPlan,
    reversalPlan?: ReversalPlan,
    breakoutAlgo?: BreakoutAlgo,
    levelBreakout?: LevelBreakoutPlan,

    deferredBreakoutPlan?: DeferredBreakoutPlan,
    redtoGreenPlan?: RedToGreenPlan,
    firstBreakoutPlan?: FirstBreakoutPlan,
    firstNewHighPlan?: FirstNewHighPlan,
    falseBreakoutPlan?: FalseBreakoutPlan,

    vwapCrossSuccessPlan?: VwapCrossSuccessPlan,
    premarketPlan?: PremarketPlan,

};

export interface VwapBounceFailPlan extends BasePlan { }
export interface VwapCrossSuccessPlan extends BasePlan { }
export interface keyLevels {
    otherLevels?: number[];
    momentumStartForLong: number,
    momentumStartForShort: number,
};
export enum PlanType {
    LevelMomentum = 'LevelMomentum',
    ProfitTakingFade60 = 'ProfitTakingFade60',
    OpenDriveContinuation60 = 'OpenDriveContinuation60',
    OpenChase = 'OpenChase',
    Retracement = 'Retracement',
    FalseBreakout = 'FalseBreakout',
    NewsBreakout = 'NewsBreakout',
    RedToGreen = 'RedToGreen',
    FirstNewHigh = 'FirstNewHigh',
    BreakoutAlgo = 'BreakoutAlgo',
    LevelBreakout = 'LevelBreakout',
    DeferredBreakout = 'DeferredBreakout',
    VwapBounceFail = 'VwapBounceFail',
    VwapCrossSuccess = 'VwapCrossSuccess',
};
export interface BasePlan {
    targets: ExitTargets,
    planConfigs: PlanConfigs,
    planType?: PlanType,
    timeframe?: number,
};
export interface PlanConfigs {
    size: number,
    deferTradingInSeconds: number,
    stopTradingAfterSeconds: number,
    requireReversal: boolean,
    alwaysAllowFlatten: boolean,
    alwaysAllowMoveStop: boolean,
    allowFirstFewExitsCount: number,
    setupQuality: SetupQuality,
}
export interface FalseBreakoutPlan extends BasePlan {
    price: number
}
export interface LevelMomentumPlan extends BasePlan {
    enableAutoTrigger: boolean,
}
export interface PremarketPlan extends BasePlan { }
export interface ProfitTakingFade60Plan extends BasePlan {
    enableAutoTrigger: boolean,
    onlyIfOpenBelow: number,
}

export interface OpenDriveContinuation60Plan extends BasePlan {
    disableIfOpenWorseThanPrice: number,
    requireOpenBetterThanVwap: boolean,
}

export interface AlgoPlan extends BasePlan {
    expirationInSeconds: number,
    allowPremarket: boolean,
}
export interface BreakoutAlgo extends AlgoPlan {
    entryPrice: number,
    useHighLowOfDay: boolean,
}
export interface ReversalPlan extends BasePlan {
    keyLevel: number,
}
export interface RetracementPlan {
    entryAreas: RetracementArea[];
    lastDefense: number,
    vwapArea?: RetracementArea,
    openPriceArea?: RetracementArea,
};
export interface RetracementArea extends BasePlan {
    priceArea: PriceArea,
    stopPrice: number,
}
export interface LevelBreakoutPlan extends BasePlan {
    entryPrice: number,
}
export interface FirstRetracementPlan extends BasePlan { }
export interface RedToGreenPlan extends BasePlan {
    strictMode: boolean,
    considerCurrentCandleAfterOneMinute: boolean,
}
export interface FirstBreakoutPlan extends BasePlan {

}
export interface FirstNewHighPlan extends BasePlan {
    enableAutoTrigger: boolean,
}
export interface DeferredBreakoutPlan extends BasePlan { }
export interface ProfitTargets {
    targets: number[],
    /**
     * Probability from 0 to 1 (100%) of how likely it will blow past those levels
     */
    willBlowPastThoseLevels: number,
    summary: string,
}
export interface ExitTargets {
    initialTargets: ExitTargetsSet,
    minimumTargets?: ExitTargetsSet,
    trail5Count: number,
    trail15Count: number,
}
export interface ExitTargetsSet {
    priceLevels: number[],
    rrr: number[],
    dailyRanges: number[],
}
export interface PriceArea {
    priceLevel: number,
    upperRoom: number,
    lowerRoom: number,
}
export interface LevelArea {
    high: number,
    low: number,
}

export enum SetupQuality {
    Unknown = "Unknown",
    /**
     * Half out at 1R and scale out into 2R
     */
    Scalp = "Scalp",
    /**
     * 2-leg push
     */
    Move2Move = "Move2Move",

    /**
     * Get in on 1-minute chart and get out on 5-minute chart
     */
    HigherTimeFrameTrend = "HigherTimeFrameTrend",
    HoldToDayClose = "HoldToDayClose",
    /**
     * Hold last few for swing or too extended intraday move
     */
    SwingHold = "SwingHold",
};

export enum PremarketVolumeScore {
    Zero_Low_Or_Normal = 0,
    One_Higher_Than_Normal = 1,
    Two_Extremely_High = 2,
    Unknown = -1,
}

export interface TradableArea {
    start: number,
    isLong: boolean,
    phaseOutDistance: number,
    endDistance: number,
    vwapDistance: number,
}