window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        'stocks': [
            'AAPL',
            'TSLA',
            'MDB',
            'CVNA'
        ],
        'StockCandidates': {
            'CVNA': {
                highQualityNews: 'wedbush cut price from $9 to $1', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 120,
                initialBias: 0,
                boxup: 90, boxdown: 88,
                longTargets: [],
                shortTargets: [{ price: 89, percentage: 0.1 }]
            },
            'MDB': {
                highQualityNews: 'earnings beat', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 183.5, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 173.5, percentage: 0.2 }]
            },
            'AAPL': {
                highQualityNews: 'morgan stanley cuts iphone estimates', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 54.5, boxdown: 53,
                longTargets: [{ price: 153, percentage: 0.1 }],
                shortTargets: [{ price: 145, percentage: 0.1 }]
            },
            'BABA': {
                highQualityNews: 'china news', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 94.5, boxdown: 92.5,
                longTargets: [],
                shortTargets: [{ price: 92, percentage: 0.1 }],
            },
            'TSLA': {
                highQualityNews: 'Labor Disaster At Giga Berlin', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 177, boxdown: 173,
                longTargets: [],
                shortTargets: [{ price: 186, percentage: 0.1 }]
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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