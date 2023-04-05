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
            'GOOGL': {
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
            'GOOGL'
        ],
        'StockCandidates': {
            'TSLA': {
                highQualityNews: 'delivery numbers no good', volumeSum: 3326166, tradingSum: 669614388, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: [],
            },
            'GOOGLE': {
                highQualityNews: 'chips news', volumeSum: 370475, tradingSum: 39288936, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: [],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 3716748, tradingSum: 1075250136, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: [],
            },
            'KRE': {
                highQualityNews: 'big banks support regional banks', volumeSum: 746370, tradingSum: 33736025, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: [],
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 685764, tradingSum: 279867488, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [],
                shortTargets: [],
            },
        }
    }
};