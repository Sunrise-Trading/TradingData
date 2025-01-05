export interface TradingSettings {
    equalWeightDivider: number,
    useSingleOrderForEntry: boolean,
}

export interface Analysis {
    isFreshNews: boolean,
    /**
     * from -10 to 10. Within -6 and 6 is small trend trade. default to 0.
     */
    newsImpactScore: number,
    /**
     * from -10 to 10. Within -6 and 6 is small trend trade. default to 0.
     */
    marketReactionScore: number,
    /**
     * A number from 0 to 1 (100%) indicating the portion of the position to hold for swing trade
     */
    swingHoldRatio: number,
    dailyChartStory: number,
    gapSize: number,
    weeklychart: string,
    dailyChart: string,
    hourlyChart: string,
    premarketChart: string,
    keyLevels: number[],
    vwapExtensionDistance: number,
    singleMomentumKeyLevel: number,
    dualMomentumKeyLevels: number[],
    profitTargetsForLong: ProfitTargets,
    profitTargetsForShort: ProfitTargets,
    relativeVolumeAndCandleSmoothness: number,
    cleanVwapTrend: number,
    choppyOpenRangeHigh: number,
    choppyOpenRangeLow: number,
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
    disableShortIfOpenAbove: number,
    disableLongIfOpenBelow: number,
    summary: string,
    setups: Setup[],
    defaultTargets: ExitTargets,
    defaultConfigs: PlanConfigs,
    long: SingleDirectionPlans,
    short: SingleDirectionPlans,
};
export interface Setup {
    high: string,
    low: string,
    title: string,
    isChoppy: boolean,
    range: string,
    quality: string,
    entrySummary: string,
    exitTargets: string,
}
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
    reasons: string[],
    gapTightOutsideAndGoPlan?: GapTightOutsideAndGoPlan,
    gapTightInsideAndGoPlan?: GapTightInsideAndGoPlan,
    profitTakingFade60Plan?: ProfitTakingFade60Plan,
    profitTakingExhaust60Plan?: ProfitTakingExhaust60Plan,
    openDriveContinuation60Plan?: OpenDriveContinuation60Plan,
    premarket2ndBreakout60Plan?: Premarket2ndBreakout60Plan,
    retracement?: RetracementPlan,
    newsBreakout?: NewsBreakoutPlan,
    breakoutAlgo?: BreakoutAlgo,
    levelBreakout?: LevelBreakoutPlan,
    imbalancePlan?: ImbalancePlan,
    openRangeBreakoutPlan?: OpenRangeBreakoutPlan,

    openScalpPlan?: OpenScalpPlan,
    deferredBreakoutPlan?: DeferredBreakoutPlan,
    redtoGreenPlan?: RedToGreenPlan,
    firstBreakoutPlan?: FirstBreakoutPlan,
    firstNewHighPlan?: FirstNewHighPlan,
    firstRetracementPlan?: FirstRetracementPlan,
    falseBreakoutPlan?: FalseBreakoutPlan,
    bothSidesFalseBreakoutPlan?: BothSidesFalseBreakoutPlan,
    intraDayBreakout?: IntraDayBreakoutPlan,
    rangePlan?: RangePlan,
    vwapCrossFailPlan?: VwapCrossFailPlan,
    vwapCrossSuccessPlan?: VwapCrossSuccessPlan,
    premarketPlan?: PremarketPlan,
    levelMomentumPlan?: LevelMomentumPlan,
};
export interface GapTightOutsideAndGoPlan extends BasePlan {
    keyLevel: number,
    maxDistance: number,
}
export interface GapTightInsideAndGoPlan extends BasePlan {
    keyLevel: number,
    maxDistance: number,
}
export interface OpenScalpPlan extends BasePlan {
}
export interface ImbalancePlan extends BasePlan {
}
export interface OpenRangeBreakoutPlan extends BasePlan {
    count: number,
}
export interface BothSidesFalseBreakoutPlan extends BasePlan {

}
export interface VwapCrossFailPlan extends BasePlan { }
export interface VwapCrossSuccessPlan extends BasePlan { }
export interface keyLevels {
    otherLevels?: number[];
    momentumStartForLong: number,
    momentumStartForShort: number,
};
export enum PlanType {
    ProfitTakingFade60 = 'ProfitTakingFade60',
    ProfitTakingExhuast60 = 'ProfitTakingExhuast60',
    Premarket2ndBreakout60 = 'Premarket2ndBreakout60',
    OpenDriveContinuation60 = 'OpenDriveContinuation60',
    Momentum = 'Momentum',
    FirstRetracement = 'FirstRetracement',
    Retracement = 'Retracement',
    NewsBreakout = 'NewsBreakout',
    BothSidesFalseBreakout = 'BothSidesFalseBreakout',
    FalseBreakout = 'FalseBreakout',
    RedToGreen = 'RedToGreen',
    FirstNewHigh = 'FirstNewHigh',
    SecondNewHigh = 'SecondNewHigh',
    Imbalance = 'Imbalance',
    OpenRangeBreakout = 'OpenRangeBreakout',

    OpenScalp = 'OpenScalp',
    BreakoutAlgo = 'BreakoutAlgo',
    LevelBreakout = 'LevelBreakout',
    DeferredBreakout = 'DeferredBreakout',
    Range = 'Range',
    VwapCrossFail = 'VwapCrossFail',
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
export interface LevelMomentumPlan extends BasePlan { }
export interface PremarketPlan extends BasePlan { }
export interface ProfitTakingFade60Plan extends BasePlan {
    enableAutoTrigger: boolean,
    onlyIfOpenBelow: number,
}
export interface ProfitTakingExhaust60Plan extends BasePlan {
    includeOpenChase: boolean,
    minDistanceToVwap: number,
}
export interface OpenDriveContinuation60Plan extends BasePlan {
    disableIfOpenWorseThanPrice: number,
    requireOpenBetterThanVwap: boolean,
}
export interface Premarket2ndBreakout60Plan extends BasePlan { }

export interface NewsBreakoutPlan extends BasePlan {
};
export interface RangePlan extends BasePlan { }
export interface AlgoPlan extends BasePlan {
    expirationInSeconds: number,
    allowPremarket: boolean,
}
export interface BreakoutAlgo extends AlgoPlan {
    entryPrice: number,
    useHighLowOfDay: boolean,
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
export interface IntraDayBreakoutPlan extends BasePlan {
    requireReversal: boolean,
    deferInSeconds: number,
}
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
    wave3BatchIndexStart: number,
    wave5BatchIndexStart: number,
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

export enum SetupQuality {
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