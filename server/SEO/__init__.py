from flask import Blueprint, send_from_directory



SEO_blueprint = Blueprint('/', __name__, url_prefix='/')


@SEO_blueprint.get('/sitemap.xml')
def sitemap():
    return send_from_directory('client/public', 'sitemap.xml')

@SEO_blueprint.get('/robots.txt')
def robots():
    return send_from_directory('client/public', 'robots.txt')