---
title: "Notification from R!"
date: 2017-12-13T15:49:44.915Z
slug: notification-from-r
categories: ["My Thinking"]
image: "https://static.wixstatic.com/media/e47301_3b9f8505a7ef4b249c7c8f7aa9d42603~mv2.jpg"
---

When working with long executable script in R, we usually don't know when it can be done? and how long it will takes to complete the analysis?. For me, i am dealing with analysis of high - dimensional data where it took a lot of time to complete the whole analysis. Previously, i manually do check on my machine for the analysis (checking whether the analysis have done or not). Sometimes, i forgot to check the analysis and it kind a annoying when the analysis is not yet finish when you check it. 

There are several methods to get notification from R when it finished executions. If we are dealing with not so long execution code maybe we can try (beepr) package, where it will notify by playing sound from our machine. But this method is valuable when you are always near at your machine. However, for me, it is not very practical, because i am not always will be around my machine, plus i am using remote desktop machine (it will not play sound in my current remote machine).

Another method that can be used is by sending email via R. This is one of effective method where i can get notification when my analysis have completely executed from R. Since i am installing email apps in my mobile phone, i will get notification in the phone. It kind a amazing method to know that my analysis is completed, and i am no longer need to regularly check my machine for that purposed. Furthermore, i am always with my phone all days. However, the drawback for this method is in my email there are too many new email, and sometimes i am not really read my email thoroughly. But this method, is always helpful.

There are another method to get notification from R, through private message using Telegram and Pushover apps in mobile phone. I think that this is the most super-efficient method to get notification from R (for me lah!). This is because,  i am taking seriously on looking private message in the phone.  Besides that, there are a lot more mobile apps that provide an Application Programming Interface (API) to enable sending private message to mobile phone such as twillo, whatsapps, etc.. After doing some research, i found that these apps (Telegram and Pushover) are good platform to send private message from R (and others programming languages). However, the Pushover apps is not a free apps; you will get free 7 days trial. For the cheapskate person as myself, i would rather choose free apps such as Telegram apps. 

In the next post, i will show how to use mentioned packages in R.

Thanks!

![Notification from R!](https://static.wixstatic.com/media/e47301_3b9f8505a7ef4b249c7c8f7aa9d42603~mv2.jpg)
