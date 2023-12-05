export interface TradingSettings {
    equalWeightDivider: number,
}
export interface TradingPlans {
    symbol: string,
    autoFlip: boolean,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    atr: AverageTrueRange,
    deferTradingInSeconds: number,
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
    openingDrive?: OpeningDrivePlan,
    momentum?: MomentumPlan,
    retracement?: RetracementPlan,
    newsBreakout?: NewsBreakoutPlan,
    breakoutAlgo?: BreakoutAlgo,
    levelBreakout?: LevelBreakoutPlan,
    intraDayBreakout?: IntraDayBreakoutPlan,
};
export interface keyLevels {
    otherLevels?: number[];
    momentumStartForLong: number,
    momentumStartForShort: number,
};
export enum PlanType {
    Momentum = 'Momentum',
    Retracement = 'Retracement',
    NewsBreakout = 'NewsBreakout',
    OpeningDrive = 'OpeningDrive',
    BreakoutAlgo = 'BreakoutAlgo',
};
export interface BasePlan {
    targets: ExitTargets,
    planConfigs: PlanConfigs,
};
export interface PlanConfigs {
    equalWeightDivider: number,
    requireReversal: boolean,
    alwaysAllowStopOutOrFlatten: boolean,
}
export interface OpeningDrivePlan extends BasePlan {
}
export interface MomentumPlan extends BasePlan {
};
export interface NewsBreakoutPlan extends BasePlan {
};
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