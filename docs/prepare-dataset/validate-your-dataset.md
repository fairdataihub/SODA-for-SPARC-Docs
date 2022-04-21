---
sidebar_position: 9
title: Validate Your Dataset
image: https://docs.sodaforsparc.io/thumbnails/prepare-dataset/step-7.png
---

## Background

All SPARC datasets must conform to the [SPARC Dataset Structure (SDS) 2.0.0](https://sparc.science/help/3FXikFXC8shPRd8xZqhjVT) in order to be published. To help researchers verify the compliance of their dataset with the SDS 2.0.0, we have integrate in SODA the validator developed by the SPARC Curation Team ([FAIR Data Informatics (FDI) Laboratory at University of California, San Diego](https://www.fdilab.org/)). The simple interface provided in SODA will allow you to verify that the structure, relationships, and metadata contents of your dataset conform to the SDS 2.0.0.

This validation step is should be done after you have organized your dataset (e.g. using the `Organize dataset` feature of SODA) and before you submit it to the Curation team for review (e.g. `Share with Curation Team` feature of SODA).

:::info
At the moment, valid datasets will still receive error messages regarding Pennsieve dataset and organization IDs. These will have the paths: `#/meta/uri_api` and `#/meta/uri_human`. You can safely ignore these messages.

Additionally, the validator checks the dataset's folder structure based off the SDS 1.2.3. This means for the moment, you will have to refer to this [SDS 2.0.0 resource](https://docs.google.com/presentation/d/1YbgoI8hpMLVR5eF6DHciQ4mHlgHTuufD/edit#slide=id.p76) to ensure your dataset has the correct folder structure.
:::

## How to

### Validating dataset stored locally on your computer

1. Navigate to the `Prepare Datasets` section of SODA and click on the `Validate dataset` card
2. Select `I want to validate a local dataset`
3. Enter the location of your target dataset using the `input` field and then click `Confirm`
4. Click `Run dataset validator`
5. (Conditional) If there are validation errors fix them as is appropriate
6. (Conditional) Run the validator to see if other errors were created while fixing your previous errors

### Validating dataset stored on Pennsieve

Coming soon...

## How to Interpet Validation Results

If your dataset conforms to the SDS 2.0.0 you should not see any results. Otherwise it will be important to know how to interpret the validation results.

The validation results will be presented in a table. The left column, `path`, will indicate where the error occurred during validation, and the right column, `message`, will indicate what the error is. In order to understand the results you will need to read the `message`, and take into account the context from which it occurs indicated by the `path`.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-dataset/Specify-files/validation-table.png?raw=true)

## Fixing Validation Errors

To fix dataset validation errors you will need to alter your dataset. This can mean fixing invalid/missing metadata fields, or altering your dataset's directory structure to match the SDS 2.0 guidelines. These fixes can be done manually, by navigating to your dataset location and changing the dataset's structure/metadata file contents, or with SODA.

:::info
The validator only reads your dataset's metadata files (including manifest, dataset description, subjects, samples, readme, changes, submission, performance, and resources) and analyzes the folder structure. The validator does not read the raw/source data in your dataset.
:::

Once you are finished fixing the validation errors presented, run the validator again. If no more errors appear your local dataset is valid.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
