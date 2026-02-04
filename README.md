# Binance Silver WebSocket Tracker

A minimal real-time WebSocket project built to understand how live data flows from an external source to a browser.

[Live Demo](https://vanisharmaa.github.io/websocket-binance)

## What this project does

- Connects to **Binance Futures WebSocket** for live **silver (XAGUSDT)** prices
- Runs a **Node.js WebSocket server**
- Streams the latest price to connected browser clients in real time
- Updates the UI without polling or page refresh

---

## Why this project exists

This is a **learning-focused project**, not a production finance app.

The goal was to understand:

- How WebSockets differ from HTTP
- How long-lived connections work
- How a server can act as a relay/broadcaster
- How real-time data streams behave (noise, timing issues, partial data)

---

## Architecture

```
Binance WebSocket
↓
Node.js WebSocket Server
↓
Browser Client
```

---

## Key concepts learned

- `WebSocketServer` vs `WebSocket`
- `ws://` vs `wss://`
- WebSocket upgrade (`101 Switching Protocols`)
- Why WebSocket connections appear as **pending**
- Validating streaming data before broadcasting

---

## How this fits into bigger projects

This pattern is the foundation for:

- Live dashboards
- Chat applications
- Price tickers
- Multiplayer games
- Collaborative real-time tools

Any system that requires **real-time updates** builds on this exact flow.
