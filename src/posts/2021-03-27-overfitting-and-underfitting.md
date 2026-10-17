---
title: "Overfitting and Underfitting"
date: 2021-03-27T07:11:16.343Z
slug: overfitting-and-underfitting
categories: []
image: "/assets/img/e47301_6e77a13cfe314376a90102b997fdeeaa.png"
---

Disclaimer: This article is copied from [Overfitting vs. Underfitting. A guide to recognize and remedy your… \| by Nabil M Abbas \| The Startup \| Medium](https://medium.com/swlh/overfitting-vs-underfitting-d742b4ffac57)

One of the most alarming indicators of a poorly performing machine learning model is an accuracy test of the training and testing data. A test of your data will indicate if your model is overfit, underfit, or balanced. The reason we have train-test split is so that we can determine and adjust the performance of our models. Otherwise we would be blindly training our models to predict without any insight on the model’s performance.

![](/assets/img/e47301_6e77a13cfe314376a90102b997fdeeaa.png)

### **1) Underfitting**

The model is considered as underfitting the training data when the model performs poorly on the training data as compared to test data. 

The reason of underfitting are:

i) Trying to create a linear model with non linear data.

ii) Having too little data to build an accurate model.

iii) Model is too simple, has too few features.

Underfit learners tends to have **Low Variance but High Bias**. The model simply does not capture the relationship of the training data, leading to inaccurate predictions of the training data.

How to rectify? 

i) Add more features during feature selection.

ii) Engineer additional features within the scope of your problem that makes sense. 

Having more features limits bias within your model. 

### **2) Overfitting**

The model is considered  as overfitting the training data when the model performs well on the training data but does not perform well on the evaluation data.

The reason of Overfitting are:

i) The algorithm captured the "noise" of the data.

ii) The model fits the data too well. 

iii) An overfit model shows low bias and high variance. 

iv) The model is excessively complicated likely due to redundant features.

How to rectify?

When a model is overfit, the relationship between model features and the target variable is not being captured.

i) **k-fold cross validation.** It is a powerful preventative measure against overfitting. The idea behind cross validation is that you are performing multiple mini train-test splits to tune your model.

	"*In standard k-fold cross-validation, we partition the data into k subsets, called folds. Then, we iteratively train the algorithm on k-1 folds while using the remaining fold as the test set (called the “holdout fold”).*

![](/assets/img/e47301_0669cea232804affb97bf2f2a0858d74.jpeg)

ii) **train with more data**. This won’t work in every case, but in scenarios where you are looking at a skewed sample of data, sampling additional data can help normalize your data. An example of this is if you model height vs. age of children, sampling from more school districts will help your model.

iii) **remove features**. But it is important to have an understanding of feature importance. You have to be mindful of the problem you are trying to address and have some domain knowledge. Ultimately redundant features will not help and should not be included in your machine learning model.

iv) **Regularization** is a method that entails a variety of techniques to artificially force your model to be simpler. The technique being used depends on the type of learner you are using. For example, for a linear regression you can add a penalty parameter to the cost function. “But oftentimes, the regularization method is a hyperparameter as well, which means it can be tuned through cross-validation.” To learn more about regularization in regards to particular algorithms have a look at the <u>[link](https://elitedatascience.com/machine-learning-algorithms)</u>.

v) **Ensembles** are a machine learning method to combine predictions from multiple separate models. Ensembles use **bagging** to attempt to reduce the chance to overfit complex models, and **boosting** to improve “predictive flexibility of simple models.”

### **Bias Variance Trade Off**

![](/assets/img/e47301_7f0857597ace4152ac3fbbd81b86bba7.png)

Ultimately Data Scientists have to make decisions as to how they want their model to predict. They have to understand their model and why it is predicting a particular way. The ideas of overfitting and underfitting fall under the umbrella of the Bias Variance Trade Off. Ultimately error can come from both bias and variance, so the Data Scientist needs to be able to find a balance. But I’ll leave the Bias Variance Trade Off for a future post.

### Sources:

<u>1)</u> <u>[https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html](https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html)</u>

<u>2)</u> <u>[https://medium.com/swlh/overfitting-vs-underfitting-d742b4ffac57](https://medium.com/swlh/overfitting-vs-underfitting-d742b4ffac57)</u> 
