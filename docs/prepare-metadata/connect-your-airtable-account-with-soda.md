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

:::tip
Checkout the [Airtable Help page](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key) to learn how to obtain or re-generate your API key.
:::

:::info
You will have to do this only once and the Airtable connection will be then remembered by SODA during subsequent uses. Your Airtable key will be stored locally on your computer and the SODA Team will not have access to it.
:::

## How to

### Guided Mode

1. During the Getting Started or SPARC Award number page you will need to gather your Airtable API to connect your account to SODA.
2. In the Getting Started Page, click on `Connect Airtable Account` to be ask about your API key. For the SPARC Award number page you will select between entering
   your SPARC award manually or importing directly from Airtable. If your option is `Yes, import account from Airtable` then you will be asked for your Airtable API key.

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/airTable-guided.mp4"
/>

### Freeform Mode

1. Under the `Create submission.xlsx` feature from the `Prepare Metadata` section, start by either Creating a submission file from scratch with SODA or Continue working on an existing submission.xlsx file. Click on `Click here to import my SPARC award from Airtable` to connect SODA with your Airtable account.
2. Enter your Airtable API key in the dedicated SODA interface.
3. Click on `Add account`.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Connect-to-Airtable/connect-to-airtable-new.gif?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
