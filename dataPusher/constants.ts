import * as TradingPlans from './models';

/**
 * Use when the top pick was a stock that we usually don't trade.
 * ATR for such stock can be under estimated.
 * It takes 20% at 1R. After that, 
 * the worst is losing 0.6R on the trade. 
 * Risk is almost half reduced. 
 * Then takes a good amount of 60% near 2R or 0.75 ATR, 
 * making it a decent trade.
 * Leaving last 20% for a full ATR.
 */
export const baseHitRareStockTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.6, 1.8, 1.9, 2, 2, 2.5, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.6, 1.8, 1.8, 2, 2.5, 3, 5],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1],
    }
};

/**
 * Use when the top pick was a stock that we frequently trade.
 * ATR for such stock can be under estimated.
 * It takes 20% at 1R. After that, 
 * the worst is losing 0.6R on the trade. 
 * Risk is almost half reduced. 
 * Then takes a good amount of 70% near 2R or 0.5 ATR, 
 * making it a decent trade.
 * Leaving last 10% for a full ATR.
 */
export const baseHitFrequentStockTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.6, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.6, 1.8, 1.8, 1.8, 2.5, 3, 5],
        dailyRanges: [0.45, 0.45, 0.5, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
};

export const tslaStockTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.6, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.6, 1.8, 1.8, 1.8, 2, 2.5, 3],
        dailyRanges: [0.4, 0.4, 0.45, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
};

/**
 * big trade targets are for the best opportunities. 
 * It starts with taking 50% near 2R. Then scaling 30% into 3R and 4R.
 * Leaving last 20% for 5+R. 
 * Not using ATR because ATR will be inacurrate for this type of trades.
 */
export const bigTradeTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [1.5, 1.8, 1.9, 2, 2, 2.5, 3, 3.5, 5, 5],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    },
    minimumTargets: {
        rrr: [1.5, 1.8, 1.9, 2, 2, 2.5, 3, 3.5, 5, 5],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    }
}

/**
 * Most exits are at 1 ATR.
 * Taking first 20% at 1R or half ATR, then the rest at 1 full ATR.
 */
export const atrTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [1.5, 1.5, 1.5, 2, 2, 2.5, 3, 3.5, 5, 10],
        dailyRanges: [0.5, 0.5, 0.8, 0.85, 0.9, 0.95, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.5, 2, 2, 2.5, 3, 3.5, 5, 10],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 0.8, 0.85, 0.9, 0.95, 1, 1, 1, 1.1],
    }
}

/**
 * For stocks that is very likely to move more than 1 ATR.
 * Take first 20% at 1R or 30% at half ATR, 40% at 1 ATR.
 * Scale last 30% after 1-1.3 ATR
 */
export const beyoundAtrTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 2, 2, 2.5, 3, 5, 5, 5],
        dailyRanges: [0.5, 0.5, 0.5, 0.8, 0.9, 1, 1, 1.1, 1.2, 1.3],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.5, 2, 2, 2.5, 2.5, 2.5, 2.5, 2.5],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 0.5, 0.8, 0.9, 1, 1, 1.1, 1.2, 1.3],
    }
}


const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
    }
};
const scaledOutAtrTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 2, 2, 2, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.5, 0.5, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1.0],
    }
};
let futures = [
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 6,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
    },
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 4,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
    },
    {
        symbol: 'US',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        fixQuantity: 2,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
            }
        },
    }
];

export const marketCaps = {
    TSLA: 565000,
    AVGO: 693000,
    ADBE: 205000
}