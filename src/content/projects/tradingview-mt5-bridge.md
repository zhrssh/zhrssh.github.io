---
title: "Trading alerts to MT5, without the 10-account cap"
description: "A forex trading team moved off PineConnector to a TradingView-to-MT5 bridge of their own: no cap on accounts, an alert the moment something fails, and one dashboard for all of it."
date: 2026-10-24
tags: ["TradingView", "MetaTrader 5"]
impact: "From a 10-account cap to unlimited accounts"
writeupPending: true
---

## Where they started

The team runs its strategies in TradingView and places trades through MetaTrader 5 (MT5). Something has to carry each TradingView alert across to MT5 as an order, and they were paying PineConnector to do it.

Their PineConnector plan capped them at 10 accounts. Every account they wanted to add meant hitting that ceiling. And if an MT5 terminal went quiet, nobody found out until a trade they expected didn't happen.

## What I built

Their own bridge from TradingView to MT5, built as part of my ongoing work with the team:

- **No account cap.** TradingView alerts become MT5 orders on as many accounts as they want to run.
- **Alerts when something goes wrong.** The team hears about it when an MT5 terminal goes down, or when an alert fires and MT5 doesn't act on it.
- **One dashboard.** Every account in one place, with the alerts and strategies running on each.

## Where it is now

It's just been handed over. A fuller write-up will follow once the team has lived with it for a while and shared their review.
