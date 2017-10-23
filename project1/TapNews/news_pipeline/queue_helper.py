import os
import sys

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

import news_api_client
from cloudAMQP_client import CloudAMQPClient

# TODO: use your own queue.
SCRAPE_NEWS_TASK_QUEUE_URL = "amqp://exupfugx:wmGJWmV-5Y0LpIT_mj51uzpFiqHNX_1w@donkey.rmq.cloudamqp.com/exupfugx"
SCRAPE_NEWS_TASK_QUEUE_NAME = "tap-news-scrape-news-task-queue"
DEDUPE_NEWS_TASK_QUEUE_URL = "amqp://exupfugx:wmGJWmV-5Y0LpIT_mj51uzpFiqHNX_1w@donkey.rmq.cloudamqp.com/exupfugx"
DEDUPE_NEWS_TASK_QUEUE_NAME = "tap-news-dedupe-news-task-queue"

def clearQueue(queue_url, queue_name):
    scrape_news_queue_client = CloudAMQPClient(queue_url, queue_name)

    num_of_messages = 0

    while True:
        if scrape_news_queue_client is not None:
            msg = scrape_news_queue_client.getMessage()
            if msg is None:
                print "Cleared %d messages." % num_of_messages
                return
            num_of_messages += 1


if __name__ == "__main__":
    clearQueue(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)
    clearQueue(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)