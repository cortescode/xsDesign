import os


def setup_mapping(app):
    routes = []
    for rule in app.url_map.iter_rules():
        if 'GET' in rule.methods:
            if '<path:path>' in rule.rule:
                continue
            if '<path:filename>' in rule.rule:
                continue
            if 'auth' in rule.rule:
                continue
            routes.append('xsdesign.co' + rule.rule)
    
    generate_sitemap(routes)
    generate_robots(routes)



def generate_sitemap(routes):
    xml: str = ''
    xml += '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for route in routes:
        xml += '<url>\n'
        xml += f'<loc>{route}</loc>\n'
        #xml += '<changefreq>daily</changefreq>\n'
        # xml += '<priority>0.8</priority>\n'
        xml += '</url>\n'

    xml+='</urlset>'

    file_path: str = os.path.join(os.getcwd(), 'client/public/sitemap.xml')
    
    with open(file_path, 'w') as sitemap_file:
        sitemap_file.write(xml)
    


def generate_robots(route:str):
    robots:str = ''
    for route in route:
        robots+=f'{route}\n'

    file_path: str = os.path.join(os.getcwd(), 'client/public/robots.txt')
    
    with open(file_path, 'w') as robots_file:
        robots_file.write(robots)