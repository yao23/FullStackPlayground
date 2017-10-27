""" Backend service """
import operations
import pyjsonrpc

SERVER_HOST = 'localhost'
SERVER_PORT = 4040


class RequestHandler(pyjsonrpc.HttpRequestHandler):
    """ RPC request handler """

    @pyjsonrpc.rpcmethod
    def add(self, num1, num2): # pylint: disable=no-self-use
        """ Test method """
        print "Add is called with %d and %d." % (num1, num2)
        return num1 + num2

    @pyjsonrpc.rpcmethod
    def getOneNews(self): # pylint: disable=no-self-use
        """ Get one news """
        print "getOneNews is called"
        return operations.getOneNews()

    @pyjsonrpc.rpcmethod
    def getNewsSummariesForUser(self, user_id, page_num): # pylint: disable=no-self-use
        """ Get news summaries for a user """
        print "getNewsSummariesForUser is called with %s and %s" % (user_id, page_num)
        return operations.getNewsSummariesForUser(user_id, page_num)

    @pyjsonrpc.rpcmethod
    def logNewsClickForUser(self, user_id, news_id): #pylint: disable=no-self-use
        """ Log news click for a user """
        print "logNewsClickForUser is called with %s and %s" % (user_id, news_id)
        return operations.logNewsClickForUser(user_id, news_id)

# Threading HTTP-Server
HTTP_SERVER = pyjsonrpc.ThreadingHttpServer(
    server_address=(SERVER_HOST, SERVER_PORT),
    RequestHandlerClass=RequestHandler
)


print "Staring HTTP server on %s:%d" % (SERVER_HOST, SERVER_PORT)

HTTP_SERVER.serve_forever()
