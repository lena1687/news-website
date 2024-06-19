import { CountryCode } from "@/types/commonTypes";

export function countryCodeToEmoji(countryCode: CountryCode) {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) + OFFSET);

  return String.fromCodePoint(...codePoints);
}
