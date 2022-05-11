---
sidebar_position: 3
title: Step-by-step guide to organize and submit SPARC datasets with SODA for SPARC
image: https://docs.sodaforsparc.io/thumbnails/getting-started/organize-and-submit-a-new-sparc-dataset-with-soda.png
---

## Prepare and submit SPARC datasets with SODA

The typical process for submitting your SPARC dataset consists of organizing your data according to the SPARC Data Structure (SDS), adding metadata files, uploading everything on the [Pennsieve data platform](https://app.pennsieve.io/) where more metadata needs to be added, and finally sharing the dataset with the SPARC Curation Team who will review it for compliance. Once approved by the Curation Team, you will have to share your dataset as embargoed dataset and it will become accessible to all members of the SPARC Consortium through Pennsieve. Once the embargo period is over (one year after initial upload or after publication of related manuscript(s), wichever comes first), you will have to publish your dataset and it will then become accessible publicly through the [SPARC Data Portal](https://sparc.science/).

We describe below the suggested workflow for preparing and submitting your SPARC datasets with SODA. All these steps are mandatory (unless marked otherwise) if you wish to satisfy the SPARC requirements.

### A. Preliminary Steps

These steps only need to be completed once.

- <a href="../getting-started/download-soda" target="\_blank"> Dowload and install SODA </a>
- All SPARC datasets must be uploaded on the Pennsieve data platform. Get access to Pennsieve as well as the SPARC Consortium organization on Pennsieve by filling out [this form](https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjMyMDM1ODgsInRhc2tGb3JtSWQiOjUwMzQzN30JNDgwNTg4NjU3MjA3Nwk0MTg5ZTY0ODEyZGYxNTU1ZDJkYmU5MzIxNWZiNTQyZWUwZTMzY2U4NDQ5ODI0ZWI0YzZiMWZhNjVhYzgyOTRm). We also suggest to request access to the SPARC Airtable sheet through the same form as it will come in handy when your prepare your SPARC metadata files.
- Download and install the [Pennsieve agent](https://docs.pennsieve.io/docs/the-pennsieve-agent) required to upload files through SODA
- Watch our [quick video](../getting-started/user-interface) to familiarize yourself with the user interface of SODA (note: optional but recommended)
- Read about the [SPARC requirements for organizing and sharing datasets](https://sparc.science/help/7k8nEPuw3FjOq2HuS8OVsd) to familiarize yourself with the process (note: optional but recommended)

### B. Prepare Dataset on Pennsieve

The SPARC guidelines require each dataset to have specific metadata on Pennsieve. We recommend starting with this such that everything is set on Pennsieve when you are ready to upload your data and metadata files (Step D). This metadata can be easily added to Pennsieve through SODA.

- [Connect your Pennsieve account with SODA](../manage-dataset/connect-your-pennsieve-account-with-soda). This is only required the first time you use SODA
- [Create a new Pennsieve dataset](../manage-dataset/create-a-new-dataset)
- [Make PI of the SPARC award the owner of the dataset](../manage-dataset/make-pi-owner-of-dataset).
- If others need to contribute to your dataset, [give access to your dataset to other members/teams](../manage-dataset/add-edit-permissions)
- [Add a subtitle](../manage-dataset/add-edit-subtitle)
- [Add a description](../manage-dataset/add-edit-description)
- [Upload a banner image](../manage-dataset/upload-a-banner-image)
- [Assign a license](../manage-dataset/assign-a-license)
- [Add/edits tags](../manage-dataset/add-edit-tags)

### C. Prepare SPARC Metadata Files

The SPARC guidelines require each dataset to have specific metadata files, as described by the SPARC Data Standards (SDS). These metadata files can be conveniently prepared through SODA.

- Prepare protocol on protocols.io following the [instructions provided here](https://sparc.science/help/1slXZSS2XtTYQsdY6mEJi5). This is not supported through SODA since protocols.io already provides an intuitive interface for preparing the protocol.
- [Prepare the submission file](../prepare-metadata/create-submission)
- [Prepare the dataset description file](../prepare-metadata/create-dataset-description)
- If your study includes subjects, [prepare the subjects file](../prepare-metadata/create-subjects)
- If your study includes samples, [prepare the samples file](../prepare-metadata/create-samples)
- If your study includes a computational model, prepare the code metadata files with help from the [O2S2PARC](https://osparc.io/) team (support@osparc.io)
- [Prepare the README file](../prepare-metadata/create-readme)
- If you are publishing a new version of a dataset, [prepare the CHANGES file](../prepare-metadata/create-changes-txt)

### D. Organize Dataset According to the SPARC Data Structure

All SPARC datasets must be organized according to the structure described by the SPARC Data Standards (SDS). Briefly, all data must be organized into one of the following six high-level folders: `primary`, `source`, `derivative`, `code`, `protocol`, and `docs`. Each of these folders must have have a manifest metadata file that summarizes the content of the folder. Additionally, all the metadata files created during Step C must be located at the highest-level of the dataset, alongside the high-level folders. SODA provides a intuitive interface for organizing your dataset according to the SDS and upload it on Pennsieve with automatically generated manifest files.

- [Specify files and metadata files to be included in your dataset and generate dataset directly on Pennsieve](../prepare-dataset/organize-dataset)

### E. Submit Dataset to the Curation Team for Review

Once all the previous steps have been completed, it is time to share your dataset with the SPARC Data Curation Team for review.

- [Share with the Curation Team](../disseminate-dataset/share-with-curation-team)

### F. Post-curation steps

These steps must be completed ONLY after your dataset is approved by the Curation Team

- [Share dataset with the SPARC Consortium as Embargoed dataset](../disseminate-dataset/share-with-sparc-consortium)
- [Send dataset for pre-publishing review](../disseminate-dataset/submit-for-pre-publishing-review)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
