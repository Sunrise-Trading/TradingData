window.TradingData = {
    'Settings': {
        'currentDayStr': '', // 2023-12-2 6:30
        'activeProfileName': "momentumSimple",  // momentumEquities, momentumScalp, fomc;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESH23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'checklist': {
            'BABA': {
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
            'NVDA': {
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
            'NVDA',
            'SPY',
        ],
        'StockCandidates': {
            'TSLA': {
                highQualityNews: 'says under valued', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 122, boxdown: 119,
                longOnlyIfAbovePrice: 118.40, shortOnlyIfBelowPrice: 0,
                keyLevels: [123.5, 122, 118.46, 120, 116, 114, 104.64, 107.16, 108.24],
                longTargets: [],
                shortTargets: []
            },
            'NVDA': {
                highQualityNews: 'downgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 157, boxdown: 154.5,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [155.21],
                longTargets: [],
                shortTargets: []
            },
            'BABA': {
                highQualityNews: 'upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 114, boxdown: 112,
                longOnlyIfAbovePrice: 111.98, shortOnlyIfBelowPrice: 0,
                keyLevels: [112, 110],
                longTargets: [],
                shortTargets: []
            },
            'QQQ': {
                highQualityNews: 'job data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [272, 264.89, 263.8],
                longTargets: [],
                shortTargets: []
            },
            'SPY': {
                highQualityNews: 'jobless data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longOnlyIfAbovePrice: 0, shortOnlyIfBelowPrice: 0,
                keyLevels: [389.61, 381.84, 383.77, 384.5],
                longTargets: [],
                shortTargets: []
            },
        }
    }
};