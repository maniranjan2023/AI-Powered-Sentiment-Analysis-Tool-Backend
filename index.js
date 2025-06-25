import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ruleBasedSentiment } from './sentiment.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/analyze', async (req, res) => {
  const { review } = req.body;
  const ruleBasedResult = ruleBasedSentiment(review);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1',
        messages: [
          { role: 'system', content: "You're a sentiment analysis assistant. Given a movie review, determine whether it's Positive, Negative, or Neutral. Give a brief explanation as well." },
          { role: "user", content: `Review: ${review}` }
        ],
        temperature: 0.3,
        max_tokens: 800
      })
    });

    const data = await response.json();
    // The OpenAI API returns the message content as a string, not JSON
    // So just send the content as is, or parse if you expect JSON
    res.json({ ruleBased: ruleBasedResult, gpt: data.choices[0].message.content });
  } catch (err) {
    console.error("AI response failed", err);
    res.status(500).json({ error: "AI response failed" });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
