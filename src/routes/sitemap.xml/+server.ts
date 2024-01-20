
export async function GET() {	
    return new Response(		
        `		
    <?xml version="1.0" encoding="UTF-8" ?>		
    <urlset			    
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"			
        xmlns:xhtml="https://www.w3.org/1999/xhtml"			
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"			
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"			
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"			
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"		    
    >	
        <url>
            <loc>https://xsdesign.co/</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://xsdesign.co/services/web-design</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://xsdesign.co/services/web-development</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>1</priority>
        </url>

        <url>
            <loc>https://xsdesign.co/services/sales-funnel</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>1</priority>
        </url>

        <url>
            <loc>https://xsdesign.co/services/seo-positioning</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://xsdesign.co/resources/lead-magnet</loc>
            <changefreq>weekly</changefreq>
            <lastmod>2024-01-22</lastmod>
            <priority>0.8</priority>
        </url>	
    </urlset>
    `.trim(),		{
        headers: {				
            'Content-Type': 'application/xml'			
        }		
    });
}