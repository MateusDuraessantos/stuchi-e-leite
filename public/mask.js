export function stringToLowerCase(str) {
  if (!str) return str;

  const base = str.trim().replace(/\s+/g, " ").toLowerCase();
  const parts = base.split(/(\s+|-)/);
  let wordIndex = 0;

  const out = parts.map((part) => {
    if (part.trim() === "" || part === "-") return part;

    const raw = part;

    if (/^\d+$/.test(raw)) {
      wordIndex++;
      return raw;
    }

    wordIndex++;

    return raw.charAt(0).toUpperCase() + raw.slice(1);
  });

  return out.join("");
}