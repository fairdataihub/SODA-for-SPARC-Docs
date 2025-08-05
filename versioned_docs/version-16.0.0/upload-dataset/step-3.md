---
sidebar_position: 4
title: Step 3 - Choose dataset destination
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%203%20-%20Structure%20dataset%20files&description=Prepare%20Dataset&org=fairdataihub
---

Choose the destination where you would like to structure your dataset files. You can choose to upload your dataset to a new Pennsieve dataset or to an existing Pennsieve dataset.

## New Dataset

If you choose to upload to a new Pennsieve dataset, you will be prompted to enter the name of the new dataset. Upon clicking the "Confirm" button, SODA will verify if the dataset name is available.
![](/img/UploadData3.png)

## Coming Soon: Existing Dataset

SODA will allow you to select an existing Pennsieve dataset to upload your files to. This feature is currently under development and will be available in a future release.

You will be able to select how you wish to handle overlapping files and folders when uploading to an existing dataset. Options will include:

Files

- **Skip**: Skip files and folders that already exist in the dataset.
- **Replace**: Overwrite existing files and folders with the new ones.

Folders

- **Skip**: Skip folders that already exist in the dataset.
- **Merge**: Merge the contents of the new folder with the existing one. Overlapping files will be handled according to the file options selected above.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
