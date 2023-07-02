import * as TradingPlans from './models';

export const scalpConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.Scalp,
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 0,
        minimumRiskMultipleRequiredForAdjustingExits: 0.55,
        decentCurrentRewardRatio: 0.8,
        decentMaxRewardRatio: 1.5
    }
};
export const dayTradeConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.DayTrade,
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 300,
        minimumRiskMultipleRequiredForAdjustingExits: 0.6,
        decentCurrentRewardRatio: 1.5,
        decentMaxRewardRatio: 2
    }
};
export const holdToDayCloseConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.HoldToDayClose,
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 600,
        minimumRiskMultipleRequiredForAdjustingExits: 0.7,
        decentCurrentRewardRatio: 2,
        decentMaxRewardRatio: 2.5
    }
};
export const swingTradeConfig: TradingPlans.PlanConfigs = {
    setupQuality: TradingPlans.SetupQuality.Swing,
    exitRules: {
        waitTimeInSecondsAfterMarketOpen: 900,
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