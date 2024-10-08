---
outline: deep
---
# Legacy Website Strategy

After completing the [website inventory](https://digital-audit.grunt.ca/web-servers.html#grunt-s-website-inventory), it is clear that grunt has a number of project websites that are no longer active and/or are at risk of being broken through routine web server upgrades enforced by DreamHost. 

These project websites are candidates to be archived and/or preserved so that they do not get lost or broken from future web server updates. 

There are three main steps to archiving websites.

::: info
#### What are the steps to archiving an aging website?
1. Isolate and preserve the website's source files<br>
2. Make the website's source files accessible (optional)<br>
3. Share the website using a consistent browser-readable format
:::

::: tip
The following sections describe different strategies and trade-offs for preserving and/or archiving legacy websites.
:::

## 1. Preserve Website Source Files

This is the most low-barrier preservation task—to isolate the files that compose grunt's websites and save them outside of the web server environment, with developer's notes as to which technologies are needed for the sites to operate in their original state. 

For example, a WordPress website made in 2012 requres plugins which are no longer supported. The site requires WordPress and PHP versions that are no longer current or supported by the public-facing web server. These details can be recorded in a "README" file in the root directory of the project with the website's source files. The files can then be saved offline and in duplicate for safe keeping. At a later date these files can be recalled and activated in a web server environment that can support the website's technologies.

With the files saved offline the site itself is not operational, but the files are secure for future use.

Best practice for storing website source files is on [grunt's GitHub account](https://github.com/grunt-gallery), because the code can be backed-up, edited, and used for future development purposes. 

Alternatively, the files could also be saved to disk and stored on a server or offline hard drives.

::: info
Properly preserving the website's source files is a requirement for any kind of website sharing.
:::

## 2. Make Website Source Files Accessible

The source files for making the website could be hosted on grunt's GitHub account, where they could be shared publicly or privately. GitHub is a developer-friendly environment so if the files were ever to be re-initialized as a website, they are in a format where the permissions on the repository are updated and a link can be sent to a researcher/software developer.

::: info
Sharing website source files is an administrative "nice to have". <br><br>
If the principles of open source software sharing are important to the organisation, then this might be a more important step.<br><br>
If a web developer received files in this way they could activate them more quickly and easily.
:::

### Convert Dynamic Websites to Static Sites

Dynamic database-driven websites can be converted to static HTML websites that can then be served to the public. Some dynamic functionality of the website may be lost, however.

The sites could be loaded in a virtual environment that supports the database technologies they require, and then web pages can be saved as individual static HTML files. The benfet of archiving websites this way is that they can be accessed as HTML files in online, offline, or in local network environments.

::: info
Static websites have been around since the start of the internet and are the most stable  of websites. <br><br>
Converting a dynamic database-driven website into a static site will lose some of the website's dynamic functionality.<br><br>
There may be an administrative cost to the organisation to make dynamic sites into static sites, unless there is a plugin or process that can automate the task.
:::

### Convert Dynamic Websites into .WARC files

[.WARC](https://en.wikipedia.org/wiki/WARC_(file_format)) is a Web ARChive format for archiving websites such that they can be crawled and saved as files. These files can then be viewed in a [Webrecorder Player](https://github.com/webrecorder/webrecorder-player/releases/tag/v1.5.0) such as [Conifer](https://conifer.rhizome.org/). Conifer is a web archiving project that is maintained by [Rhizome](https://en.wikipedia.org/wiki/Rhizome_(organization)), the not-for-profit arts organisation based in New York City.

::: info
Every time you browse a website on the "[wayback machine](https://archive.org/web/)" on [archive.org](https://archive.org/) you are essentially accessing a .WARC file<br><br>
.WARC files are kind of like screen recordings of websites, and some dynamic functionality of websites is lost when using .WARC files.
:::
::: tip
The origin of .WARC files is connected to the arts and in particular new media art, which may support a future narrative in grant funding applications.
:::

## 3. Ways to Share Legacy Websites

### Static HTML on web and/or localhost

Static HTML sites are great because they exist simultaneously as files and as websites. The maintenance cost for properly-coded HTML websites is low, and they can be shared online or on a local network.

::: info
Static HTML website can be served from any web server environment—either online or through a local network.
:::
::: danger
Some dynamic website functionality will be lost when converting into a static site.
:::

### .WARC Files on web and/or localhost

.WARC files are great because they are in a recognized web archiving format that may appeal to archivists and/or researchers. The methods for creating and viewing .WARC files are in step with digital archiving best practices, however, some dynamic functionality of websites is lost through the process—such as filter data retrieval or site search functions. For this reason, .WARC files are closer to static sites than dynamic websites.

::: info
.WARC files need to be accessed through special software and so they are easier to access when they are offline. If you want to make resources available for researchers doing research requests, this might be the way to go. <br><br>
There are [web-based .WARC file viewers](https://conifer.rhizome.org/_faq). <br><br>These file viewers require you to upload your .WARC files to outside servers, which means [losing the exclusive copyright](https://conifer.rhizome.org/_policies) over the content of the file(s).
:::
::: danger
Viewing .WARC files with a third-party online service may come at the expense of losing the exclusive copyright of those files.
:::

### Dynamic Server Environment on web and/or on localhost

Preserving the archived websites in a containerized dynamic server environment will preserve the website functionality of the sites—essentially nothing is changed from the original website installation.

[Docker](https://www.docker.com/) is a containarization service that allows for computing resources to be isolated to installation settings. For example, one could specify that whenever a Docker container is run, load up the correct version of MYSQL, PHP and other required services at the correct version numbers alongside the source files of the website. This essentially preserves the website in the state that it was originally created, and it pulls in the necessary resources every time the Docker container is run.

Containerized websites can be shared locally (onsite at grunt) or on the web (for an additional web hosting service fee). A service **other than Dreamhost** would be needed, which would incur an additional fee. Sharing the website locally at grunt would be of no cost, but it would require a server or computer to be run on.

::: info
Using Docker containers to host websites essentially re-establishes the websites as they were originally built. <br><br>This is possibly the most high-fidelity method to preserve websites and their content. 
Docker containers can run locally or be put back online through a custom server environment
:::
::: danger
Setting up a "Dockerized" environment likely has the most significant development cost of all options.
:::

## Summary

grunt's legacy website strategy should attempt to preserve the code of the websites *and* the content of the websites. 

This report recommends using grunt's GitHub account as a repository for storing legacy website code, which can then be archived and/or activated in multiple different ways, as described above.

Saving legacy websites as .WARC files is an interesting approach if grunt can support playback of .WARC files for researchers. 

Docker images could be made to preserve the websites in their original form, however, this would require the most development time and potential expense.