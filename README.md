# TradingData

Daily watchlist and configuration data consumed by the trading bot in
[`../ViteApp`](../ViteApp) (the "Hybrid App"). Served as static files via
**Firebase Hosting**. Part of the trading workspace — see
[`../AGENTS.md`](../AGENTS.md) for the overall architecture.

## Layout

- `dataPusher/` — TypeScript script that builds and pushes the daily data
  (`pusher.ts`, `data.ts`, `dataTemplate.ts`, `models.ts`).
- `public/` — static files that get deployed to Firebase Hosting.
- `agent/`, `review/`, `das/` — supporting notes and per-broker (DAS) data.

## Data pusher

```
cd dataPusher
npm install -g typescript
npm install
# then run per command.sh
```

## Daily setup levels

Fill `triggerLevel`, `mainTargetZone: { high, low }`, and `midpointCheck`
directly in each setup. Midpoint = (trigger + nearest target edge) / 2;
use zone high for shorts and zone low for longs. **Below the midpoint is too
late for the opening short; above it is too late for the opening long.**
For NVDA's configured 181.46 trigger and 170–165 zone, the midpoint is 175.73.
Zero values are unfilled placeholders. These are planning reminders;
bot enforcement is not wired up yet.

## Deploy

```
firebase deploy --only hosting
```
