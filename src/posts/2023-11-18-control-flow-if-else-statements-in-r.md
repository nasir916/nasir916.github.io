---
title: "Control Flow: If-Else Statements in R"
date: 2023-11-18T14:09:53.292Z
slug: control-flow-if-else-statements-in-r
categories: []
image: "https://i.ytimg.com/vi/1fP8AfYFP8w/maxresdefault.jpg"
---

https://www.youtube.com/watch?v=1fP8AfYFP8w

Welcome to a new chapter on control flow in R. In this chapter, we will explore the if-else statement, which is a fundamental component of flow control in R. The if-else statement allows for the execution of code in a non-linear fashion based on a given condition. It enables you to create dynamic programs that can make decisions, repeat actions, and handle different inputs.

### Understanding the If Statement

The if statement evaluates a given condition, and if the condition is true, the block of code within the if statement will be executed. If the condition is false, the code will be ignored. The basic syntax of the if statement is as follows:

```r
if (condition) {
  # Code to execute if condition is true
}
```

Let's look at an example to better understand the if statement. Suppose we want to check if a number is positive. We can write the following code:

```r
number <- 5

if (number > 0) {
  print("Number is positive")
} else {
  print("Number is negative")
}
```

In this example, the condition is that the number is greater than zero. If the condition is true, the code within the if block will be executed and "Number is positive" will be printed. If the condition is false, the code within the else block will be executed and "Number is negative" will be printed.

### Validating Age for Voting

Let's consider another example where we validate the age for voting. In this case, if a person's age is 18 or above, they are eligible to vote. Otherwise, they are not eligible. Here's the code:

```r
age <- 17

if (age >= 18) {
  print("You are eligible to vote")
} else {
  print("You are not eligible to vote")
}
```

In this example, if the age is 18 or above, "You are eligible to vote" will be printed. Otherwise, "You are not eligible to vote" will be printed.

### Checking for Non-Negative Numbers

Now let's demonstrate the use of the if statement to check whether a number is non-negative (positive or zero). Here's the code:

```r
number <- -10

if (number >= 0) {
  print("Number is a non-negative number")
} else {
  print("Number is a negative number")
}
```

In this example, if the number is greater than or equal to zero, "Number is a non-negative number" will be printed. Otherwise, "Number is a negative number" will be printed.

### Validating Password Length

Let's consider a basic example to validate the length of a password. Here's the code:

```r
password <- "password123"

if (nchar(password) >= 8) {
  print("Password length is valid")
} else {
  print("Password length is invalid. It must be at least eight characters long.")
}
```

In this example, if the length of the password is greater than or equal to eight, "Password length is valid" will be printed. Otherwise, "Password length is invalid. It must be at least eight characters long." will be printed.

### Changing Variable to Factor Data Type

In this example, we want to change a variable's data type from numeric to factor. Let's consider the variable "cyl" in the "mtcars" dataset as an example. Here's the code:

```r
data <- mtcars
variable_to_convert <- "cyl"

if (variable_to_convert %in% names(data)) {
  data[[variable_to_convert]] <- as.factor(data[[variable_to_convert]])
  print(paste(variable_to_convert, "has been converted to a factor"))
} else {
  print(paste(variable_to_convert, "does not exist in the dataset"))
}
```

In this example, if the variable "cyl" exists in the "mtcars" dataset, it will be converted to a factor. The message "cyl has been converted to a factor" will be printed. If the variable does not exist in the dataset, the message "cyl does not exist in the dataset" will be printed.

### Categorizing Individuals into Age Groups

In this example, we categorize individuals into different age groups based on their age. Let's define the age groups as follows: children (age less than 12), teenagers (age 12-19), young adults (age 20-35), adults (age 36-60), and seniors (age 61 and above). Here's the code:

```r
age <- 34

if (age < 12) {
  print("You belong to the children age group")
} else if (age <= 19) {
  print("You belong to the teenagers age group")
} else if (age <= 35) {
  print("You belong to the young adults age group")
} else if (age <= 60) {
  print("You belong to the adults age group")
} else {
  print("You belong to the seniors age group")
}
```

In this example, if the age is less than 12, "You belong to the children age group" will be printed. If the age is between 12 and 19 (inclusive), "You belong to the teenagers age group" will be printed, and so on.
