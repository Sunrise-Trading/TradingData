window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumScalp",  //"momentumEquities", momentumScalp, fomc;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESH23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'checklist': {
            'TSLA': {
                "Read news carefully": false, "Review 1 minute chart": false,
                "Review hourly chart": false, "Review daily chart": false,
                "Review weekly chart ": false, "Draw nearest price levels": false,
                "Check whether it gap up/down above/below support/resistance": false,
            },
            'META': {
                "Read news carefully": false, "Review 1 minute chart": false,
                "Review hourly chart": false, "Review daily chart": false,
                "Review weekly chart ": false, "Draw nearest price levels": false,
                "Check whether it gap up/down above/below support/resistance": false,
            },
            'QQQ': {
                "Read news carefully": false, "Review 1 minute chart": false,
                "Review hourly chart": false, "Review daily chart": false,
                "Review weekly chart ": false, "Draw nearest price levels": false,
                "Check whether it gap up/down above/below support/resistance": false,
            },
            'SPY': {
                "Read news carefully": false, "Review 1 minute chart": false,
                "Review hourly chart": false, "Review daily chart": false,
                "Review weekly chart ": false, "Draw nearest price levels": false,
                "Check whether it gap up/down above/below support/resistance": false,
            },
        },
        'stocks': [
            'TSLA',
            'QQQ',
            'SPY',
        ],
        'StockCandidates': {
            'META': {
                highQualityNews: 'settlement penalty', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 162, boxdown: 160.5,
                longTargets: [],
                shortTargets: [{ price: 157, percentage: 0.1 }]
            },
            'TSLA': {
                highQualityNews: 'Elon tells employee', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 121, boxdown: 118,
                longTargets: [],
                shortTargets: [{ price: 135, percentage: 0.1 }]
            },
            'QQQ': {
                highQualityNews: 'jobless data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: []
            },
            'SPY': {
                highQualityNews: 'jobless data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: []
            },
        }
    }
};