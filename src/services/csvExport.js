// CSV Export utility — Lumora Synth
// Converts quote form data into CSV format for export

export function quoteToCSV(quoteData) {
  const headers = Object.keys(quoteData);
  const values = Object.values(quoteData).map((val) => {
    if (typeof val === 'object') return JSON.stringify(val);
    const escaped = String(val).replace(/"/g, '""');
    return `"${escaped}"`;
  });

  const csv = [headers.join(','), values.join(',')].join('\n');
  return csv;
}

export function downloadCSV(csvContent, filename = 'quote.csv') {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// Usage example:
// const csvString = quoteToCSV(formState);
// downloadCSV(csvString, `quote-${Date.now()}.csv`);
