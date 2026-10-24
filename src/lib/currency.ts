export type Currency = "USD" | "PHP";

// Saved toggle choice wins; otherwise a Philippine time zone means a local client.
export function pickCurrency(saved: string | null | undefined, timeZone: string | undefined): Currency {
  if (saved === "USD" || saved === "PHP") return saved;
  return timeZone === "Asia/Manila" ? "PHP" : "USD";
}

export function formatPrice(amount: number, currency: Currency): string {
  return new Intl.NumberFormat(currency === "PHP" ? "en-PH" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
