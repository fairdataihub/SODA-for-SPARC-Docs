---
sidebar_position: 1
title: Connecting with a username/password
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Connecting%20with%20a%20username%2Fpassword&description=How%20to%20connect%20Pennsieve%20to%20SODA%20with%20Pennsieve%20credentials&org=fairdataihub
---

## Background

SPARC uses the [Pennsieve](https://app.pennsieve.net/) platform to store data and metadata files as well as append additional metadata. All SPARC researchers must thus share their data on Pennsieve. The Pennsieve Agent is a tool developed by the Pennsieve team to help researchers programmatically upload their datasets to the platform. However, some researchers find this tool intimidating. SODA helps by
hiding the Pennsieve Agent's complexities behind a user-friendly interface that allows researchers to upload their datasets with ease.

:::info
If you are not a SPARC or RE-JOIN funded researcher and want to upload your dataset to a generalist repository (e.g., Zenodo) instead of Pennsieve you can disregard this page and skip to the instructions for
generating a SPARC Data Structure (SDS) compliant dataset on your computer [here](../guided).
:::

## Prerequisite

You will need a Pennsieve account with access to the Pennsieve workspace where you need to upload your data (e.g., SPARC, RE-JOIN, etc.) before connecting your Pennsieve account with SODA. If you do not have a Pennsieve account and/or access to the right Pennsieve workspace, follow the instructions available [here](../how-to/how-to-get-a-pennsieve-account).

## Connecting with an username/password

To connect your Pennsieve account using a username and password, follow these steps:

1. Open SODA.
2. If SODA is not connected to Pennsieve, you will be prompted to provide your Pennsieve **Email Address** and **Password** when the application opens. Enter your credentials and then click `Connect to Pennsieve`.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-PS-SODA.png?raw=true)

:::note

- During subsequent uses, SODA will automatically connect to the Pennsieve account you were connected to the last time.
- Neither the SODA Team nor anyone else besides you will have access to your Pennsieve account. The generated login information required for future sessions on your Pennsieve account will be stored locally on your computer only.

:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
