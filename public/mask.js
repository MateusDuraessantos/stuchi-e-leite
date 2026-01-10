export function stringToLowerCase(str) {
  if (!str) return str;

  const lowerWords = new Set([
    "de", "da", "do", "das", "dos",
    "a", "o", "as", "os",
    "e",
    "em", "no", "na", "nos", "nas",
    "por", "para", "com", "sem",
    "ao", "à", "aos", "às",
    "um", "uma", "uns", "umas"
  ]);

  const base = str.trim().replace(/\s+/g, " ");
  const parts = base.split(/(\s+|-)/);

  let wordIndex = 0;

  const out = parts.map((part) => {
    // mantém separadores (espaços e hífen)
    if (part.trim() === "" || part === "-") return part;

    if (part.toLowerCase() === 'ii') return part

    const raw = part.toLowerCase();

    // números
    if (/^\d+$/.test(raw)) {
      wordIndex++;
      return raw;
    }

    // se não for a primeira palavra e estiver na lista -> mantém minúscula
    if (wordIndex > 0 && lowerWords.has(raw)) {
      wordIndex++;
      return raw;
    }

    // padrão: capitaliza
    wordIndex++;
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  });

  return out.join("");
}
