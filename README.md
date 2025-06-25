# AI-Powered Sentiment Analysis Tool (Backend)

This is the backend for the AI-Powered Sentiment Analysis Tool. It provides RESTful APIs for analyzing movie reviews using both rule-based and GPT-4 powered AI models.

## Features

- REST API for sentiment analysis
- Supports both rule-based and GPT-4 models
- CORS enabled for frontend integration
- Easy to configure and deploy

## Getting Started

### Prerequisites

- [Python 3.9+](https://www.python.org/)
- [pip](https://pip.pypa.io/)

### Installation

1. Clone the repository and navigate to the `backend` folder:

   ```sh
   git clone <your-repo-url>
   cd backend
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv venv
   venv\Scripts\activate   # On Windows
   # or
   source venv/bin/activate  # On macOS/Linux
   ```

3. Install dependencies:

   ```sh
   pip install -r requirements.txt
   ```

4. Set up environment variables in a `.env` file (if required):

   ```
   # Example:
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Server

```sh
python app.py
```

The backend will start on [http://localhost:5000](http://localhost:5000) by default.

### API Endpoints

- `POST /analyze`  
  Analyze a movie review.  
  **Body:**  
  ```json
  {
    "review": "Your movie review text here"
  }
  ```
  **Response:**  
  ```json
  {
    "rule_based": "Positive",
    "gpt4": "Neutral"
  }
  ```

## Project Structure

- `app.py` – Main application file
- `requirements.txt` – Python dependencies
- `utils/` – Utility modules (if any)
- `.env` – Environment variables (not committed)

## License

MIT

---

*Built with Python and Flask (or FastAPI, etc.).*
