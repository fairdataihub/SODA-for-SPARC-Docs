---
sidebar_position: 10
title: How to use SODA without a Pennsieve account
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Use%2FSwitch%20Workspaces&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

SODA provides a limited set of features available for users that do not have a access to the Pennsieve platform (a cloud-based scientific data management platform).
The services that SODA provides without having access to the Pennsieve platform generally revolve around creating metadata files required by the SPARC dataset structure locally.
Some examples of SODA's capabilities that do not require a Pennsieve account can be found below.

## Example 1: Generating manifest files locally

The SPARC dataset structure requires manifest files to be placed in each high level folder of a dataset. SODA provides a feature that automatically generates manifest files for a dataset
with the minimum required metadata by the SPARC dataset structure.

### Testing this feature

1. [Download a sample dataset to test the manifest file generation with](../../static/test-dataset.zip)
2. Navigate to the manifest file generation feature of SODA. To get there from the home page of SODA, click the "Free Form Curation" button, select the Prepare Metadata tab at the top of the page, and then
   click the "Create manifest.xlsx" button.
3. Generate manifest files for the test dataset downloaded in step 1. For assistance in manifest file creation, [View the docs for generating manifest files](../Freeform%20Mode/prepare-metadata/create-manifest-files.md)

## Example 2: fGenerating submission metadata

The submission metadata file is an excel file that contains information about the dataset you are submitting and the milestones related to the submission.

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

SODA provides a feature that allows the latest version of the metadata files required by the SPARC dataset structure to be downloaded individually onto your machine to be filled out manually.

### Testing this feature

1. Navigate to the Download Templates feature of SODA. To get there from the home page of SODA, click the "Free Form Curation" button, select the Prepare Metadata tab at the top of the page, and then
   click the "Download templates" button.
2. Select the metadata file that you would like to download to your computer, and then select the location to save it to.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
