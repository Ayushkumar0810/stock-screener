# Performance Report

This file is included to satisfy the project brief. The metrics below are the target values the implementation is designed for.

## Targets

- LCP: under 2.5s
- Filter response time: under 200ms for 5,000 rows
- Sort response time: under 150ms for 5,000 rows
- Scroll FPS: above 55 FPS
- WebSocket latency: under 50ms from receipt to render
- CLS: under 0.1

## Optimizations Used

- Virtualized table rows with TanStack Virtual
- Derived data calculation outside render paths
- Zustand selectors to keep state subscriptions narrow
- Dynamic chart rendering on the client only
- Memoized cell renderers for expensive grid cells

## Measurement Notes

Use Lighthouse, React DevTools Profiler, and Chrome Performance to capture:

- initial load
- filter interaction latency
- scroll performance
- live price update response

## Evidence To Add Later

- Lighthouse screenshots
- bundle analyzer screenshots
- before/after benchmark table
