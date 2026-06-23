import http.server
import os

class NextStaticHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='/home/z/my-project', **kwargs)
    
    def translate_path(self, path):
        # Remove leading slash
        rel = path.lstrip('/')
        
        # Public files (images, favicon, etc.)
        pub = os.path.join('/home/z/my-project/public', rel)
        if os.path.isfile(pub):
            return pub
        
        # _next/static assets
        if rel.startswith('_next/static/'):
            p = os.path.join('/home/z/my-project/.next', rel)
            if os.path.isfile(p):
                return p
        
        # _next/image proxy - serve from public
        if rel.startswith('_next/image'):
            return os.path.join('/home/z/my-project/public', 'favicon.ico')
        
        # HTML pages
        app_dir = '/home/z/my-project/.next/server/app'
        if rel == '' or rel == '/':
            html = os.path.join(app_dir, 'index.html')
        else:
            html = os.path.join(app_dir, rel + '.html')
        
        if os.path.isfile(html):
            return html
        
        # RSC for client navigation
        if rel == '' or rel == '/':
            rsc = os.path.join(app_dir, 'index.rsc')
        else:
            rsc = os.path.join(app_dir, rel + '.rsc')
        if os.path.isfile(rsc):
            return rsc
        
        return os.path.join('/home/z/my-project/public', '404.html')
    
    def end_headers(self):
        path = self.translate_path(self.path)
        if path.endswith('.html') or path.endswith('.rsc'):
            self.send_header('Cache-Control', 'no-cache')
        else:
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        super().end_headers()

print('Python static server on :3000')
http.server.HTTPServer(('0.0.0.0', 3000), NextStaticHandler).serve_forever()
