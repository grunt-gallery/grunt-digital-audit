---
outline: deep
---
# Backups

Performing regular backups is an important component of grunt's digital strategy.

grunt can perform backups by using third-party services or by using self-managed hardware and infrastructure.

## DreamHost Websites

DreamHost websites can be backed up via [Rsync](https://help.dreamhost.com/hc/en-us/articles/216661778-Rsync) synchronization software. Rsync allows you to sync files between two computers so that the files in a folder remain the same across the computers.

Alternatively, DreamHost WordPress websites can be backed up using easy-to-use and free software plugins, and this should be done on every WordPress site that grunt has. 

Modern WordPress backup plugins save not only the website source code but also the database entries and content—such as images and videos.

An automated WordPress backup plugin is currently installed on grunt.ca

It is important that any backup plugin saves the backed-up files on a server or disk that is not the same as the source location.

## Collective Access Website

The Collective Access website is backed up by Whirl-i-gig, through the server management contract that grunt has with them. The backups Whirl-i-gig saves are for development purposes only, and grunt should still be making independent backups of their archive website and contents.

It is important that any backup plugin saves the backed-up files on a server or disk that is not the same as the source location.

The easiest way to do this is using a NAS (Network Attached Storage) file server that is connected to the internet combined with Rsync. 

A NAS file server is fairly inexpensive (less than $700 CAD at the time of writing, including a hard drive) and it can be used for multiple purposes—such as backing up servers *and* personal computers.

## Personal Computers @ grunt

Staff at grunt can set their Mac and PC computers to do automated backups at set intervals. These backups can be made with a subscription-based backup service such as [Backblaze](https://www.backblaze.com/cloud-backup), or to a NAS file server located on-site at grunt.

Both of these options are good choices for grunt. Over the long term, a NAS would be cheaper and more cost-effective than a subscription-based backup service. The downside to a NAS would be that backups can only be done when the computer is connected to the same computer network as the NAS, which might limit backups to only be done on-site.