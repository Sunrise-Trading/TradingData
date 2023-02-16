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
            'SHOP': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
            'RBLX': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
        },
        'stocks': [
            'SHOP', 'SPY'
            //'SPY', 'QQQ'
        ],
        'StockCandidates': {
            'SHOP': {
                highQualityNews: 'earnings', volumeSum: 1293646, tradingSum: 61426602, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 132, boxdown: 129.5,
                longOnlyIfAbovePrice: 265, shortOnlyIfBelowPrice: 0,
                keyLevels: [181.71],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-breakout', 's-pullback', 's-pop'],
            },
            'ROKU': {
                highQualityNews: 'earnings', volumeSum: 2396151, tradingSum: 98723182, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 43.25, boxdown: 41,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 43,
                keyLevels: [39.21],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 'b-pullback', 'b-dip', 'b-breakout', 's-pullback', 's-pop'],
            },
            'TSLA': {
                highQualityNews: 'open charging network', volumeSum: 3331493, tradingSum: 709617485, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 214, boxdown: 210,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [214.16, 212.03, 211.45],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pullback', 's-pop', 's-breakout', 'b-dip', 'b-pullback'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 1723409, tradingSum: 708459314, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [413.67],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 'b-pullback', 's-pullback', 's-pop'],
            },
        }
    }
};