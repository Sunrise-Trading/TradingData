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

Fill `midpointCheck` directly in each setup. Set it halfway between the setup's
trigger price and the nearest edge of the planned target area.
Use its high for shorts and its low for longs. **Below the midpoint is too
late for the opening short; above it is too late for the opening long.**
For example, a short setup with a 181.46 trigger and a 170–165 target area has a
midpoint of 175.73.
Zero values are unfilled placeholders. These are planning reminders;
bot enforcement is not wired up yet.

## Deploy

```
firebase deploy --only hosting
```
