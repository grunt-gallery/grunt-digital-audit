import{_ as e,o as t,c as s,R as i,a5 as a,a6 as o,a7 as r,a8 as n,a9 as c}from"./chunks/framework.ea2Bfdl1.js";const y=JSON.parse('{"title":"Legacy Website Strategy","description":"","frontmatter":{},"headers":[],"relativePath":"legacy-website-strategy.md","filePath":"legacy-website-strategy.md","lastUpdated":1707083451000}'),l={name:"legacy-website-strategy.md"},h=i('<h1 id="legacy-website-strategy" tabindex="-1">Legacy Website Strategy <a class="header-anchor" href="#legacy-website-strategy" aria-label="Permalink to &quot;Legacy Website Strategy&quot;">​</a></h1><p>Following the website inventory it is evident that grunt has a number of special project websites which are no longer active and are at risk of being broken through routine web server upgrades.</p><p>These websites are candidates to be archived or preserved so that they do not get lost or broken from future updates.</p><p>There are three main steps to archiving websites.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><h4 id="steps-to-archiving-aging-websites" tabindex="-1">Steps to archiving aging websites: <a class="header-anchor" href="#steps-to-archiving-aging-websites" aria-label="Permalink to &quot;Steps to archiving aging websites:&quot;">​</a></h4><ol><li>Isolate and preserve the website source files<br></li><li>Make the source the files accessible (optional)<br></li><li>Share the websites using a consistent method in a browser-readable format</li></ol></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The following sections describe different strategies and trade-offs for preserving and/or archiving legacy websites.</p></div><h2 id="preserve-website-source-files" tabindex="-1">Preserve Website Source Files <a class="header-anchor" href="#preserve-website-source-files" aria-label="Permalink to &quot;Preserve Website Source Files&quot;">​</a></h2><p><img src="'+a+'" alt="A screenshot of a computer disk icon" title="A screenshot of a computer disk icon"></p><p>This is the most low-barrier preservation task, which is to isolate the files that compose grunt&#39;s websites and save them outside of the web server environment, with notes as to which technologies are needed for the sites to operate in their original state.</p><p>For example, a WordPress website made in 2012 requres plugins which are no longer active and it requires WordPress and PHP versions that are no longer current and supported by the public-facing web server. These details can be recorded in a &quot;README&quot; file at the root directory with the website&#39;s files. The files can then be saved offline and in duplicate for safe keeping. At a later date these files can be recalled and activated in a web server environment that can support the website&#39;s technologies.</p><p>With the files saved offline the site itself is not operational, but the files are secured for future use.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Properly preserving the website&#39;s source files is a requirement for any kind of website sharing.</p></div><h2 id="make-website-source-files-accessible" tabindex="-1">Make Website Source Files Accessible <a class="header-anchor" href="#make-website-source-files-accessible" aria-label="Permalink to &quot;Make Website Source Files Accessible&quot;">​</a></h2><p><img src="'+o+'" alt="A screenshot of grunt&#39;s GitHub account homepage" title="A screenshot of grunt&#39;s GitHub account homepage"></p><p>The source files for making the website could be hosted on grunt&#39;s GitHub account, where they could be shared publicly or privately. GitHub is a developer-friendly environment so if the files were ever to be re-initialized as a website, they are in a format where the permissions on the repository are updated and a link can be sent to a researcher/software developer.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Sharing website source files is an administrative &quot;nice to have&quot;. <br><br> If the principles of open source software sharing are important to the organisation, then this might be a more important step.<br><br> If a web developer received files in this way they could activate them more quickly/easily.</p></div><h2 id="convert-dynamic-websites-to-static-sites" tabindex="-1">Convert Dynamic Websites to Static Sites <a class="header-anchor" href="#convert-dynamic-websites-to-static-sites" aria-label="Permalink to &quot;Convert Dynamic Websites to Static Sites&quot;">​</a></h2><p><img src="'+r+'" alt="The WordPress Logo on the left, HTML 5 Logo on the right" title="The WordPress Logo on the left, HTML 5 Logo on the right"></p><p>Dynamic database-driven websites can be converted to static HTML websites that can then be served to the public. Some dynamic functionality of the website may be lost, however.</p><p>The sites could be loaded in a virtual environment that supports the database technologies they require, and then web pages can be saved as individual static HTML files. The benfet of archiving websites this way is that they can be accessed as HTML files in online, offline, or in local network environments.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Static websites have been around since the start of the internet and are the most stable of websites. <br><br> Converting a dynamic database-driven website into a static site will lose some of the website&#39;s dynamic functionality.<br><br> There may be an administrative cost to the organisation to make dynamic sites into static sites, unless there is a plugin or process that can automate the task.</p></div><h2 id="convert-dynamic-websites-into-warc-files" tabindex="-1">Convert Dynamic Websites into .WARC files <a class="header-anchor" href="#convert-dynamic-websites-into-warc-files" aria-label="Permalink to &quot;Convert Dynamic Websites into .WARC files&quot;">​</a></h2><p><img src="'+n+'" alt="A screenshot of the conifer homepage" title="A screenshot of the conifer homepage"></p><p><a href="https://en.wikipedia.org/wiki/WARC_(file_format)" target="_blank" rel="noreferrer">.WARC</a> is a Web ARChive format for archiving websites such that they can be crawled and saved as files. These files can then be viewed in a <a href="https://github.com/webrecorder/webrecorder-player/releases/tag/v1.5.0" target="_blank" rel="noreferrer">Webrecorder Player</a> such as <a href="https://conifer.rhizome.org/" target="_blank" rel="noreferrer">Conifer</a>. Conifer is a web archiving project that is maintained by <a href="https://en.wikipedia.org/wiki/Rhizome_(organization)" target="_blank" rel="noreferrer">Rhizome</a>, the not-for-profit arts organisation based in New York City.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Every time you browse a website on the &quot;<a href="https://archive.org/web/" target="_blank" rel="noreferrer">wayback machine</a>&quot; on <a href="https://archive.org/" target="_blank" rel="noreferrer">archive.org</a> you are essentially accessing a .WARC file<br><br> .WARC files are kind of like screen recordings of websites, and some dynamic functionality of websites is lost when using .WARC files.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The origin of .WARC files is connected to the arts and in particular new media art, which may support a future narrative in grant funding applications.</p></div><h2 id="possible-ways-to-share-archived-websites" tabindex="-1">Possible ways to share archived websites <a class="header-anchor" href="#possible-ways-to-share-archived-websites" aria-label="Permalink to &quot;Possible ways to share archived websites&quot;">​</a></h2><h3 id="static-html-on-web-and-or-localhost" tabindex="-1">Static HTML on web and/or localhost <a class="header-anchor" href="#static-html-on-web-and-or-localhost" aria-label="Permalink to &quot;Static HTML on web and/or localhost&quot;">​</a></h3><p>Static HTML sites are great because they exist simultaneously as files and as websites. The maintenance cost for properly-coded HTML websites is low, and they can be shared online or on a local network.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Static HTML website can be served from any web server environment—either online or through a local network.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Some dynamic website functionality will be lost when converting into a static site.</p></div><h3 id="warc-files-on-web-and-or-localhost" tabindex="-1">.WARC Files on web and/or localhost <a class="header-anchor" href="#warc-files-on-web-and-or-localhost" aria-label="Permalink to &quot;.WARC Files on web and/or localhost&quot;">​</a></h3><p>.WARC files are great because they are in a recognized web archiving format that may appeal to archivists and/or researchers. The methods for creating and viewing .WARC files are in-step with digital archiving best practices, however some dynamic functionality of websites is lost through the process—such as filter data retrevial or site search functions. For this reason, .WARC files are closer to static sites than dynamic websites.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>.WARC files need to be accessed through special software and so they are more easy to access when they are offline. If you want to make resources available for researchers doing research requests, this might be the way to go. <br><br> There are <a href="https://conifer.rhizome.org/_faq" target="_blank" rel="noreferrer">web-based .WARC file viewers</a>. <br><br>These file viewers require you to upload your .WARC files to outside servers, which means <a href="https://conifer.rhizome.org/_policies" target="_blank" rel="noreferrer">losing the exclusive copyright</a> over the content of the file(s).</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Viewing .WARC files with a third-party online service may come at the expense of losing the exclusive copyright of those files.</p></div><h3 id="dynamic-server-environment-on-web-and-or-localhost" tabindex="-1">Dynamic Server Environment on web and/or localhost <a class="header-anchor" href="#dynamic-server-environment-on-web-and-or-localhost" aria-label="Permalink to &quot;Dynamic Server Environment on web and/or localhost&quot;">​</a></h3><p><img src="'+c+'" alt="A screenshot of the Docker homepage" title="A screenshot of the Docker homepage"></p><p>Preserving the archived websites in a containerized dynamic server environment will preserve the website functionality of the sites—essentially nothing is changed from the original website installation.</p><p><a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> is a containarization service that allows for computing resources to be isolated to installation settings. For example, one could specifiy that whenever a Docker container is run, that it load up the correct version of MYSQL, PHP and other requrired services at the correct version numbers alonside the source files of the website. This essentailly preserves the website in the state that it was originally created, and it pulls in the necessary resources every time the Docker container is run.</p><p>Containerized websites can be shared locally (onsite at grunt) or on the web (for an additional web hosting service fee). A service <strong>other than Dreamhost</strong> would be needed, which would incur an additional fee. Sharing the website locally at grunt would be of no cost, but it would require a server or computer to be run on.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Using Docker containers to host websites essentially re-establishes the websites as they were originally built. <br><br>This is the most high-fidelity method to preserve websites and their content.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Setting up a &quot;Dockerized&quot; environment likely has the most significant development cost of all options.</p></div>',42),b=[h];function d(p,f,u,m,w,g){return t(),s("div",null,b)}const k=e(l,[["render",d]]);export{y as __pageData,k as default};