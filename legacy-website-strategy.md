<style>
.indent-list {
    margin-left: 2em;
}
</style>
# Legacy Website Strategy

Following the website inventory it is evident that grunt has a number of special project websites which are no longer active and are at risk of being broken through routine web server upgrades. 

These websites are candidates to be archived or preserved so that they do not get lost or broken from updates. The following sections outline strategies for preserving and/or archiving legacy websites.

In general, these are the rough steps to archive websites, which are elaborated upon below with some different options:
<div class="indent-list">
1. Isolate and preserve source files<br>
2. Make source files accessible (this is optional)<br>
3. Share websites in a consistent and browser-readable format
</div>

## Preserve Website Source Files

![A screenshot of a computer disk icon](/save_file.png "A screenshot of a computer disk icon")

This is the most low-barrier preservation task, which is to isolate the files that compose grunt's websites and save them outside of the web server environment, with notes as to which technologies are needed for the sites to operate in their original state. 

For example, a WordPress website made in 2012 requres plugins which are no longer active and it requires WordPress and PHP versions that are no longer current and supported by the public-facing web server. These details can be recorded in a "README" file at the root directory with the website's files. The files can then be saved offline and in duplicate for safe keeping. At a later date these files can be recalled and activated in a web server environment that can support the website's technologies.

With the files saved offline the site itself is not operational, but the files are secured for future use.

## Make Website Source Files Accessible


![A screenshot of grunt's GitHub account homepage](/grunt_github.png "A screenshot of grunt's GitHub account homepage")

The source files for making the website could be hosted on grunt's GitHub account, where they could be shared publicly or privately. GitHub is a developer-friendly environment so if the files were ever to be re-initialized as a website, they are in a format where the permissions on the repository are updated and a link can be sent to a researcher/software developer.

## Convert Dynamic Websites to Static Sites

![The WordPress Logo on the left, HTML 5 Logo on the right](/wp_html.png "The WordPress Logo on the left, HTML 5 Logo on the right")

If it is desired to keep the websites available to the public at the lowest possible cost, dynamic database-driven websites can be converted to static HTML websites that can then be served to the public.

This would require loading the sites up in a virtual environment that supports the database technologies the sites require, and then saving the web pages as individual static HTML files. The benfeit of archiving websites in this way is that they can be accessed as HTML files in online, offline, or localhost environments.

## Convert Dynamic Websites to .WARC files

![A screenshot of the conifer homepage](/conifer.png "A screenshot of the conifer homepage")

[.WARC](https://en.wikipedia.org/wiki/WARC_(file_format)) is a Web ARChive format for archiving websites such that they can be crawled and saved as files. These files can then be viewed in a [Webrecorder Player](https://github.com/webrecorder/webrecorder-player/releases/tag/v1.5.0) such as [Conifer](https://conifer.rhizome.org/). Conifer is a web archiving project that is maintained by [Rhizome](https://en.wikipedia.org/wiki/Rhizome_(organization)), the not-for-profit arts organisation based in New York City.

Please note that this connection to the arts and in particular new media art may support a future narrative in grant funding.

## Possible ways to share archived websites

### Static HTML on web and/or localhost

Static HTML sites are great because they exist simultaneously as files and as websites. The maintenance cost for properly-coded HTML websites is low, and they can be shared online or on a local network.

### .WARC Files on web and/or localhost

.WARC files are great because they are in a recognized web archiving format that may appeal to archivists and/or researchers. The methods for creating and viewing .WARC files are in-step with digital archiving best practices, however some dynamic functionality of websites is lost through the process—such as filter data retrevial or site search functions. For this reason, .WARC files are closer to static sites than dynamic websites.

### Dynamic Server Environment on web and/or localhost

![A screenshot of the Docker homepage](/docker.png "A screenshot of the Docker homepage")

Preserving the archived websites in a containerized dynamic server environment will preserve the website functionality of the sites—essentially nothing is changed from the original website installation.

[Docker](https://www.docker.com/) is a containarization service that allows for computing resources to be isolated to installation settings. For example, one could specifiy that whenever a Docker container is run, that it load up the correct version of MYSQL, PHP and other requrired services at the correct version numbers alonside the source files of the website. This essentailly preserves the website in the state that it was originally created, and it pulls in the necessary resources every time the Docker container is run.

Containerized websites can be shared locally (onsite at grunt) or on the web (for an additional web hosting service fee). A service **other than Dreamhost** would be needed, which would incur an additional fee. Sharing the website locally at grunt would be of no cost, but it would require a server or computer to be run on.