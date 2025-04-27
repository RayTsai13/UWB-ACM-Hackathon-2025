import requests
from bs4 import BeautifulSoup
from transformers import pipeline
from pytrends.request import TrendReq
import torch



class WebScraperModel():
    x=torch.rand(5,3)
    print(x)
url = 'https://www.reddit.com/r/worldnews/'
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Extract post titles (Reddit uses <h2> for titles)
titles = [h2.text for h2 in soup.find_all('h2') if len(h2.text.strip()) > 10]

print(" Scraped Titles:")
for title in titles:
    print("-", title)

# 2. Load a PyTorch-based zero-shot classification model
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Define candidate labels (adjust to fit your focus)
candidate_labels = ["Politics", "Environment", "Technology", "Conflict", "Health", "Human Rights"]

# 3. Classify each post
print("\n Topic Classification:")
for title in titles:
    result = classifier(title, candidate_labels)
    top_label = result['labels'][0]
    confidence = result['scores'][0]
    print(f"'{title}' → {top_label} ({confidence:.2f})")