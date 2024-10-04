---
outline: deep
---

# grunt.ca

[grunt's primary website](https://grunt.ca) is a [WordPress](https://wordpress.org/) website with a custom theme that has been used for many years. 

Browsing the [grunt theme source code](https://github.com/grunt-gallery/grunt-wordpress-theme) reveals that many developers have worked on grunt.ca for many years. 

From a website development perspective, the grunt.ca source code could be better organised and the style of code-writing could be made more consistent (this is likely a symptom of different developers working on the site over a long period of time).

In 2022 the author of this report was asked to improve the [grunt.ca](https://grunt.ca) website. 

The site was bumped up to a current [PHP](https://www.php.net/) version and the [WordPress theme](https://en-ca.wordpress.org/themes/) and stylesheet files were migrated from vanilla [CSS](https://en.wikipedia.org/wiki/CSS) to [tailwindcss](https://tailwindcss.com/). As well, many redundant pages were "pruned" from the database and some general housekeeping tasks were done on the backend.

The site now has a Git repository and is uploaded to [GitHub](https://github.com/grunt-gallery/grunt-wordpress-theme).

::: info
#### grunt.ca Website
- WordPress version 6.2.3 (current version is 6.4.2)
- PHP 8.0
- Hosted on [DreamHost](https://dreamhost.com)
- Various [WordPress plugins](https://en-ca.wordpress.org/plugins/) are used. Some are custom, while others are community-made.
- At least one vulnerable plugin was detected on the website
:::

::: tip
#### grunt.ca Website Suggested Improvements:

- An image gallery (or a link to where documentation images of exhibitions can be found)
- Dropdown menu improvement (currently clunky and not mobile-friendly)
- Written stylistic consistency improvements  (visual, code-writing, accessibility)
- Improve display of accessibility details for the physical grunt gallery location
- Links to Big Cartel webshop [gruntgallery.bigcartel.com](https://gruntgallery.bigcartel.com/) could use a subdomain naming strategy (i.e. shop.grunt.ca)
- There are vulnerable plugins and website security needs to be improved
:::

### Online Sales 

The current platform for supporting online sales is [BigCartel](https://www.bigcartel.com/). On grunt.ca, [the online shop](https://gruntgallery.bigcartel.com/) is labeled "bookstore", however, it sells more than books. The URL is a branded Big Cartel subdomain linked prominently from the [grunt.ca](https://grunt.ca) site.

## Discussion

### WordPress

With respect to both content organisation and web development, the grunt.ca website needs some work to make it cleaner and more consistent. 

The choice of using WordPress for the CMS still seems to be a good one because currently [more than 42% of the internet is powered by WordPress](https://aovup.com/stats/wordpress/) and there are many web/software developers who know how to make and fix WordPress sites. WordPress CMS market share as of 2021 was [64.6%](https://aovup.com/stats/wordpress/) and in 2023 WordPress' global market share is estimated to be [63.1%](https://www.wpbeginner.com/research/cms-market-share-report-latest-trends-and-usage-stats/). For these reasons, WordPress is still a solid choice as a long-term CMS.

That being said, there are numerous methods for building websites that were not around when the grunt.ca website was originally made. 

[Static-generated websites](https://jamstack.org/generators/) are gaining in popularity because static site generators bundle resources so that they load more quickly than "monolithic" web applications— such as WordPress themes.

### Frontend

Static-generated websites are only the "[frontend](https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp)" — or what we, as web users, interact with. To manage content on the backend, a CMS is still required.

If a rebuild of the grunt.ca website is up for discussion, one option that may be cost-effective is to continue using WordPress as a backend CMS and then develop a new frontend site that pulls existing data from a WordPress backend. This is called a [headless WordPress setup](https://www.gatsbyjs.com/docs/glossary/headless-wordpress/#:~:text=A%20headless%20WordPress%20site%20is,content%20to%20a%20site%20visitor.).

::: tip
Although Accessibility is being considered as a parallel report, it might be interesting to consider what screen readers can see visually when reading the site. A simple HTML toggle button could remove all non-text visual components from teh website, to give a visual representation of what a screen reader is actually using to turn text to speech. 
:::

If the current grunt.ca WordPress site was replicated as a static site with a WordPress backend, this would improve accessibility and decrease page load times, making the site more extensible in the future.

### Online and IRL Sales

If grunt migrated the online shop from Big Cartel to Square, inventory could be tracked from a single "[source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)" for both online and IRL sales. 

The same system that sells goods in the online store could sell drinks and merch at opening events. 

Square comes with a free online store webpage that can connect with Instagram for shoppable posts with tagged products—something that is relatively easy to set up.