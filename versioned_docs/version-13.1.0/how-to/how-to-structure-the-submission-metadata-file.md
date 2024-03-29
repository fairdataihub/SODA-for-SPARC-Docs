---
sidebar_position: 1
title: How to structure the submission metadata file
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Structure%20the%20submission%20metadata%20file&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

SODA helps you prepare the [submission metadata file](../Freeform%20Mode/prepare-metadata/create-submission.md) conveniently. We explain here how it must be structured according to the SPARC rules in order to provide some insight about the structure of the file generated by SODA.

## How to

- Format: the submission file is accepted in either xlsx, csv, or json format. SODA generates it in the xlsx format based on the template provided by the Curation Team. A screenshot is provided below:
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/How%20to/submission/submission-template.PNG?raw=true)
- Location in the dataset: The submission file must be included in the high-level dataset folder.
- Content: The **Submission Item** and **Value** columns are mandatory (the **Definition** column could be kept or removed). Each of the three **Submission Item** element must be provided a **Value**.
  - SPARC Award number: The number of your SPARC award.
  - Milestone achieved: This milestone must match exactly with one of the milestones agreed with the NIH in the Dataset Deliverables document. A screenshot of a sample Dataset Deliverables document is provided below. In case the dataset isn't related to a pre-agreed dataset, it should be explicitly mentioned (e.g., `Not included in the Dataset Deliverables document`).
  - Milestone completion date: This date must match exactly with the completion date agreed with the NIH in the Dataset Deliverables document for the above mentioned **Milestone achieved**. In the case the dataset isn't related to a pre-agreed milestone, it should be explicitly mentioned (e.g., `Not included in the Dataset Deliverables document`).
    ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/How%20to/submission/data-deliverables-doc-example.PNG?raw=true0)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
