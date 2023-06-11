export interface TradingPlans {
    symbol: string,
    isFutures?: boolean,
    vwapCorrection: VwapCorrection,
    dailyRange: number,
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
export interface BasePlan {
    targets: ExitTargets;
    setupQuality: SetupQuality;
};
export interface OpeningDrivePlan extends BasePlan {
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