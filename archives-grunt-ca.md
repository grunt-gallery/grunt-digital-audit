---
outline: deep
---

# archives.grunt.ca

grunt's archive website is a [Collective Access](https://www.collectiveaccess.org/) website. 

CollectiveAccess is a free and open-source software for the cataloguing and publishing of museum and archival collections. 

Collective Access websites take two parts:

1. Providence Cataloging Software ([Providence GitHub Repository](https://github.com/collectiveaccess/providence))
2. Pawtucket Web Publishing Software ([Pawtucket GitHub Repository](https://github.com/collectiveaccess/pawtucket2/tree/develop))

"Providence" is the backend software used for cataloging and "Pawtucket" is the frontend software used to display collections data to the general public. 

grunt's Collective Access site uses both Providence and Pawtucket— the public-facing "Pawtucket" url is [archives.grunt.ca](https://archives.grunt.ca)

grunt's Collective Access site was built following an intensive development process that began in 2021.

Collective Access is useful because it supports granular permissions for different database objects. Collective Access supports the sharing of archive materials through the management of these permissions.

::: info
#### What is a database schema?
A database schema defines how data is organized within a relational database. It determines the possible relationships that can exist between database entities.
:::

grunt took a lot of care to craft a database schema for their Collective Access database, and it might be interesting to share that database schema on GitHub, so that other organisations can use it as a starting point for their own Collective Access projects.

The backup of grunt's archive and Collective Access database will is addressed in the "[backups](https://digital-audit.grunt.ca/backups.html)" content section.