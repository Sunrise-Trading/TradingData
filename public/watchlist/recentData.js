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
            'AMZN': {
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
            'MSFT', 'QQQ',
            'QQQ', 'SPY'
        ],
        'StockCandidates': {
            'MSFT': {
                highQualityNews: 'earnings guidance weak', volumeSum: 787275, tradingSum: 185644650, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [74.41, 75],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop'],
            },
            'AMZN': {
                highQualityNews: 'MSFT cloud weak', volumeSum: 1389332, tradingSum: 130040175, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [51.14, 50, 48.94],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop'],
            },
            'TSLA': {
                highQualityNews: 'downgrade', volumeSum: 1933304, tradingSum: 262802545, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 127.5, boxdown: 125,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [129.71, 127.88, 124.75, 124.13, 123.71, 115, 114.45, 113, 123.52, 122.63, 118.46, 120, 116, 114, 104.64, 107.16, 108.24],
                longTargets: [],
                shortTargets: [],
                tradingPlans: [],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 1409993, tradingSum: 401489874, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [273.74, 275.17, 272, 264.89, 263.8],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop', 'b-dip', 's-breakdown'],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 1221373, tradingSum: 484886849, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [397.06, 394.35, 394.68, 395.65, 393.7, 393, 392.42, 390.2, 389.61, 381.84, 383.77, 384.5],
                longTargets: [],
                shortTargets: [],
                tradingPlans: ['s-pop', 'b-dip', 's-breakdown'],
            },
        }
    }
};