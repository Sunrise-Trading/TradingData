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
            'MSFT': {
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
            'TSLA': {
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
            'TSLA', 'SPY', 'QQQ'
        ],
        'StockCandidates': {
            'MSFT': {
                highQualityNews: 'earnings guidance weak', volumeSum: 787275, tradingSum: 185644650, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 236, boxdown: 232.5,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [230],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop', 's-pullback', 's-breakout'],
            },
            'AMZN': {
                highQualityNews: 'MSFT cloud weak', volumeSum: 1389332, tradingSum: 130040175, premktHigh: 0, premktLow: 99999999,
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
                highQualityNews: 'earnings', volumeSum: 6332448, tradingSum: 985109596, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [160, 156, 152.5, 150],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pullback', 'b-pullback', 'b-breakout'],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 366014449, tradingSum: 1261257, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [273.74, 275.17, 272, 264.89, 263.8],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pullback', 'b-pullback', 'b-breakout'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 1421392, tradingSum: 571703066, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [397.06, 394.35, 394.68, 395.65, 393.7, 393, 392.42, 390.2, 389.61, 381.84, 383.77, 384.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-open', 's-pullback', 'b-pullback', 'b-breakout'],
            },
        }
    }
};