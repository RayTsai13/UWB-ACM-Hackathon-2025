import requests

def fetch_tweets(bearer_token, query, max_results=100):
    """
    Fetch recent tweets based on a query.

    Args:
        bearer_token (str): Twitter API Bearer Token.
        query (str): Search query for tweets.
        max_results (int): Maximum number of tweets to fetch (default is 100).

    Returns:
        list: A list of tweets sorted by the number of likes.
    """
    headers = {
        "Authorization": f"Bearer {bearer_token}"
    }

    search_url = "https://api.twitter.com/2/tweets/search/recent"

    # Adjust max_results to fetch more tweets
    query_params = {
        'query': query,
        'max_results': min(max_results, 100),  # Twitter API limits to 100 per request
        'tweet.fields': 'public_metrics,created_at,author_id'
    }

    response = requests.get(search_url, headers=headers, params=query_params)

    if response.status_code != 200:
        raise Exception(f"Request returned an error: {response.status_code}, {response.text}")

    tweets = response.json().get('data', [])

    # Sort tweets by number of likes
    tweets_sorted = sorted(tweets, key=lambda x: x['public_metrics']['like_count'], reverse=True)

    return tweets_sorted

def print_top_tweets(tweets, top_n=5):
    """
    Print the top N tweets based on the number of likes.

    Args:
        tweets (list): List of tweets.
        top_n (int): Number of top tweets to print (default is 5).
    """
    for tweet in tweets[:top_n]:
        print(f"Likes: {tweet['public_metrics']['like_count']}")
        print(f"Retweets: {tweet['public_metrics']['retweet_count']}")
        print(f"Text: {tweet['text']}")
        print(f"Posted at: {tweet['created_at']}")
        print('-' * 50)

if __name__ == "__main__":
    # Replace with your actual Bearer Token
    BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAM6C0wEAAAAA9OHN%2BvyoKoVVX6axKooeH853CCI%3DtagMLaKyRKvg1BHWbeVp6meI1YdfGn4fiog7L11iZVeX0nghia'
    QUERY = '(protest OR justice OR boycott OR challenge) lang:en -is:retweet'

    # Fetch more tweets by increasing max_results
    tweets = fetch_tweets(BEARER_TOKEN, QUERY, max_results=200)

    # Print the top 10 tweets
    print_top_tweets(tweets, top_n=10)
