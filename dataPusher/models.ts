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
export interface OpeningDrivePlan {
    lastDefense: number;
}
export interface MomentumPlan {
    breakoutLevels: number[];
};
export interface RetracementPlan {
    entryAreas: PriceArea[];
    allowAgainstVwap: boolean;
    lastDefense: number,
    vwapArea?: IndicatorArea,
    openPriceArea?: IndicatorArea,
};
export interface IndicatorArea {
    upperRoom: number,
    lowerRoom: number,
};
export interface PriceArea {
    priceLevel: number,
    upperRoom: number,
    lowerRoom: number,
}
