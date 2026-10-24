import assert from "node:assert/strict";
import { test } from "node:test";
import { formatPrice, pickCurrency } from "./currency.ts";

test("saved choice wins over time zone", () => {
  assert.equal(pickCurrency("USD", "Asia/Manila"), "USD");
  assert.equal(pickCurrency("PHP", "America/New_York"), "PHP");
});

test("time zone decides when nothing is saved", () => {
  assert.equal(pickCurrency(null, "Asia/Manila"), "PHP");
  assert.equal(pickCurrency(null, "America/New_York"), "USD");
  assert.equal(pickCurrency("garbage", "Europe/London"), "USD");
  assert.equal(pickCurrency(undefined, undefined), "USD");
});

test("prices format per currency", () => {
  assert.equal(formatPrice(300, "USD"), "$300");
  assert.equal(formatPrice(18000, "PHP"), "₱18,000");
});
