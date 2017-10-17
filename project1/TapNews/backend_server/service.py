import pyjsonrpc

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        """ Test method """
        print "Add is called with %d and %d." % (a, b)
        return a + b

# Threading HTTP-Server
http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = (SERVER_HOST, SERVER_PORT),
    RequestHandlerClass = RequestHandler
)


print "Staring HTTP server on %s:%d" % (SERVER_HOST, SERVER_PORT)

http_server.serve_forever()