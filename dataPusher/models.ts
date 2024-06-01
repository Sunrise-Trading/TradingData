export interface TradingSettings {
    equalWeightDivider: number,
    useSingleOrderForEntry: boolean,
}
export interface Analysis {
    newsQualityAndFreshness: number,
    dailyChartStory: number,
    relativeVolumeAndCandleSmoothness: number,
    cleanVwapTrend: number,
}
export interface TradingPlans {
    symbol: string,
    analysis: Analysis,
    autoFlip: boolean,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    atr: AverageTrueRange,
    fixedQuantity?: number,
    keyLevels: keyLevels,
    longOnlyIfOpenAbove: number,
    shortOnlyIfOpenBelow: number,
    long: SingleDirectionPlans,
    short: SingleDirectionPlans,
};
export interface AverageTrueRange {
    average: number,
    mutiplier: number,
    minimumMultipler: number,
}
export interface VwapCorrection {
    volumeSum: number,
    tradingSum: number,
}

export interface SingleDirectionPlans {
    profitTakingFade60Plan?: ProfitTakingFade60Plan,
    profitTakingExhaust60Plan?: ProfitTakingExhaust60Plan,
    openDriveContinuation60Plan?: OpenDriveContinuation60Plan,
    premarket2ndBreakout60Plan?: Premarket2ndBreakout60Plan,
    momentum?: MomentumPlan,
    retracement?: RetracementPlan,
    newsBreakout?: NewsBreakoutPlan,
    breakoutAlgo?: BreakoutAlgo,
    levelBreakout?: LevelBreakoutPlan,
    imbalancePlan?: ImbalancePlan,
    openRangeBreakoutPlan?: OpenRangeBreakoutPlan,

    openScalpPlan?: OpenScalpPlan,
    redtoGreenPlan?: RedToGreenPlan,
    firstBreakoutPlan?: FirstBreakoutPlan,
    firstNewHighPlan?: FirstNewHighPlan,
    secondNewHighPlan?: SecondNewHighPlan,
    firstRetracementPlan?: FirstRetracementPlan,
    falseBreakoutPlan?: FalseBreakoutPlan,
    bothSidesFalseBreakoutPlan?: BothSidesFalseBreakoutPlan,
    intraDayBreakout?: IntraDayBreakoutPlan,
    rangePlan?: RangePlan,
    vwapCrossFailPlan?: VwapCrossFailPlan,
    vwapCrossSuccessPlan?: VwapCrossSuccessPlan,
};
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
    Range = 'Range',
    VwapCrossFail = 'VwapCrossFail',
    VwapCrossSuccess = 'VwapCrossSuccess',
};
export interface BasePlan {
    targets: ExitTargets,
    planConfigs: PlanConfigs,
    planType?: PlanType,
};
export interface PlanConfigs {
    size: number,
    deferTradingInSeconds: number,
    stopTradingAfterSeconds: number,
    requireReversal: boolean,
    alwaysAllowStopOutOrFlatten: boolean,
    allowEarlyExits: boolean,
    allowFirstFewExitsCount: number,
}
export interface FalseBreakoutPlan extends BasePlan {
    price: number
}

export interface MomentumPlan extends BasePlan {
};
export interface ProfitTakingFade60Plan extends BasePlan { }
export interface ProfitTakingExhaust60Plan extends BasePlan { }
export interface OpenDriveContinuation60Plan extends BasePlan { }
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
    includeSecondNewHigh: boolean,
    enableAutoTrigger: boolean,
}
export interface SecondNewHighPlan extends BasePlan { }
export interface IntraDayBreakoutPlan extends BasePlan {
    requireReversal: boolean,
    deferInSeconds: number,
}
export interface ExitTargets {
    initialTargets: ExitTargetsSet,
    minimumTargets?: ExitTargetsSet,
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
    Scalp = "Scalp",
    DayTrade = "DayTrade",
    HoldToDayClose = "HoldToDayClose",
    Swing = "Swing",
};