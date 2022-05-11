---
sidebar_position: 2
title: Create submission.xlsx
image: https://docs.sodaforsparc.io/thumbnails/prepare-metadata/create-submission.png
---

## Background

Under this feature, SODA lets you rapidly prepare the submission metadata file that is mandatory for all SPARC datasets. This feature is designed to avoid commonly found errors when preparing this file. The expected structure of this file, generated automatically by SODA, is explained in our corresponding "[How to](../how-to/how-to-structure-the-submission-metadata-file)" page if you would like to learn about it.

## How to

To access this interface click on the `Free Form Mode` side bar option, then click on the `Prepare Metadata` tab, and finally click on the `Create submission.xlsx` card.

1. You can start by either creating a submission file from scratch with SODA or continue working on an existing submission.xlsx file.
   - If you want to continue working on an existing submission.xlsx file, you will be prompted to either import it from your computer, or specify a Pennsieve dataset where the file is currently located. SODA will load information from such submission file so you can edit them throug the SODA interface.
2. Enter/edit your SPARC award number.

   :::tip
   Click on `Click here to import my SPARC award from Airtable` to connect your Airtable account with SODA and import your SPARC award number automatically. [See instructions here](./connect-your-airtable-account-with-soda.md) for connecting your Airtable account with SODA.
   :::

3. Enter/edit the milestone(s) for this submission. It must be exactly as listed in your SPARC award's Data Deliverables document. See [instructions here](../how-to/how-to-get-your-data-deliverables-document) if you are not familiar with the Data Deliverables document for your SPARC award. Enter `N/A` if this dataset isn't associated with any milestone initially planned in the Data Deliverables document.

   :::tip
   Click on `Click here to import milestones from my Data Deliverables document` to import your Data Deliverable document. SODA will automatically extract milestones and associated information which will be used to help you prepare the submission metadata file. You will have to do this only once and it will be then remembered by SODA during subsequent uses. The information from your Data Deliverables document will be saved locally on your computer so only visible to you.
   :::

4. Enter the completion date associated with this milestone or select one from the dropdown if a Data Deliverable document is imported. Enter `N/A` if this dataset isn't associated with any milestone initially planned in the Data Deliverables document.
5. Review and click on `Generate` to generate your submission file. You have the options to generate and save it on your computer or generate and upload it directly to Pennsieve. If your dataset is not organized yet, you can save this file anywhere on your computer then import it in SODA when prompted in the [Organize dataset](../prepare-dataset/organize-dataset) feature.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Submission/submission.gif?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
