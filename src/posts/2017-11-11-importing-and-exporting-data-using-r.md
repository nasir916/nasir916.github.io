---
title: "How to import and export data using R-programming"
date: 2017-11-11T11:46:00Z
slug: importing-and-exporting-data-using-r
categories: ["R-Programming"]
image: "https://static.wixstatic.com/media/e47301_6237211c201246efa44fc4bfbc436597~mv2.jpg"
---

![](https://static.wixstatic.com/media/e47301_6237211c201246efa44fc4bfbc436597~mv2.jpg)

Introduction 

Importing data into R is very simple and easy. For SPSS data file, we will use Hmisc package, for STATA and Systat data file, we will use foreign package.  for some reason we will use readr package to import csv and text file into R. 

In this notes, we will use Data Exercise.sav, demo.csv, KAP1.dta for demonstration. all these data can be download [here](drive.google.com/open?id=1eUmw6Yz3dLbHws4AlGim4l6iGR8cC545).

At first, let us setting up the environment of R. we need to make sure the working directory is correctly setup. and clear all object that we not going to use in the environment. this is because R consume/depend at your physical memory (RAM). 

1\) to clear all objects in R environment:

***rm(list=ls())*** 

2\) to check working directory

**#to check current working directory**

***getwd()***

#if not satisfied, we can change the working directory using 

***setwd("~/data/whateveryourfoldernamed")***

importing from comma delimited text file

First, we must make sure the original file have these criterias:  
  
1\. The first row of the file should contain variable names at the top.  
  
2\. The variable names must include normal letters, numbers and underscores (for example: Age, Admission\_  
  
date, Score\_1).  
  
3\. Should not include special characters such as space, @,$,#(for example: “Admission Date”, #race,  
  
@prob).  
  
4\. The data should begin at the second row and first column onwards.  
  
5\. Everything that is not part of the data should be removed (for example: comments, labels, graphs,  
  
pivot tables).

This is the example of comma delimited text file  
***mydata \<- read.table("demo.csv", header=TRUE, sep=",")***

  
  
Next, we can check for the dimension of the data set by using this code:

  
***dim(mydata) #To look at the dimensions of the data***

  
***# it will display Eg: 6400 28***  
  
***# means that in the dataset we have:***  
  
***# 6400 observations (rows)***  
  
***# 28 variables (columns)***

  
  
we also can view some of the observations by:

***head(mydata) # it will show first 6 observations for all variables***  
  
***head(mydata\[1:4\], n=10L) #it will show first 10 observation (10L)***  
  
***#for variable number 1 until number 4***.

Importing from an Excel File

one of the best ways to read an excel file is to export it to a comma delimited file and import it using method above. But it kinda stupid way. The best way is to use the xlsx package to access excel file.  The first row should contain variable/column names. 

As start, we can read in the first worksheet from the workbook demo.xls by double click on the orginal excel file and make sure the first row contains variable names and all the criteria mention in the previous section.

To start importing excel file, we need to install a library named xlsx.

***install.packages("readxl")*** 

If you already install the package, please load it up by calling the library.

***library(readxl)***

Now we can begin to import the data from excel file

***mydata1 \<- read\_excel("demo.xls", sheet='demo')***

***#We need to specify the sheet name.***

***#In this case the sheet name is 'demo'.***

In the file name, you can mention either it is .xls or .xlsx, There are another method to import data from excel, without specifying the sheet name. But you need to know which number of sheet you want to import,in this case, the sheet is in the 1st sheet. 

mydata1 \<- read\_excel("demo.xls", 1)

#We need to specify the sheet name.#In this case the sheet name is 'demo'

Importing dataset from SPSS file  
 

To import data file from SPSS format file we need to install ‘foreign’ library. In foreign library, we able to import data file from SPSS and STATA. 

  
***install.packages("foreign")***

  
If you already install the package, please load it up by calling the library

  
***library(foreign)***

  
Now we can begin to import the data from SPSS file

  
***data.sav = read.spss("Data Exercise.sav", to.data.frame = TRUE) #SPSS***  
  
***#Last option converts value labels to R factors***

There are another method to import SPSS data file into R, by using Hmisc library

  
***install.packages("Hmisc")***  
  
***library(Hmisc)***  
  
***mydata1 \<- spss.get("Data Exercise.sav", use.value.labels=T)***

Importing data from STATA

  
  
In this example, we will use foreign library to import data

  
***library(foreign)***

  
  
Now, we will begin to import STATA data file format .dta into R.

  
***mydata \<- read.dta("KAP1.dta")***

  
  
It actually pretty fast to import STATA data file into R.

  
Exporting Data to other file format

  
  
There are numerous methods for exporting R objects into other formats. For SPSS, SAS and Stata, you will need to load the **foreign** packages. For Excel, you will need the **xlsReadWrite** package.

  
Exporting to a Tab Delimited text file

  
  
First, we need to load foreign library to enable us to export to text file.

  
***library(foreign)***

  
  
To begin exporting, let consider mydata object at the last importing notes (import from STATA) which is **KAP1.dta**.

  
***write.table(mydata, "text.txt", sep="\\t")***

  
  
The function works are where x is our object data (mydata), then file=“” is the new file that we want to create. Others, quote, eol, na, dec, row.names, col.names, qmethod and fileEncoding definition can be view in the document file of write.table by :

  
***?write.table***

  
  
I would like to emphasize on ‘sep’ function in the command line. For tab delimited we use sep=“’’, for comma delimited is sep=“,”, For space delimited is sep=" “. Now we can find the text.txt file that we have created in our working directory.

Export to an Excel Spreadsheet

  
  
We need to call xlsx library in order to export the data into excel spreadsheet

  
***library(xlsx)***

  
  
To write into excel spreadsheet

  
**write.xlsx(mydata, "myexcel.xlsx")**  
 

To Export into SPSS data file

  
  
To write out text datafile and an SPSS program to read it we need to use foreign library.

  
***library(foreign)***

  
  
Begin to export to SPSS datafile

  
***write.foreign(mydata, "mydata.txt", "mydata.sps", package="SPSS")***

  
To Export into STATA data file

  
  
To Export datafile into STATA data file format still under foreign library

  
***library(foreign)***

  
  
Begin to export to STATA binary datafile format

  
***write.dta(mydata, "mydata.dta")***
