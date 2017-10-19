""" Backend service """

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


# Threading HTTP-Server
HTTP_SERVER = pyjsonrpc.ThreadingHttpServer(
    server_address=(SERVER_HOST, SERVER_PORT),
    RequestHandlerClass=RequestHandler
)


print "Staring HTTP server on %s:%d" % (SERVER_HOST, SERVER_PORT)

HTTP_SERVER.serve_forever()
