const formatter = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 1 });

/** Human-readable size in Spanish (Colombia): "662 KB", "9,4 MB". */
export function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${formatter.format(bytes / (1024 * 1024))} MB`;
}
