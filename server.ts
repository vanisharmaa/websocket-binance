import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer(
  {
    port: 8080,
  },
  () => {
    console.log("here 1");
  },
);

let latestPrice = null;
const BINANCE_SILVER_URI = "wss://fstream.binance.com/ws/xagusdt@trade";

const ws = new WebSocket(BINANCE_SILVER_URI);

ws.on("open", () => {
  console.log("connection to Binance made hehe");
});
ws.on("message", (rawData: WebSocket.RawData) => {
  /**
   * data = {
      e: 'trade',
      E: 1770179281963,
      T: 1770179281963,
      s: 'XAGUSDT',
      t: 16848551,
      p: '87.7900',
      q: '0.639',
      X: 'MARKET',
      m: false
    }
   */
  const data = JSON.parse(rawData);
  if (!data.p || data.p === "0") return;
  latestPrice = data.p;
});
wss.on("connection", (client) => {
  const interval: NodeJS.Timeout = setInterval(() => {
    if (latestPrice) {
      client.send(JSON.stringify({ price: latestPrice }));
    }
  }, 1000);

  client.on("close", () => {
    clearInterval(interval);
  });
});
