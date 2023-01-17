window.TradingData = {
    'Settings': {
        'currentDayStr': '', // 2023-12-2 6:30
        'activeProfileName': "momentumSimple",  // momentumSimple, momentumEquities, momentumScalp, fomc;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESH23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'checklist': {
            'COIN': {
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
            'BABA': {
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
        },
        'stocks': [
            'TSLA',
            'BABA',
            'COIN',
            'RBLX',
        ],
        'StockCandidates': {
            'TSLA': {
                highQualityNews: 'hertz deal', volumeSum: 3194941, tradingSum: 399255133, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 126.5, boxdown: 124,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [129.71, 127.88, 124.75, 124.13, 123.71, 115, 114.45, 113, 123.52, 122.63, 118.46, 120, 116, 114, 104.64, 107.16, 108.24],
                longTargets: [],
                shortTargets: []
            },
            'COIN': {
                highQualityNews: 'crypto strong over the weekend', volumeSum: 417682, tradingSum: 22033023, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 53.75, boxdown: 52,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [5.28],
                longTargets: [],
                shortTargets: []
            },
            'BABA': {
                highQualityNews: ' Ryan Cohen built stake', volumeSum: 317587, tradingSum: 37224178, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 114, boxdown: 112,
                longOnlyIfAbovePrice: 111.98, shortOnlyIfBelowPrice: 0,
                keyLevels: [115.5, 112, 110],
                longTargets: [],
                shortTargets: []
            },
            'RBLX': {
                highQualityNews: 'user data', volumeSum: 1074575, tradingSum: 40927924, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 39, boxdown: 37,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [273.74, 275.17, 272, 264.89, 263.8],
                longTargets: [],
                shortTargets: []
            },
            'QQQ': {
                highQualityNews: 'user data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [273.74, 275.17, 272, 264.89, 263.8],
                longTargets: [],
                shortTargets: []
            },
            'SPY': {
                highQualityNews: 'jobless data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [394.35, 394.68, 395.65, 393.7, 393, 392.42, 390.2, 389.61, 381.84, 383.77, 384.5],
                longTargets: [],
                shortTargets: []
            },
        }
    }
};