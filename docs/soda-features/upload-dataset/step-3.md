---
sidebar_position: 4
title: Step 3 - Choose dataset destination
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%203%20-%20Structure%20dataset%20files&description=Prepare%20Dataset&org=fairdataihub
---

Choose the destination where you would like to structure your dataset files. You can choose to upload your dataset to a new Pennsieve dataset or to an existing Pennsieve dataset.

## New Dataset

If you choose to upload to a new Pennsieve dataset, you will be prompted to enter the name of the new dataset. Upon clicking the "Confirm" button, SODA will verify if the dataset name is available.
![](/img/UploadData3.png)

## Editing an Existing Dataset

SODA allows you to edit any existing Pennsieve dataset for which you have edit permissions. The way this works is
that SODA will upload the files you imported into the dataset that is on Pennsieve. SODA will also provide a set
of options for how to handle conflicts.

The first step is to select the `Existing dataset` card. Then, open the dropdown to see all the Pennsieve datasets available to you and click the one you would like to edit. From there, you will need to choose how you want to handle overlapping files and folders when uploading to the existing dataset. Options will include:

Folders

- **Replace**: If folders on Pennsieve have the same path as the ones in your dataset SODA will overwrite them with the ones you imported on step 1.
- **Merge**: Merge the contents of the new folder with the existing one if their paths match. Overlapping files will be handled according to the file options selected below.
- **Skip**: Skip folders that already exist in the dataset.

Files

- **Replace**: Overwrite existing files and folders with the new ones if their paths' match.
- **Skip**: Skip files and folders that already exist in the dataset.

![](/img/merge-existing-UD.png)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
