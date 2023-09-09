import * as TradingPlans from './models';

/**
 * base hit targets takes 30% at 1R. After that, 
 * the worst is losing 0.4R on the trade. 
 * Risk is much smaller. 
 * Then takes a good amount of 40% near 2R, 
 * making it a decent trade.
 * Leaving last 30% for a full ATR.
 */
export const baseHitTargets: TradingPlans.ExitTargetsSet = {
    rrr: [0.9, 0.95, 1, 1.5, 1.8, 1.9, 2, 3, 4, 5],
    priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dailyRanges: [0.4, 0.4, 0.45, 0.7, 0.8, 0.9, 0.9, 1, 1, 1],
};

/**
 * big trade targets are for the best opportunities. 
 * It starts with taking 50% near 2R. Then scaling 30% into 3R and 4R.
 * Leaving last 20% for 5+R. 
 * Not using ATR because ATR will be inacurrate for this type of trades.
 */
export const bigTradeTargets: TradingPlans.ExitTargetsSet = {
    rrr: [1.5, 1.8, 1.9, 2, 2, 2.5, 3, 3.5, 5, 5],
    priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
}

/**
 * Taking first 30% at 1R or half ATR, then the rest at 1 full ATR.
 */
export const atrTargets: TradingPlans.ExitTargetsSet = {
    rrr: [0.9, 0.95, 1, 2, 2, 2.5, 3, 3.5, 5, 5],
    priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dailyRanges: [0.5, 0.5, 0.5, 0.8, 0.9, 1, 1, 1, 1, 1],
}

/**
 * For stocks that is very likely to move more than 1 ATR.
 * Take first 30% at 1R or half ATR, 40% at 1 ATR.
 * Scale last 30% after 1-1.3 ATR
 */
export const beyondAtrTargets: TradingPlans.ExitTargetsSet = {
    rrr: [0.9, 0.95, 1, 2, 2, 2.5, 3, 5, 5, 5],
    priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dailyRanges: [0.5, 0.5, 0.5, 0.8, 0.9, 1, 1, 1.1, 1.2, 1.3],
}

export const scalpConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.Scalp,
    entryRules: {
        allowMoreChancesPerDirection: true,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 0,
        waitTimeInSecondsSinceEntry: 0,
        minimumRiskMultipleRequiredForAdjustingExits: 0.45,
        decentCurrentRewardRatio: 0.8,
        decentMaxRewardRatio: 1.5
    }
};
export const dayTradeConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.DayTrade,
    entryRules: {
        allowMoreChancesPerDirection: true,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 300,
        waitTimeInSecondsSinceEntry: 180,
        minimumRiskMultipleRequiredForAdjustingExits: 0.45,
        decentCurrentRewardRatio: 1.5,
        decentMaxRewardRatio: 1.8
    }
};
export const holdToDayCloseConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
    entryRules: {
        allowMoreChancesPerDirection: true,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 600,
        waitTimeInSecondsSinceEntry: 300,
        minimumRiskMultipleRequiredForAdjustingExits: 0.7,
        decentCurrentRewardRatio: 1.8,
        decentMaxRewardRatio: 2
    }
};
export const swingTradeConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.Swing,
    entryRules: {
        allowMoreChancesPerDirection: true,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 900,
        waitTimeInSecondsSinceEntry: 600,
        minimumRiskMultipleRequiredForAdjustingExits: 0.8,
        decentCurrentRewardRatio: 1.8,
        decentMaxRewardRatio: 2.5
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
]