---
sidebar_position: 1
title: Connect your Pennsieve account with SODA
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Connect%20your%20Pennsieve%20account%20with%20SODA&description=Manage%20Dataset&org=fairdataihub
---

## Background

SPARC uses the [Pennsieve](https://app.pennsieve.net/) platform to store data and metadata files as well as append additional metadata. All SPARC researchers must thus share their data on Pennsieve. When using SODA for the first time, you will have to connect your Pennsieve account with SODA to use Pennsieve related functionalities implemented in SODA.

## Prerequisite

You will need a Pennsieve account with access to the Pennsieve workspace where you need to upload your data (e.g., SPARC, RE-JOIN, etc.) before connecting your Pennsieve account with SODA. If you do not have a Pennsieve account and/or access to the right Pennsieve workspace, follow the instructions available [here](../../how-to/how-to-get-a-pennsieve-account).

## How to login with Email and Password

1. Click on any features (e.g. Create a new dataset) under `Manage Datasets`.
2. Click on the **edit** symbol next to **Current account**.
3. Fill in your Pennsieve **Email Address** and **Password** and click `Connect to Pennsieve`

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-PS-SODA.png?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

:::note

- During subsequent uses, SODA will automatically connect to the Pennsieve account you were connected to the last time.
- Neither the SODA Team nor anyone else besides you will have access to your Pennsieve account. The generated login information required for future sessions on your Pennsieve account will be stored locally on your computer only.

:::

## How to login with API key

If you do not wish to provide your Pennsieve login details to SODA, you can create a set of API keys on Pennsieve and provide it to SODA.

:::caution
Some features of SODA might not work if you add your API keys to SODA in this method. We recommend that you use the [username/password entry method](#how-to) to guarantee that only the relevant information needed for SODA is used.
:::

1. Click on any of the features (e.g. Create a new dataset) under Manage Datasets
2. On the login prompt click on `I want to connect with an API key instead` at the bottom of the prompt.
3. [Follow the instructions on the Pennsieve help page](https://docs.pennsieve.io/docs/configuring-the-client-credentials) or watch our tutorial video below to get an **API key** and an **API secret** from your Pennsieve account. Before generating the API key and secret, ensure that your private workspace on Pennsieve matches the workspace to which you will be uploading your data (e.g. "SPARC" for SPARC datasets, "RE-JOIN" for RE-JOIN datasets, etc.). Also set your **Key name** to `SODA-Pennsieve`
4. Enter your **Key name** (`SODA-Pennsieve`), **API key**, and **API secret** and in the corresponding fields then click on `Add`.

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/connect-with-api.mp4"
/>

<PageFeedback />
