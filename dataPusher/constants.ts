import * as TradingPlans from './models';

export const scalpConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.Scalp,
    entryRules: {
        allowMoreChancesPerDirection: false,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 0,
        waitTimeInSecondsSinceEntry: 0,
        minimumRiskMultipleRequiredForAdjustingExits: 0.55,
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
        waitTimeInSecondsSinceEntry: 120,
        minimumRiskMultipleRequiredForAdjustingExits: 0.6,
        decentCurrentRewardRatio: 1.5,
        decentMaxRewardRatio: 2
    }
};
export const holdToDayCloseConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
    entryRules: {
        allowMoreChancesPerDirection: true,
    },
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 600,
        waitTimeInSecondsSinceEntry: 180,
        minimumRiskMultipleRequiredForAdjustingExits: 0.7,
        decentCurrentRewardRatio: 2,
        decentMaxRewardRatio: 2.5
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
        decentCurrentRewardRatio: 2,
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
        fixQuantity: 3,
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
    },
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 3,
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