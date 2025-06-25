# AI-Powered Sentiment Analysis Tool (Backend)

This is the backend for the AI-Powered Sentiment Analysis Tool, built with **Node.js** and **Express**. It provides RESTful APIs for analyzing movie reviews using both rule-based and GPT-4 powered AI models.

## Features

- REST API for sentiment analysis
- Rule-based and GPT-4 (OpenAI) sentiment models
- CORS enabled for frontend communication
- Environment variable support with dotenv

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)


### Installation

1. Clone the repository and navigate to the `backend` folder:

   ```sh
   git clone <your-repo-url>
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:

   ```
   PORT=5000
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Server

Start the server with:

```sh
npm start
```

Or, for development with auto-reload:

```sh
npx nodemon index.js
```

The backend will run on [http://localhost:5000](http://localhost:5000) by default.

### API Endpoints

- `POST /analyze`
  - **Body:**  
    ```json
    {
      "review": "Your movie review text here"
    }
    ```
  - **Response:**  
    ```json
    {
      "rule_based": "Positive",
      "gpt4": "Neutral"
    }
    ```

## Project Structure

- `index.js` – Main server file
- `sentiment.js` - sentiment file for process then sentiments
- `.env` – Environment variables (not committed)
- `package.json` – Project metadata and dependencies

## Scripts

- `npm start` – Start the server
- `npx nodemon index.js` – Start the server with hot reload (development)

## License

ISC

---

*Built with Node.js, Express, and MongoDB.*
