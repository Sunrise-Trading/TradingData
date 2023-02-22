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
            'SPY': {
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
            'PANW': {
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
            'PANW',
        ],
        'StockCandidates': {
            'PANW': {
                highQualityNews: 'earnings', volumeSum: 470855, tradingSum: 86200075, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 71.5, boxdown: 69,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [183.75, 190, 180, 179.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 'b-breakout', 'b-pullback', 'b-dip'],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 1100554, tradingSum: 327952538, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 43.25, boxdown: 41,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 43,
                keyLevels: [303.15],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 's-pullback', 's-pop', 's-breakout'],
            },
            'TSLA': {
                highQualityNews: 'mining', volumeSum: 1585092, tradingSum: 325968169, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 202, boxdown: 198.50,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [199, 201.84, 206],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 's-pullback', 's-pop', 's-breakout', 'b-dip', 'b-pullback'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 1087774, tradingSum: 439423501, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [407],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 's-pullback', 's-pop', 's-breakout'],
            },
        }
    }
};