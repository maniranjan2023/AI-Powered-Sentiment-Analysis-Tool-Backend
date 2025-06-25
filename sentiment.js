export function ruleBasedSentiment(text) {
  const positiveWords = ['good', 'great', 'amazing', 'excellent', 'fantastic', 'love', 'enjoyed'];
  const negativeWords = ['bad', 'terrible', 'poor', 'boring', 'hate', 'awful', 'worst'];

  let posCount = 0, negCount = 0;
  const words = text.toLowerCase().split(/\W+/);

  for (let word of words) {
    if (positiveWords.includes(word)) posCount++;
    if (negativeWords.includes(word)) negCount++;
  }

  let sentiment = 'Neutral';
  if (posCount > negCount) sentiment = 'Positive';
  else if (negCount > posCount) sentiment = 'Negative';

  return {
    sentiment,
    explanation: `Found ${posCount} positive and ${negCount} negative words.`,
  };
}