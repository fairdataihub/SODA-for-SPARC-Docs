---
sidebar_position: 10
title: How to test SODA without a Pennsieve account
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20test%20SODA%20without%20a%20Pennsieve%20account&org=fairdataihub&description=
---

import PageFeedback from '@site/src/components/PageFeedback';

## Background

Here are some examples of features of SODA that can be tested without access to the Pennsieve platform.

## Example 1: Generating manifest files locally

The SPARC dataset structure requires manifest files to be placed in each high level folder of a dataset. SODA provides a feature that automatically generates manifest files for a dataset with the minimum required metadata by the SPARC dataset structure (SDS).

### Testing local manifest generation

1. [Download a sample dataset to test the manifest file generation with](https://raw.githubusercontent.com/fairdataihub/SODA-for-SPARC/staging/docs/test-dataset.zip)
2. Navigate to the Manifest file generation feature of SODA. To get there from the home page of SODA, click the "Free Form Curation" button, select the Prepare Metadata tab at the top of the page, and then
   click the "Create manifest.xlsx" button.
3. Generate manifest files for the test dataset downloaded in step 1. For assistance with manifest file creation, [View the docs for generating manifest files](../advanced-mode/create-manifest-files.md)

### Testing submission metadata generation

The submission metadata file is an excel file required in the SDS that contains information about the dataset you are submitting and the milestones related to the submission.

### Testing this feature

1. Navigate to the submission metadata file generation feature of SODA. To get there from the home page of SODA, click the "Free Form Curation" button, select the Prepare Metadata tab at the top of the page, and then
   click the "Create submission.xlsx" button.
2. Indicate that you would like to start a new submission.xlsx file.
3. Select any Funding Consortium from the dropdown.
4. Enter an Award number, for example, A123456.
5. Enter milestone(s), for example "milestone1" and "milestone2".
6. Choose a completion date (any date is OK).
7. Click the Generate button to generate the metadata file locally to your computer.

## Example 3: Download SPARC metadata templates

SODA provides a feature that allows users to download the latest version of the metadata files required in the SDS so they can be reviewed and filled out manually outside of SODA if desired.

### Testing SPARC metadata template downloads

1. Navigate to the Download Templates feature of SODA. To get there from the home page of SODA, click the "Free Form Curation" button, select the Prepare Metadata tab at the top of the page, and then
   click the "Download templates" button.
2. Select the metadata file that you would like to download to your computer, and then select the location to save it to.

<PageFeedback />
