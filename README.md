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

## Deploy

```
firebase deploy --only hosting
```
