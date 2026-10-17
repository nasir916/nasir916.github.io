---
title: "Error installing devtools library in Ubuntu"
date: 2017-12-13T16:51:15.009Z
slug: error-installing-devtools-library-in-ubuntu
categories: ["R-Programming"]
image: "https://static.wixstatic.com/media/e47301_804ca8fe906745838a70163001a3861c~mv2.png"
---

For those who using RStudio in Ubuntu OS who had problem in installing packages that require ***devtools*** library. Don't worry anymore, because we have found the solution for this. 

I am using Ubuntu 17.04, when i want to install.packages("gmailr") in Rstudio, it stated that:- 

1\) Warning in install.packages : installation of package ‘curl’ had non-zero exit status

2\) Warning in install.packages : installation of package ‘openssl’ had non-zero exit status

3\) Warning in install.packages : installation of package ‘httr’ had non-zero exit status

4\) Warning in install.packages : installation of package ‘gmailr’ had non-zero exit status

Initially, i though that this may be because i did not have installed devtools library in RStudio. When trying to install.packages("devtools"), The equivalent warning messages also appeared:

1\) Warning in install.packages : installation of package ‘curl’ had non-zero exit status

2\) Warning in install.packages : installation of package ‘openssl’ had non-zero exit status

3\) Warning in install.packages : installation of package ‘git2r’ had non-zero exit status

4\) Warning in install.packages : installation of package ‘httr’ had non-zero exit status

5\) Warning in install.packages : installation of package ‘devtools’ had non-zero exit status

Then when i search on google for this problem, seem that i am not alone facing the [problem](stackoverflow.com/questions/20923209/problems-installing-the-devtools-package). 

what we need to do is very simple, just open ubuntu terminal and paste the following code:

sudo apt-get install libcurl4-openssl-dev libssl-dev

Let the terminal do the work, right after you paste the code, you will be required to enter the password of your machine to execute the code. 

Once it done, go back to Rstudio and install.packages("devtools"). It works with my machine. 

Thanks!

![](https://static.wixstatic.com/media/e47301_804ca8fe906745838a70163001a3861c~mv2.png)
