export function getReadingTime(body: string) {
  const wordsPerMinute = 200;
  const words = body.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
