---
sidebar_position: 10
title: Standalone Validator
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%207%20-%20Preview%20dataset&description=Prepare%20Dataset
---

This Free Form Mode feature allows you to validate one of your organized datasets stored locally or on Pennsieve. This can save you time by allowing you to avoid stepping
through `Organize dataset` in `Free Form Mode Curation` or `End to End Curation Mode` UIs when validating your dataset is your only goal.

## Background

All SPARC datasets must conform to the SPARC Dataset Structure format described [here](https://docs.sparc.science/docs/overview-of-sparc-dataset-format).
It is recommended that, when possible, you resolve any validation errors before submitting your dataset to the SPARC Curation Team for review.

## How to

- First choose which validation workflow you will perform:
  - Pennsieve validation: For validating a dataset stored on Pennsieve.
  - Local validation: For validating a dataset stored on your computer or a local drive.
- Pennsieve validation workflow:
  - Select which dataset you would like to validate from the dropdown menu.
  - Click `Confirm` to import the dataset.
  - Once imported, click the `Validate Dataset` button to begin the validation process.
  - Once validation is complete you will be presented with a table of results with two columns.
    - Path: The `Path` column will contain the path to the file, folder, or field that was validated.
    - Message: The `Message` column will contain the message informing you what was determined to be invalid about the file, folder, or field specified in the `Path` column.
  - To fix your errors, simply alter your dataset to correct the given error messages then re-run validation for confirmation.
- Local validation workflow:
  - Select the location of the local dataset you would like to validate.
  - Click `Confirm` to finalize your selection.
  - Click `Validate Dataset` to begin the validation process.
  - Once validation is complete you will be presented with a table of results with two columns.
    - Path: The `Path` column will contain the path to the file, folder, or field that was validated.
    - Message: The `Message` column will contain the message informing you what was determined to be invalid about the file, folder, or field specified in the `Path` column.
  - To fix your errors, simply alter your dataset to correct the given error messages then re-run validation for confirmation.

## Next Steps

Now that your dataset is validated you can submit it to the SPARC Curation Team for review. To do so, follow the instructions [here](../disseminate-dataset/submit-for-pre-publishing-review.md).

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
