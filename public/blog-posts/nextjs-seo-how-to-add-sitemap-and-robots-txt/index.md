---
date: "2050-01-01"
title: "How to add sitemap and robots.txt to Next.js application"
excerpt: "In this article I will show you how to add sitemap and robots.txt to your Next.js website to make your website more SEO friendly."
tags: "next.js, jamstack, seo, web development"
slug: "nextjs-seo-how-to-add-sitemap-and-robots-txt"
coverImage: "cover.jpg"
description: "In this article I will show you how to add sitemap and robots.txt to your Next.js website to make your website more SEO friendly."
---

It's important for any website to have good search engine optimization (SEO) in order to be discovered and visible in search engines such as Google. This is especially true for blogs because you want to have your blog posts shown by search engines.

I recently built my own blog with Next.js and I wanted to make sure that my blog posts would be discovered properly by Google (and other search engines, but I'll just say Google because let's be honest, who Bings?).

> _Read more: [How I converted my website from Wordpress to Jamstack](https://tuomokankaanpaa.com/blog/how-i-converted-my-website-from-wordpress-to-jamstack)_

In order for my blog posts to be properly discovered by Google, I needed to make my site SEO friendly. There are bunch of things you can do to improve your website SEO. Adding a sitemap and robots.txt are two major ones.

In this article I will explain what sitemap and robots.txt are and show you how to add them to your own Next.js application.

## What are sitemap and robots.txt

Ok so if sitemap and robots.txt are important for my website SEO, what are and what do they actually do?

### Robots.txt

From [developers.google.com](https://developers.google.com/search/docs/advanced/robots/intro):
_A robots.txt file tells search engine crawlers which pages or files the crawler can or can't request from your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google._

### Sitemap

From [developers.google.com](https://developers.google.com/search/docs/advanced/sitemaps/overview):
_A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to more intelligently crawl your site. A sitemap tells Google which pages and files you think are important in your site, and also provides valuable information about these files: for example, for pages, when the page was last updated, how often the page is changed, and any alternate language versions of a page._

## How to add robots.txt

Robots.txt file needs to be available in the website root like this `www.example.com/robots.txt`. So all we need to do is to create a new file named robots.txt to the `/public` folder.

Add the following inside the robots.txt file.

```
User-agent: *
Allow: /

Sitemap: https://www.example.com/api/blog-sitemap
```

Two first lines tell crawlers that the entire site can be crawled. The last line tells crawlers where to find the the sitemap for the website (make sure to replace the example.com with your own domain). We will add the sitemap in the next step.

You can read more about robots.txt rules from [developers.google.com](https://developers.google.com/search/docs/advanced/robots/create-robots-txt).

## How to add sitemap

So sitemap is basically an xml file listing the pages and content of a website. Google will read the sitemap and crawl the site based on the sitemap.

_Example of a sitemap xml:_

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://tuomokankaanpaa.com/blog/13-keyboard-shortcuts-you-should-be-using-to-increase-your-productivity</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tuomokankaanpaa.com/blog/5-tips-for-successful-remote-work</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tuomokankaanpaa.com/blog/6-things-every-beginner-react-developer-should-know</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

I didn't want to have to modify and update the sitemap xml file every time I added a new blog post. I wanted to have the sitemap to update itself and live a life of its own, so to speak.

Because sitemap path can be defined in the robots.txt file, we are not restricted to a specific path (like we are with robots.txt). So we can use [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) to generate and return the sitemap.

I created an API Route `/api/blog-sitemap` which returns up to date sitemap for my blog posts.

To do this in your own Next.js application, you need to do the following.

Install npm package `sitemap`.

```
yarn add sitemap
```

Then create a new file `blog-sitemap.js` to `/pages/api` folder. Inside that file place the following code and replace the `links` array with your data.

```js
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/blog/my-first-blog-post/", changefreq: "daily", priority: 0.3 },
    { url: "/blog/my-second-blog-post", changefreq: "daily", priority: 0.3 },
    { url: "/blog/my-third-blog-post/", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
```

Now you have always up to date sitemap. You can test it and navigate to `/api/blog-sitemap` and you should see xml sitemap of your blog posts.

You can use [xml-sitemaps](https://www.xml-sitemaps.com/validate-xml-sitemap.html) to validate your sitemap.

## Final thoughts

Now you have a robots.txt and sitemap setup to your Next.js application.

As I mentioned before, I created the sitemap this way so I would not have to worry about it and it would always be up to date.

I researched other options to implement sitemap too. One other way I came across was to use [nextjs-sitemap](https://github.com/SergeyMyssak/nextjs-sitemap). I haven't used this package but it seems legit and there seems to be a lot of things you can configure and customise with it.

I didn't end up using the nextjs-sitemap beacuse the api route was simplier and more straight forward for me. My website structure is also quite simple, so I didn't want to overkill.

If you have more complex website structure and you want to customise your sitemap more, you might be better off using [nextjs-sitemap](https://github.com/SergeyMyssak/nextjs-sitemap). But if you are like me and your site or blog has simple structure, the api route way works just fine.

If you want to check out the complete code for my website and sitemap generation, it's up on Github and you can find it [here](https://github.com/tumetus/tuomokankaanpaa).

That's all for now, thank you for reading! If you liked this article, consider subscribing to my [newsletter](https://tuomokankaanpaa.com/newsletter) for more content like this.
