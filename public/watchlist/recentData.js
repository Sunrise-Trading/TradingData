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
            'BIDU': {
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
            'MSFT': {
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
            'BIDU', 'MSFT',
            //'SPY', 'QQQ'
        ],
        'StockCandidates': {
            'MSFT': {
                highQualityNews: 'chatGPT', volumeSum: 246990, tradingSum: 64132015, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 185, boxdown: 182,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [181.71],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop', 'b-pullback', 's-breakout', 'b-breakout'],
            },
            'BIDU': {
                highQualityNews: 'launch AI bot', volumeSum: 738884, tradingSum: 119633410, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [91.4],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop', 's-pullback', 's-breakout'],
            },
            'TSLA': {
                highQualityNews: 'earnings', volumeSum: 3156840, tradingSum: 610480141, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [160, 156, 152.5, 150],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 'b-dip', 'b-pullback', 'b-breakout'],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 698985, tradingSum: 212712506, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [303.43, 304.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 's-pullback', 's-pop', 's-breakout'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 1172512, tradingSum: 490867467, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [413.67],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['b-open', 's-pullback', 's-pop', 's-breakout'],
            },
        }
    }
};