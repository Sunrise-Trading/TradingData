window.TradingData = {
    'Settings': {
        'currentDayStr': '', // 2023-12-2 6:30
        'activeProfileName': "momentumSimple",  // momentumSimple, momentumEquities, momentumScalp, fomc;
        'systemProfileName': 'dt', // testTDA
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESH23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'checklist': {
            'META': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
            'TSLA': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
            'SPY': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
            'QQQ': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
        },
        'stocks': [
            'META',
            //'SPY', 'QQQ'
        ],
        'StockCandidates': {
            'MSFT': {
                highQualityNews: 'multiple upgrade', volumeSum: 699308, tradingSum: 189743429, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 185, boxdown: 182,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [181.71],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 'b-pullback', 'b-dip', 'b-breakout'],
            },
            'META': {
                highQualityNews: 'layoff', volumeSum: 3671670, tradingSum: 40528223, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 11.5, boxdown: 10.75,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [11.5, 11.75, 12, 12.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pullback', 's-pop', 's-breakout'],
            },
            'TSLA': {
                highQualityNews: 'no blame', volumeSum: 3128219, tradingSum: 650147133, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [206, 206.5, 207.6],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pop', 'b-pullback'],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 409606979, tradingSum: 1369744, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [303.43, 304.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 'b-pullback', 's-pop'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 478252304, tradingSum: 1180509, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [413.67],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 'b-pullback', 's-pop'],
            },
        }
    }
};