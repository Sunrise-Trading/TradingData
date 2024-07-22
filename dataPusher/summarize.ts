import * as Data from './data';

let stockTradingPlans = Data.stocksTradingPlans;
let stockSelections = Data.stockSelections;

stockTradingPlans.forEach(plan => {
    let symbol = plan.symbol;
    if (!stockSelections.includes(symbol)) {
        return;
    }
    let analysis = plan.analysis;
    let msg = `[${symbol}]\n`;
    msg += `ATR: $${plan.atr.average}, gap size: $${analysis.gapSize}.\n`;
    msg += `Weekly chart: ${analysis.weeklychart}.\n`;
    msg += `Daily chart: ${analysis.dailyChart}.\n`;
    msg += `Hourly chart: ${analysis.hourlyChart}.\n`;
    msg += `Premarket chart: ${analysis.premarketChart}.\n`;
    msg += `Summary:\n${plan.summary.trim()}\n`;
    msg += `Reasons for long:\n`;
    plan.long.reasons.forEach(reason => {
        msg += `* ${reason}\n`;
    });
    msg += `Reasons for short:\n`;
    plan.short.reasons.forEach(reason => {
        msg += `* ${reason}\n`;
    });

    console.log(msg);
});

