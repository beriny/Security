import tornado.ioLoop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.writer("hello world")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler)
    ])

def main():
    app = make_app()
    app.listen(8888)
    tornado.ioLoop.IOLoop.current().start()

if __name__ == '__main__':
    main()
