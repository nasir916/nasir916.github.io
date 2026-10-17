---
title: "Nearest-Neighbor Classifiers"
date: 2019-03-11T05:46:28.202Z
slug: nearest-neighbor-classifiers
categories: ["Machine Learning"]
image: "/assets/img/e47301_2f24b173576441848eb814519f7a59c7.png"
---

The K-Nearest Neighbor algorithms are among the simplest of all machine learning algorithms. The idea is to memorize the training set and then to predict the label of any new instance on the basis of the labels of its closest neighbors in the training set. The rationale behind such a method is based on the assumption that the features that are used to describe the domain points are relevant to their labeling in a way that makes close-by points likely to have the same label. 

Furthermore, in some situations, even when the training set is immense, finding a nearest neighbor can be done extremely fast (for example, when the training set is the entire Web and distance are based on links). 

The k-nearest Neighbor (kNN) finds the closest training set object in the N-dimensional feature space that is closest to the object being classified. This approach follows the notion that because the neighbor is nearby in feature space, it is likely to be similar to the object being classified and so is likely to be the same class as that object.

Several issues, however, are associated with the use of the algorithm: 

1\) The inclusion of irrelevant variables lowers the classification accuracy.

2\) The algorithm works primarily on numerical variables.

3\) Categorical variables can be handled but must be specially treated by the algorithm.

4\) Classification accuracy will be degraded if the scales of variables are not in proportion to their importance.

The Advantages of kNN classifiers.

1\) They are easy to implement. 

2\) They can also give quite good results if the features are chosen carefully (and if they are weighted carefully in the computation of the distance).

The Disadvantages of kNN classifiers.

1\) The most serious shortcoming of nearest-neighbor methods is that they are very sensitive to the presence of irrelevant parameters. Adding a single parameter that has a random value for all objects (so that it does not separate the classes) can cause these classifier to fail miserably.

2\) Similar to a neural network, the nearest-neighbor classifiers do not simplify the distribution of objects in parameter space to a comprehensive set of features. Instead, the training set is retained in its entirely as description of the object distribution. There are some thinning methods that can be used on the training set, but the result still may not provide a compact description of the object distribution. 

3\) These classifier are also rather slow if the training set has many variables.

The kNN is a learning by memorization type of rule. It require the entire training data set to be stored, and at test time, we need to scan the entire data set in order to find the neighbors. The time of applying the kNN rule is expensive computation at test time.  The k-NN is usually performed in practice after a dimensions reduction pre-processing step. 

**Reference**: 

1\) Shai Shalev-Shwartz & Shai (2014) Ben-David, Understanding Machine Learning - from theory to algorithms., Cambridge University Press.

2\) Robert Nisbet, Gary Miner & Ken Yale (2018) Handbook of Statistical Analysis and Data Mining Applications (second edition), Academic Press.

![](/assets/img/e47301_2f24b173576441848eb814519f7a59c7.png)
