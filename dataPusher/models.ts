export interface TradingPlans {
    symbol: string,
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
};
export interface keyLevels {
    otherLevels: number[];
};
export interface BasePlan {
    targets: ExitTargets;
};
export interface OpeningDrivePlan extends BasePlan {
    lastDefense: number;
}
export interface MomentumPlan extends BasePlan {
    breakoutLevels: number[];
};
export interface RetracementPlan {
    entryAreas: RetracementArea[];
    allowAgainstVwap: boolean;
    lastDefense: number,
    vwapArea?: IndicatorArea,
    openPriceArea?: IndicatorArea,
};
export interface RetracementArea {
    priceArea: PriceArea,
    targets: ExitTargets,
};
export interface ExitTargets {
    priceLevels: number[],
    rrr: number[],
}
export interface IndicatorArea {
    upperRoom: number,
    lowerRoom: number,
};
export interface PriceArea {
    priceLevel: number,
    upperRoom: number,
    lowerRoom: number,
}
