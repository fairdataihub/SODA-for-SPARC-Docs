---
sidebar_position: 4
title: Step 3 - Choose dataset destination
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%203%20-%20Structure%20dataset%20files&description=Prepare%20Dataset&org=fairdataihub
---

import PageFeedback from '@site/src/components/PageFeedback';

Choose the destination where you would like to structure your dataset files. You can choose to upload your dataset to a new Pennsieve dataset or to an existing Pennsieve dataset.

## New Dataset

If you choose to upload to a new Pennsieve dataset, you will be prompted to enter the name of the new dataset. Upon clicking the "Confirm" button, SODA will verify if the dataset name is available.
![](https://github.com/fairdataihub/SODA-for-SPARC/blob/staging/docs/documentation/upload-dataset/upload-dataset-step-3-new.png?raw=true)

## Existing Dataset

If you choose to upload to an existing Pennsieve dataset, SODA will alert you of manifest files not being created and recommend creating manifest files within the "Advanced Features" section.

### Duplicate Files/Folders

When uploading to an existing dataset, SODA will ask how you want to handle duplicate files/folders that may already be on your Pennsieve dataset. You have the options to:

- Skip
- Replace
- Merge (Folders only)

`Skip` will not upload the duplicate files/folders and only import the new unique items.

`Replace` will upload the duplicate files/folders and replace the contents of the duplicate folders. This is useful if you have existing data on Pennsieve that you would like to replace with the new data you are uploading.

`Merge` will upload the duplicate folders and merge the contents of the duplicate folders. This is useful if you have existing data on Pennsieve that you would like to merge with the new data you are uploading.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/staging/docs/documentation/upload-dataset/upload-dataset-step-3-existing.png?raw=true)

<PageFeedback />
