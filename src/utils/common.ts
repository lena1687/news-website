import { CountryCode } from "@/types";

export function countryCodeToEmoji(countryCode: CountryCode) {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) + OFFSET);

  return String.fromCodePoint(...codePoints);
}

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${day} ${month}, ${year} - ${hours}:${minutes}`;
}
