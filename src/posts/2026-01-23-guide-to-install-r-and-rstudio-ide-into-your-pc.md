---
title: "Guide to install R and RStudio IDE into your PC"
date: 2026-01-23T09:03:35.697Z
slug: guide-to-install-r-and-rstudio-ide-into-your-pc
categories: []
image: "/assets/img/e47301_345da197be8e4491ace1fda1e6561371.png"
---

https://www.youtube.com/watch?v=3aXaw2w_ldM

### **Introduction**

This guide shows a straightforward, step-by-step process to install R (the programming language) and RStudio (the integrated development environment) on your computer. Instructions cover Windows, macOS and Linux, and include quick checks to confirm a successful installation.

### **Before you begin (prerequisites)**

- **Internet connection** to download installers.
- Know your operating system: Windows, macOS (Intel or Apple Silicon/M-series) or Linux.
- Administrator privileges to install applications on your machine.
- Recommended: 300 MB free space for RStudio and ~100 MB for R base (sizes vary by version).

### **Where to download**

\- R (The Comprehensive R Archive Network): [https://cran.r-project.org](https://cran.r-project.org)

\- RStudio Desktop: [https://posit.co](https://posit.co) (RStudio downloads are available from the RStudio / Posit website)

### **Step 1 — Install R (base)**

1. Open the CRAN website: [https://cran.r-project.org](https://cran.r-project.org)
2. Choose your operating system: **Windows**, **macOS** or **Linux**.
3. Windows:
   1. Click "Download R for Windows" → "Install R for the first time".
   2. Download the current Windows installer (for example, R 4.5.2 as a recent example).
   3. Run the downloaded .exe, accept the prompts, choose English (or your preferred language), and follow the installer defaults.
4. macOS:
   1. Click "Download R for macOS".
   2. Pick the package that matches your processor: Apple Silicon/M-series or Intel.
   3. Open the downloaded .pkg and follow the installer steps.
5. Linux:
   1. Follow the appropriate link for your distribution on the CRAN pages and use the distribution-specific instructions (APT/YUM/other).
6. When installation finishes, you should find an R icon (for example, "R x.y.z") in your Start menu, Applications folder or desktop.

### **Step 2 — Install RStudio (IDE)**

1. Open the RStudio (Posit) download page: [https://posit.co](https://posit.co) (choose RStudio Desktop).
2. Make sure R (base) is already installed before installing RStudio. RStudio uses the installed R installation.
3. Choose the installer for your operating system:
   - Windows: download the RStudio Desktop .exe (example recent version: 2026.01.0+392).
   - macOS: download the .dmg for your macOS version.
   - Linux: select the appropriate package for your distribution.
4. Run the installer. On Windows you may be asked "Do you want to allow this app to make changes to your device?" — click **Yes**.
5. Choose the installation folder (default Program Files/C: is fine) and complete the installation.
6. When done, RStudio will usually place a desktop icon or an entry in your applications menu.

### **Verifying the installation**

1. Open the R application to confirm R base runs. You should see an R console window and a prompt.
2. Open RStudio. The typical layout includes four panes: Console, Environment/History, Files/Plots/Packages/Help, and Source/Editor.
3. Check the R version inside R or RStudio console. Example commands: R.version.string sessionInfo()
4. Verify the R version matches the one you installed (for example, "R version 4.5.2").

### **Troubleshooting and tips**

- If RStudio does not detect R, ensure R was installed in a default location and restart your computer. Reinstalling R first then RStudio often resolves detection problems.
- On macOS with Apple Silicon, install the correct package for M-series processors. Installing the Intel build on M-series may work under Rosetta but it is better to use the native build when available.
- If you see permission or UAC errors on Windows, run the installer as Administrator (right-click → Run as administrator).
- Keep both R and RStudio updated. R and RStudio versions are released independently; update R first, then RStudio.
- Need a specific R version for compatibility? CRAN archives old versions that can be downloaded if required.

### **Quick checklist before starting a project**

- **R base installed** and version confirmed.
- **RStudio installed** and launches with the R console available.
- Install commonly used packages using install.packages("packageName") as needed.

### **Final notes**

The installation process is simple: first install R base, then install RStudio Desktop. Following the installers' defaults will work for most users. Once installed, open RStudio and begin by checking your R version and installing any packages required for your work.

Peace and blessings. Assalamualaikum warahmatullahi wabarakatuh.
