// Utility to resolve bilingual { en, pt } fields in data objects

export function localizeItem(item, lang) {
  if (!item || typeof item !== 'object') return item;
  const result = { ...item };
  for (const key of Object.keys(result)) {
    const val = result[key];
    if (val && typeof val === 'object' && !Array.isArray(val) && 'en' in val && 'pt' in val) {
      result[key] = val[lang] ?? val.en;
    }
  }
  return result;
}

export function localizeList(items, lang) {
  return items.map((item) => localizeItem(item, lang));
}
