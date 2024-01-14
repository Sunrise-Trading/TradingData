export interface TradingSettings {
    equalWeightDivider: number,
}
export interface TradingPlans {
    symbol: string,
    autoFlip: boolean,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    atr: AverageTrueRange,
    fixedQuantity?: number,
    keyLevels: keyLevels,
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
    momentum?: MomentumPlan,
    retracement?: RetracementPlan,
    newsBreakout?: NewsBreakoutPlan,
    breakoutAlgo?: BreakoutAlgo,
    levelBreakout?: LevelBreakoutPlan,
    redtoGreenPlan?: RedToGreenPlan,
    firstRetracementPlan?: FirstRetracementPlan,
    bothSidesFalseBreakoutPlan?: BothSidesFalseBreakoutPlan,
    intraDayBreakout?: IntraDayBreakoutPlan,
    rangePlan?: RangePlan,
    vwapCrossFailPlan?: VwapCrossFailPlan,
    vwapCrossSuccessPlan?: VwapCrossSuccessPlan,
};
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
    Momentum = 'Momentum',
    FirstRetracement = 'FirstRetracement',
    Retracement = 'Retracement',
    NewsBreakout = 'NewsBreakout',
    BothSidesFalseBreakout = 'BothSidesFalseBreakout',
    RedToGreen = 'RedToGreen',
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
    sizeOverride?: number,
    deferTradingInSeconds: number,
    requireReversal: boolean,
    alwaysAllowStopOutOrFlatten: boolean,
    alwaysAllowFirstFewExits: boolean,
    allowEarlyExits: boolean,
}
export interface OpeningDrivePlan extends BasePlan {
}
export interface MomentumPlan extends BasePlan {
};
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
}
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