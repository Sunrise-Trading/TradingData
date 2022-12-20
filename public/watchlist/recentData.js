window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities", momentumScalp, fomc;
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
            'AAPL': {
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
            'AAPL',
            'QQQ',
            'SPY',
        ],
        'StockCandidates': {
            'AAPL': {
                highQualityNews: 'price cuts JP morgan', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 119, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 116.83, percentage: 0.1 }]
            },
            'AMZN': {
                highQualityNews: 'EU approval', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 119, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 116.83, percentage: 0.1 }]
            },
            'TSLA': {
                highQualityNews: 'downgrade and price cuts', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 148, boxdown: 145.5,
                longTargets: [{ price: 157, percentage: 0.1 }],
                shortTargets: []
            },
            'QQQ': {
                highQualityNews: 'post fomc', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [{ price: 384.8, percentage: 0.2 }],
                shortTargets: []
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [{ price: 384.8, percentage: 0.2 }],
                shortTargets: []
            },
        }
    }
};