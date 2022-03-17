export function formatDate(date) {
  return new Date(date).toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}
