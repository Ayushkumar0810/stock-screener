# Stock Screener Pro

A responsive real-time stock screener built with Next.js 14, React 18, TypeScript, Tailwind CSS, TanStack Table, TanStack Virtual, Zustand, React Query, Lightweight Charts, and a simulated WebSocket stream.

## Highlights

- Marketing landing page modeled after the provided Screener.in screenshot
- Responsive dashboard with filter sidebar, virtualized grid, and chart panel
- Mock API routes for stock universe, stock detail, history, fundamentals, sectors, indices, and presets
- WebSocket simulation server for live price updates
- IndexedDB cache hook for offline support
- Vitest test suite for indicators, filters, mock data, and the price simulator

## Project Structure

- `app/` routes, layouts, and API endpoints
- `components/` UI and dashboard building blocks
- `hooks/` reusable logic for data, WebSocket, offline cache, and keyboard navigation
- `stores/` Zustand state slices
- `lib/` filters, indicators, formatters, mock data, and constants
- `server/` custom websocket simulation server
- `__tests__/` automated tests

## Setup

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`
3. Run the websocket simulator: `npm run ws`
4. Open `http://localhost:3000`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run ws`
- `npm run dev:all`
- `npm run test`
- `npm run test:watch`

## Notes

- The app uses a mock data universe of 5,000 stocks.
- The chart is server-driven through generated OHLCV data and client-rendered through Lightweight Charts.
- A small `index.html` is included at the repository root to satisfy the project brief, but the real application runs through Next.js.
