# My Inference – website of Dr. Mohammad Nasir Abdullah

Statistics, R programming and machine learning notes, courses and articles.
This website is free, hosted on **GitHub Pages**, and rebuilds itself automatically every time you save a change.

## How to add or edit content (the easy way)

1. Go to **https://app.pagescms.org** and click **Sign in with GitHub**.
2. Choose this repository.
3. You will see:
   - **Blog posts** – click **Add an entry** to write a new post, or click a post to edit it.
     To add a YouTube video, paste the YouTube link on its own line.
   - **About me**, **Talks & training**, **Projects & dashboards** – edit the text and links in simple forms.
4. Click **Save**. After about 1–2 minutes the change is live on the website.

## Where things are (if you prefer editing files on github.com)

| What | File / folder |
|---|---|
| Blog posts (one Markdown file each) | `src/posts/` |
| About me, social & podcast links | `src/_data/profile.json` |
| Talks & training list and photos | `src/_data/talks.json` |
| Teaching: Basic R, Data Analytics, course pages | `src/_data/teaching.json` |
| Projects & dashboards | `src/_data/projects.json` |
| Site name and description | `src/_data/site.json` |
| Images | `src/assets/img/` |
| Colours and fonts | `src/assets/css/style.css` |

A new post file is named `YYYY-MM-DD-short-title.md` and starts with:

```
---
title: "My new article"
date: 2026-10-20
slug: my-new-article
categories: ["R-Programming"]
image: "/assets/img/cover.png"
---

Write the article here in Markdown.
```

## How publishing works

Every change to the `main` branch runs the workflow in `.github/workflows/deploy.yml`, which builds the site with
[Eleventy](https://www.11ty.dev/) and publishes it to GitHub Pages. You can follow it under the **Actions** tab.
The first run also copies images that are still hosted on Wix into `src/assets/img/`, so the site no longer depends on Wix.

To preview locally (optional): install Node.js, then run `npm install` and `npm start`.
