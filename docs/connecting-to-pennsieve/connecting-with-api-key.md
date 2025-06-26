---
sidebar_position: 2
title: Connecting with ORCiD/API key
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Connecting%20with%20ORCiD%2FAPI%20key&description=How%20to%20connect%20Pennsieve%20to%20SODA%20with%20an%20API%20key&org=fairdataihub
---

:::caution
Using your API key to sign in is only recommended if you sign in to Pennsieve with an ORCiD account.
If you have a Pennsieve username and password, please view how to use them to sign in [here](./connecting-with-username-password).
:::

## Background

SPARC uses the [Pennsieve](https://app.pennsieve.net/) platform to store data and metadata files as well as append additional metadata. All SPARC researchers must thus share their data on Pennsieve. The Pennsieve Agent is a tool developed by the Pennsieve team to help researchers programmatically upload their datasets to the platform. However, some researchers find this tool intimidating. SODA helps by
hiding the Pennsieve Agent's complexities behind a user-friendly interface that allows researchers to upload their datasets with ease.

:::info
If you are not a SPARC or RE-JOIN funded researcher and want to upload your dataset to a generalist repository (e.g., Zenodo) instead of Pennsieve you can disregard this page and skip to the instructions for
generating a SPARC Data Structure (SDS) compliant dataset on your computer [here](../guided).
:::

## Prerequisite

You will need a Pennsieve account with access to the Pennsieve workspace where you need to upload your data (e.g., SPARC, RE-JOIN, etc.) before connecting your Pennsieve account with SODA. If you do not have a Pennsieve account and/or access to the right Pennsieve workspace, follow the instructions available [here](../how-to/how-to-get-a-pennsieve-account).

## Connecting with an API key

SODA does not currently offer a method to connect your Pennsieve account with an ORCiD, therefore you will have to generate an API key on Pennsieve to use to sign in to SODA.
To sign in with a Pennsieve API key, please follow the following steps:

Create an API Key on Pennsieve:

1. Log in to your [Pennsieve account](https://app.pennsieve.io/).
2. Hover over your profile icon in the top right corner and click on it.
3. Find the API Keys section in the sidebar.
4. Select your workspace (e.g., SPARC, RE-JOIN, etc.) from the dropdown menu.
5. Click on the `Create API Key` button.

Once your API key is created, open SODA. To sign in with your API key, follow these steps:

1. Log in to your [Pennsieve account](https://app.pennsieve.io/).
2. In the sidebar click on **Manage Accounts**.
3. Click on the `Connect Your Pennsieve Account` button in the `Account Options` table.
4. Click on the `Connect with API key instead` button in the bottom of the pop-up window.
5. You will be prompted to enter a name for your API key. The name of they API key is not important, but please **make sure it is unique** and has not been used in SODA before.

:::note

- During subsequent uses, SODA will automatically connect to the Pennsieve account you connected with your API key.
- Neither the SODA Team nor anyone else besides you will have access to your API key and secret. The API key and secred will be stored locally on your computer only.

:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
