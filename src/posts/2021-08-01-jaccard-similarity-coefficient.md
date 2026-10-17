---
title: "Jaccard Similarity Coefficient"
date: 2021-08-01T08:08:41.382Z
slug: jaccard-similarity-coefficient
categories: []
image: "/assets/img/e47301_5f14187654fb4e60b638ada9ae2c371f.png"
---

Jaccard similarity is an easy, intuitive formula that is very powerful in many use cases including object detection in image recognition, classification, and image segmentation task (instance detection).  Its sometimes called as the Jaccard similarity coefficient or Jaccard similarity index. It compares members for two sets to see which members are shared and which are distinct. It's a measure of similarity for the two sets of data, with a range from 0% to 100%.

The higher the percentage, the more similar the two populations. Although it's easy to interpret, it is extremely sensitive to small sample sizes and may give erroneous results, especially with very small samples or data sets with missing observations. 

As a proper definition, the Jaccard index, is an intersection over Union and the Jaccard similarity coefficient (originally given the French name coefficient de communaute by Paul Jaccard), is a statistic used for gauging the similarity and diversity of sample sets. 

![](/assets/img/e47301_5f14187654fb4e60b638ada9ae2c371f.png)

As the formula shows, J(A,B) JS formula depends on set A and set B, specifically it is the division of intersect of A and B denoted by the arch shape, and the A union of B denoted by U. It is basically a formula for measuring how much overlap there is between A and B.

The part of the formula can be re-written as \|A\| + \|B\| - \|A intersect with B\| because when we do \|A\| + \|B\|, it is potentially larger than \|A union B\| because there may be an overlap, so we need to subtract the overlap \|A intersect with B\|. 

The steps for calculation as follows: 

1\) Count the number of members which are shared between both sets. 

2\) Count the total number of members in both sets (shared and un-shared). 

3\) Divide the number of shared members (1) by the total number of members in (2). 

4\) Multiply the number you found in (3) by 100. 

This percentage tells use how similar the two sets are: 

1\) Two sets that share all members would be 100% similar. The closer to 100% , the more similarity (eg: 90% is more similar than 89%). 

2\) If they share no members , there are 0% similar.

3\) The midway point - 50% : means that the two sets share half of the members. 

#### Visualize the Jaccard Similarity

The Jaccard similarity can be easily visualized using Venn diagrams. Making it one of the easiest machine learning formula to understand. 

![](/assets/img/e47301_78c08bc00d7342fcb7357d61567423af.png)

The first Venn diagram illustrate the intersect in violet colour, and the non-overlapped area of A and B in yellow and orange. 

The second Venn diagram is the union of A and B. Note it is \|A\| + \|B\| - \|A intersect with B\|

Again the intuition of this formula is that it measures the ratio of overlap between the intersect and the union. 

#### Example Jaccard Similarity in R

Suppose we have the following two sets of data: 

```r
a <- c(0, 1, 2, 5, 6, 8, 9)
b <- c(0, 2, 3, 4, 5, 7, 9)
```

we can define the following function to calculate the Jaccard Similarity between the two sets. 

```r
#define Jaccard Similarity function
jaccard <- function(a, b) {
    intersection = length(intersect(a, b))
    union = length(a) + length(b) - intersection
    return (intersection/union)
}

#find Jaccard Similarity between the two sets 
jaccard(a, b)

0.4
```

The Jaccard Similarity between the two list is 0.4. 
