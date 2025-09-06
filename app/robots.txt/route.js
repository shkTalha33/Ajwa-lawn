export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ajwafashion.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow all product pages
Allow: /product/
Allow: /collections/
Allow: /cart
Allow: /checkout

# Crawl delay for better server performance
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
