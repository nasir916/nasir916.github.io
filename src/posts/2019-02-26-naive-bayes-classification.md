---
title: "Naive Bayes Classification"
date: 2019-02-26T17:24:44.576Z
slug: naive-bayes-classification
categories: ["Machine Learning"]
image: "/assets/img/e47301_bb1f1a74ae944548aa54c07859e48f25.png"
---

Introduction 

- The Naïve Bayes (NB) classifier technique is based on Bayesian Theorem.  
- NB suited when the dimensionality of the data is higher than sample size (p \>= n).  
- NB often outperform more sophisticated classification methods. 

Lets consider this figure, the object can be classified as either circle (yellow) or Triangle (green).

![](/assets/img/e47301_bb1f1a74ae944548aa54c07859e48f25.png)

   Our task is to classify new cases as they arrive (to decide which class label they belong based on existing objects).

- Since green triangle is more than yellow circle, we can says that if new case arrive (which has not been observed yet), it is more likely to have membership in green triangle rather than yellow circle. 

In Bayesian Analysis, this situation is known as Prior Probability! 

- The prior probability is based on previous experience. In this case the percentage of yellow circle and green triangle  
- The prior probability often used to predict outcomes before they actually happen. 

We can write the prior probability as :

![](/assets/img/e47301_38e002d3903b43fead9ebb887841b88d.jpg)

Let just say, the number of yellow circle in the figure is 20, and green triangle is 40. It makes the total of objects in the figure to be 60 objects (yellow + green). Thus our prior probabilities for class membership are:

![](/assets/img/e47301_87ae746e3b77457e85dfe68b3cba325e.jpg)

Having formulated our prior probability, we are now ready to classify a new object. As seen in these figure below, since the object are well clustered, it is reasonable to assume that the more green (or yellow) object in the vicinity of blue rectangular, the more likely that the new cases belong to that particular colour.

![](/assets/img/e47301_0d2a68cb29be448daa53fbb66c2d246f.png)

To measure this likelihood, we draw a circle around blue rectangular, while encompasses a number (to be chosen a priori) of points irrespective of their class labels. Then we can calculate the number of points in the circle that belongs to each class label.

From this we can calculate the likelihood as below:

![](/assets/img/e47301_83674cfc44d14425806108cd1bda7348.jpg)

 From the illustration above, it is clear that likelihood of Blue rectangular given Green Triangle is smaller than the likelihood of Blue rectangular given Yellow circle. Since, the circle encompasses 2 green triangle object and 3 Yellow circle. Then the likelihood are:

![](/assets/img/e47301_6cc58edea6af4291be95611ad6d41cd8.jpg)

Although the prior probabilities indicate that Blue rectangular may belong to Green triangle (given that there are twice as many Green compared to yellow), the likelihood indicate otherwise, that the class membership of blue rectangular (given that there are more yellow object in the vicinity of Blue than green).

In the Bayesian analysis, the final classification is produced by combination both source of information (eg: the prior and the likelihood, to form a posterior probability using the Bayes’ rule)

Posterior probability of Blue being Green = Prior probability of green \* likelihood of blue given green.

![](/assets/img/e47301_9444b53fdb4e40bbb735ebb46f045dbc.jpg)

 Posterior probability of Blue being Yellow = Prior probability of yellow \* likelihood of blue given yellow.

![](/assets/img/e47301_104d9328a2974f7489c62f42e4f5fb75.jpg)

Finally, we classify Blue Rectangular as Yellow since its class membership achieved the largest posterior probability.
