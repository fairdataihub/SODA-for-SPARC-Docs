---
sidebar_position: 1
title: Connect your Pennsieve account with SODA
image: https://docs.sodaforsparc.io/thumbnails/manage-dataset/connect-your-pennsieve-account-with-soda.png
---

## Background

SPARC uses the [Pennsieve](https://app.pennsieve.net/) platform to store data and metadata files as well as append additional metadata. All SPARC researchers must thus share their data on Pennsieve. When using SODA for the first time, you will have to connect your Pennsieve account with SODA to use Pennsieve related functionalities implemented in SODA.

## Prerequisite

1. Sign up to [Pennsieve](https://app.pennsieve.net/)
2. Contact support@pennsieve.net to get access to the SPARC Consortium organization on Pennsieve. Ensure that the SPARC Consortium organization is listed under your organizations list on Pennsieve before you continue.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/consortium-bf-account.PNG?raw=true)

## How to

1. Click on any features (e.g. Create a new dataset) under `Manage Datasets`.
2. Click on the **edit** symbol next to **Current account**.
3. Fill in your Pennsieve **Email Address** and **Password** and click `Connect to Pennsieve`

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-PS-SODA.png?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

:::note

- During subsequent uses, SODA will automatically connect to the Pennsieve account you were connected to the last time.
- Neither the SODA Team nor anyone else besides you will have access to your Pennsieve account. The generated login information required for future sessions on your Pennsieve account will be stored locally on your computer only.

:::

<details>

<summary>If you do not wish to provide your Pennsieve login details to SODA, you can create a set of API keys on Pennsieve and provide it to SODA. Click this section to learn more.</summary>

:::caution
Some features of SODA might not work if you add your API keys to SODA in this method. We recommend that you use the [username/password entry method](#how-to) to guarantee that only the relevant information needed for SODA is used.
:::

- In the new pop-up window click on `I want to connect with an API key instead` at the bottom of the pop-up.
- Follow the instructions on the Pennsieve help page to get a **API key**, and **API secret** from your Pennsieve account. Make sure you are under the `SPARC Consortium` organization on Pennsieve when you generate the API key and secret. Also set your **Key name** to `SODA-Pennsieve`
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/consortium-bf-account.PNG?raw=true)
- Enter your **API key**, **API secret** and `SODA-Pennsieve` for your **Key name** in the corresponding fields then click on `Add`.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-blackfynn.gif?raw=true)

</details>

<PageFeedback />
