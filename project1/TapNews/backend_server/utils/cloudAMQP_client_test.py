from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://exupfugx:wmGJWmV-5Y0LpIT_mj51uzpFiqHNX_1w@donkey.rmq.cloudamqp.com/exupfugx"
NEWS_FETCH_TASK_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, NEWS_FETCH_TASK_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print "test_basic passed"

if __name__ == "__main__":
    test_basic()