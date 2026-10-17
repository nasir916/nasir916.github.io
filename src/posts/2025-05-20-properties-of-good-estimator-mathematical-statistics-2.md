---
title: "Properties of Good Estimator - Mathematical Statistics 2"
date: 2025-05-20T04:53:55.004Z
slug: properties-of-good-estimator-mathematical-statistics-2
categories: []
image: "https://i.ytimg.com/vi/Ic2JcELw9V4/maxresdefault.jpg"
---

https://www.youtube.com/watch?v=Ic2JcELw9V4

Understanding the properties of good estimators is fundamental in statistical inference, particularly when dealing with real-world data in fields such as medical research, economics, and machine learning. This article explores the key properties that define a good estimator, drawing insights from advanced statistical methodologies and practical examples. Whether you are a student, researcher, or practitioner, grasping these concepts will enhance your ability to select and evaluate estimators for your data analysis tasks.

### 🔍 Introduction to Estimators and Their Importance

An estimator is a function of random samples used to estimate unknown population parameters. Because it depends on random samples, an estimator itself is a random variable. This dual nature is crucial because it influences how we understand the sampling distribution of the estimator and its long-term performance across repeated samples.

Consider the challenge of estimating population variance. The sample variance, calculated from a data sample, rarely equals the true population variance exactly. However, understanding the behavior of the sample variance across many samples—whether it tends to be close to the true variance on average—helps us evaluate its reliability as an estimator.

Similarly, when deciding between using the sample mean or the sample median to estimate a population mean (such as average blood pressure or glucose levels), examining the sampling distributions of these estimators allows us to choose the one that best represents the true population parameter.

Different estimation methods, like Maximum Likelihood Estimation (MLE) and Method of Moments, can yield different estimators for the same parameter. For example, estimating the parameter θ of a uniform distribution can be done by either taking the maximum observed value (MLE) or computing a scaled average (method of moments). Evaluating these estimators requires understanding their statistical properties.

### 📏 Four Key Properties of a Good Estimator

Evaluating estimators involves four fundamental properties:

- **Unbiasedness**
- **Consistency**
- **Sufficiency**
- **Efficiency**

Each property provides a different lens for assessing how well an estimator performs in representing the true population parameter.

### 🎯 Unbiasedness of Estimators

An estimator is **unbiased** if its expected value equals the true parameter it estimates. In other words, over many repeated samples, the average of the estimator's values converges to the actual population parameter.

For example, the sample mean is an unbiased estimator of the population mean. If you repeatedly sample 100 individuals and calculate the sample mean blood pressure, the average of these sample means will equal the true population mean blood pressure.

Conversely, a biased estimator consistently overestimates or underestimates the parameter. For instance, the sample median may be biased when estimating the mean in some populations, as it tends to deviate systematically from the true mean.

Mathematically, an estimator *θ̂* is unbiased for parameter *θ* if:

> 𝐸(θ̂) = θ

Where 𝐸 denotes the expectation operator. If this equality does not hold, the estimator is biased.

#### Examples of Unbiased Estimators

- **Sample Proportion for Binomial Data:** The sample proportion (number of successes divided by sample size) is an unbiased estimator of the true probability of success in a binomial distribution.
- **Weighted and Simple Sample Means:** Both weighted and simple averages of observations drawn from a normal distribution are unbiased estimators of the population mean.

#### Examples of Biased Estimators

- **Biased Sample Variance:** The sample variance computed by dividing by *n* instead of *n-1* tends to underestimate the true population variance, making it a biased estimator.
- **Minimax Estimator for Binomial Parameter:** A specific estimator involving adjustments by square root terms is only unbiased when the parameter equals 0.5; otherwise, it is biased.

### 📈 Consistency of Estimators

While unbiasedness focuses on the average value of an estimator across repeated samples of fixed size, **consistency** concerns the behavior of the estimator as the sample size grows larger.

An estimator is consistent if it converges in probability to the true parameter as the sample size approaches infinity. In practical terms, this means that with more data, the estimator becomes increasingly accurate.

Formally, an estimator *θ̂* is consistent for parameter *θ* if for every small positive number *c*, the probability that *θ̂* lies within *c* of *θ* approaches 1 as the sample size *n* increases:

> limn→∞ P(\|θ̂ - θ\| \< c) = 1

This property explains why larger sample sizes generally yield more reliable estimates. For example, estimating the average fasting blood glucose level in patients newly diagnosed with type 2 diabetes will be more precise as the number of patients sampled increases.

#### Illustration of Consistency

Imagine taking 1,000 samples of size 5, 100, and 1,000 each from a population. The sample means from small samples tend to be widely spread and may not be close to the true mean. As sample size increases, the distribution of sample means tightens around the true population mean, demonstrating consistency.

#### Relationship Between Unbiasedness and Consistency

- An unbiased estimator need not be consistent if its variance does not decrease with increasing sample size.
- An estimator can be biased yet consistent if the bias diminishes as the sample size grows.

For example, the uncorrected sample variance (dividing by *n* instead of *n-1*) is biased but consistent for the population variance because its bias becomes negligible with large samples.

### 📊 Sufficiency of Estimators

The concept of **sufficiency** addresses whether an estimator captures all the information in the sample relevant to estimating the parameter.

Sufficient statistics summarize the data without losing essential information about the parameter. Once a sufficient statistic is known, the rest of the data can be ignored without compromising the quality of estimation.

This concept was formalized through the Neyman-Fisher Factorization Theorem, which states that the likelihood function can be factored into two parts: one depending only on the sufficient statistic and the parameter, and another independent of the parameter.

#### Why Sufficiency Matters

- Sufficient estimators reduce data complexity by summarizing all relevant information efficiently.
- They form the foundation for advanced results like the Rao-Blackwell theorem, which improves estimator performance by conditioning on sufficient statistics.
- Sufficient statistics are widely used in statistics, economics, and machine learning for efficient data analysis.

#### Example of Sufficiency

In a clinical trial measuring blood pressure reduction in 100 patients, the sample mean reduction is a sufficient estimator of the true average reduction if the data follow a normal distribution with known variance. This means the sample mean encapsulates all necessary information to estimate the population mean accurately.

### ⚖️ Efficiency of Estimators (Brief Overview)

Though not deeply covered here, **efficiency** refers to the variance of an estimator among all unbiased estimators. An efficient estimator has the smallest variance, meaning it provides the most precise estimates.

Efficiency is a critical consideration when choosing between competing unbiased estimators.

### 🧮 Practical Examples and Mathematical Proofs

Throughout the discussion, various examples illustrate these properties:

- **Binomial Distribution Proportion Estimator:** The sample proportion is shown to be unbiased and consistent using expectation and variance formulas.
- **Exponential Distribution Mean Estimator:** The sample mean scaled by a factor is tested for unbiasedness and consistency, revealing conditions under which it holds.
- **Normal Distribution Sample Variance:** The sample variance with Bessel’s correction (*n-1* denominator) is unbiased and consistent, supported by chi-square distribution properties.
- **Gamma Distribution Parameter Estimator:** The estimator for one parameter of the gamma distribution is shown to be consistent by examining variance behavior as sample size grows.

These examples demonstrate how theoretical properties translate into practical estimation strategies in applied statistics.

### 💡 Summary and Key Takeaways

- An estimator is a random variable derived from sample data used to infer population parameters.
- **Unbiasedness** ensures the estimator’s expected value equals the true parameter.
- **Consistency** guarantees the estimator converges to the true parameter as sample size increases.
- **Sufficiency** means the estimator summarizes all relevant information in the data without loss.
- Estimators can be unbiased but inconsistent, biased but consistent, or both unbiased and consistent.
- Choosing the right estimator involves balancing these properties along with efficiency.

In conclusion, understanding these properties enables statisticians and researchers to make informed decisions about which estimators to use in various contexts, ensuring accurate and reliable data analysis outcomes.

For those interested in further study, exploring the Neyman-Fisher Factorization Theorem and the Rao-Blackwell theorem will deepen your understanding of estimator optimization and sufficiency.
