import os
import re
import json
import time
import logging
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
from pytrends.request import TrendReq
from requests.exceptions import RequestException

# Setup Logging
os.makedirs("logs", exist_ok=True)
logging.basicConfig(
    filename="logs/run.log",
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)

# Load Fine-tuned BERT Classifier
def load_classifier(model_path="./models/finetuned_distilbert/"):
    logging.info("Loading fine-tuned classifier manually...")
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    model = AutoModelForSequenceClassification.from_pretrained(model_path)
    return pipeline("text-classification", model=model, tokenizer=tokenizer)

# Filter Good Queries from Tweets
def filter_good_queries(tweets, classifier, threshold=0.7):
    logging.info(f"Filtering {len(tweets)} tweets...")
    predictions = classifier(tweets, truncation=True, padding=True)
    good_queries = [
        tweet for tweet, pred in zip(tweets, predictions)
        if pred['label'] == 'LABEL_1' and pred['score'] >= threshold
    ]
    logging.info(f"Found {len(good_queries)} good queries.")
    return good_queries

# Clean Query Text
def clean_query(text):
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"#\S+", "", text)
    text = re.sub(r"@\S+", "", text)
    text = text.strip()
    return text

# Initialize PyTrends
def get_pytrends():
    return TrendReq(hl='en-US', tz=360)

# Fetch Trend Data with Retry Logic
def fetch_trend_data(pytrends, query, max_retries=3, sleep_seconds=2):
    for attempt in range(max_retries):
        try:
            pytrends.build_payload([query], cat=0, timeframe='today 12-m', geo='', gprop='')
            
            data = {
                "interest_over_time": pytrends.interest_over_time().to_dict(),
                "interest_by_region": pytrends.interest_by_region().to_dict(),
                "related_queries": pytrends.related_queries(),
            }
            logging.info(f"Successfully fetched trends for query: {query}")
            return data

        except RequestException as e:
            logging.warning(f"Attempt {attempt+1}: Error fetching data for {query} — {str(e)}")
            time.sleep(sleep_seconds * (attempt + 1))  # Exponential backoff
    logging.error(f"Failed to fetch trends after {max_retries} attempts: {query}")
    return None

# Save Data to JSON
def save_json(data, query, output_dir="output/"):
    os.makedirs(output_dir, exist_ok=True)
    filename = os.path.join(output_dir, f"{query.replace(' ', '_')}_trend.json")
    with open(filename, "w") as f:
        json.dump(data, f, indent=2)
    logging.info(f"Saved trend data to {filename}")

# Main Pipeline
def main(tweets):
    classifier = load_classifier()
    pytrends = get_pytrends()

    good_queries = filter_good_queries(tweets, classifier)
    search_queries = [clean_query(q) for q in good_queries]

    for query in search_queries:
        data = fetch_trend_data(pytrends, query)
        if data:
            save_json(data, query)
        else:
            logging.error(f"No data saved for query: {query}")


if __name__ == "__main__":
    # Example tweets
    tweets = [
        "Taylor Swift new album rumors 2025!",
        "eating ramen lol",
        "SpaceX starship launch schedule update",
        "check out this link: http://someurl.com",
        "climate awareness is crucial!",

    ]
    main(tweets)