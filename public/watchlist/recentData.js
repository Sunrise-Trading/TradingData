window.TradingData = {
    'Settings': {
        'currentDayStr': '', // 2023-2-23 6:30
        'activeProfileName': "momentumSimple",  // momentumSimple, momentumEquities, momentumScalp, fomc;
        'systemProfileName': 'dt', // testTDA
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESM23', 'MNQM23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'checklist': {
            'TSLA': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
            'COST': {
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
            'SPY': {
                "Read news carefully": true, "Review 1 minute chart": true,
                "Review hourly chart": true, "Review daily chart": true,
                "Review weekly chart ": true, "Draw nearest price levels": true,
                "Check whether it gap up/down above/below support/resistance": true,
            },
        },
        'stocks': [
            'TSLA',
        ],
        'StockCandidates': {
            'TSLA': {
                highQualityNews: 'master plan',
                deferTradingInSeconds: 0,
                longTargets: [],
                shortTargets: [],
            },
            'GOOGL': {
                highQualityNews: 'chips news',
                deferTradingInSeconds: 0,
                longTargets: [],
                shortTargets: [],
            },
            'QQQ': {
                highQualityNews: 'data',
                deferTradingInSeconds: 0,
                longTargets: [],
                shortTargets: [],
            },
            'KRE': {
                highQualityNews: 'big banks support regional banks',
                deferTradingInSeconds: 0,
                longTargets: [],
                shortTargets: [],
            },
            'SPY': {
                highQualityNews: 'data',
                deferTradingInSeconds: 0,
                longTargets: [],
                shortTargets: [],
            },
        }
    }
};