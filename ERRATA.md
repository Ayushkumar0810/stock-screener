# Errata

The original brief calls out three deliberate technical mistakes in the source examples. This repository includes corrected implementations and documents the intended corrections here.

1. Indicator math correction
   - The RSI calculation now aligns the first computed value with the end of the warm-up period and preserves output length.

2. WebSocket reconnection correction
   - The websocket server uses a pure price simulator module, while the client hook owns browser-only reconnect logic with exponential backoff.

3. Type definition correction
   - The shared types keep stock, filter, chart, and websocket payloads explicit so the app and tests can stay strongly typed.
