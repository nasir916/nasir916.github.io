---
title: "Upgrade R without loosing  existing packages"
date: 2019-05-24T19:19:07.568Z
slug: upgrade-r-without-loosing-existing-packages
categories: []
---

If the newer version of R base is out, usually we want to get the latest version of R. But unfortunately, once we upgrade the newer version of R, all of our installed packages in previous version is not copied into the latest installed version. 

to overcome this issue, please try the following techniques before installing the newer version of R base. 

1\) Before we upgrade the latest version, we create a temporary file containing all of our packages.

***all \<- installed.packages()***

***old \<- as.vector(all\[is.na(all\[ , "Priority"\]), 1\])***

***save(old, file="old.installed.rda")*** 

please make sure you know where did you save the file (please check with "getwd()"  
 

2\) Now, you can install the newer version of R base happily..

3\) Once we have installed the new version, make sure it is up and running smoothly. now, we can begin to install the previous packages that we have already installed in older version simultaneously

**current \<- installed.packages()**

**new \<- as.vector(current\[is.na(current\[ , "Priority"\]), 1\])**

**check \<- setdiff(old, new)**  

**#this is to check what is packages that not being installed in the newer version**

**install.packages(check)**

Hope this will help!

Thanks,

MNA
