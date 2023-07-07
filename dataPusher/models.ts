export interface TradingPlans {
    symbol: string,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    dailyRange: number,
    deferTradingInSeconds: number,
    fixQuantity: number,
    alwaysUseFixQuantity: boolean,
    keyLevels: keyLevels,
    long: SingleDirectionPlans,
    short: SingleDirectionPlans,
};
export interface VwapCorrection {
    volumeSum: number,
    tradingSum: number,
}

export interface SingleDirectionPlans {
    openingDrive?: OpeningDrivePlan,
    momentum?: MomentumPlan,
    retracement?: RetracementPlan,
    newsBreakout?: NewsBreakoutPlan,
};
export interface keyLevels {
    otherLevels: number[];
};
export enum PlanType {
    Momentum = 'Momentum',
    Retracement = 'Retracement',
    NewsBreakout = 'NewsBreakout',
    OpeningDrive = 'OpeningDrive',
};
export interface BasePlan {
    planType: PlanType,
    targets: ExitTargets,
    planConfigs: PlanConfigs,
};
export interface PlanConfigs {
    setupQuality: SetupQuality,
    entryRules: EntryRules,
    exitRules: ExitRules,
}
export interface EntryRules {
    allowMoreChancesPerDirection: boolean,
}
export interface ExitRules {
    waitTimeInSecondsAfterMarketOpen: number,
    waitTimeInSecondsSinceEntry: number,
    /**
    * number between 0 and 1
    */
    minimumRiskMultipleRequiredForAdjustingExits: number,
    decentCurrentRewardRatio: number,
    decentMaxRewardRatio: number,
}
export interface OpeningDrivePlan extends BasePlan {
    requireReversal: boolean,
    lastDefense: number;
    stopForAgainstVwapLimitOrMarketEntry: number,
}
export interface MomentumPlan extends BasePlan {
};
export interface NewsBreakoutPlan extends BasePlan {
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
export interface ExitTargets {
    priceLevels: number[],
    rrr: number[],
    dailyRanges: number[],
    pinnedPrices: number[],
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