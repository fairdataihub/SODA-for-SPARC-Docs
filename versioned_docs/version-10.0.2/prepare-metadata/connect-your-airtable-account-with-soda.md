---
sidebar_position: 1
title: Connect your Airtable account with SODA
image: https://docs.sodaforsparc.io/thumbnails/prepare-metadata/connect-your-airtable-account-with-soda.png
---

## Background

SODA make use of the [SPARC Airtable sheet](https://airtable.com/tblFGEvUoTbbG6tJy/viwWBpydzfYQsvNFz?blocks=hide) to automatically get award numbers and contributors information such that you don't have to enter them manually in your metadata file. To enable this, you have to connect your Airtable account with SODA. You will only have to do that one time, SODA will then automatically connect to your Airtable account during subsequent uses.

We suggest keeping your group information up to date in the Airtable sheet, especially contributors' names, email, affiliations, and ORCID to help SODA help you!

## Prerequisite

You will need an Airtable account and access to the SPARC Airtable spreadsheet. If you do not have access to the SPARC Airtable spreadsheet, follow the instructions available [here](../how-to/how-to-get-access-to-sparc-airtable).

## How to

1. Login to [Airtable](https://airtable.com/login)
2. Once logged in click on the account icon on the top right to show a dropdown and select Account.
   ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Connect-to-Airtable/airtable-account-chosen.png?raw=true)
3. Within this page generate a new API key or copy your current one (click in the API key box then press Ctrl+c for Windows/Linux or Cmd+c for Mac).
   ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Connect-to-Airtable/api-key-select.png?raw=true)
4. Within the SODA popup paste the API key (using Ctrl+v for Windows/Linux or Cmd+v for Mac)
   ![](https://raw.githubusercontent.com/fairdataihub/SODA-for-SPARC/main/docs/documentation/Prepare-metadata/Connect-to-Airtable/soda-airtable-prompt.PNG)

:::info
You will have to do this only once and the Airtable connection will be then remembered by SODA during subsequent uses. Your Airtable key will be stored locally on your computer and the SODA Team will not have access to it.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
