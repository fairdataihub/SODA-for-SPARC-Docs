---
sidebar_position: 7
title: Step 6 - Generate dataset
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Step%206%20-%20Generate%20dataset&description=Prepare%20Dataset
---

The dataset will be generated based on the information provided during the previous steps. It could be generated **locally on your computer** or **directly on Pennsieve**.

### Generate your dataset locally

If you select to generate your dataset locally, it will be generated at the desired location on your computer. No modifications will be made to the original local files/folders specified during the previous steps. Follow the steps below to generate the dataset locally:

1. Specify the desired destination on your computer where SODA should generate the dataset at.
2. Enter the name of the new dataset (a folder with this name will be created at the selected destination).
3. Click `Generate` to create your dataset.

<!-- ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-1.gif?raw=true) -->

### Generate your dataset directly on Pennsieve

If you select to generate your dataset directly on Pennsieve, it will be generated on the Pennsieve dataset with the specified structure. No modifications will be made to the original local files/folders specified during the previous step. Follow the steps below to generate the dataset onto Pennsieve:

1. Select your Pennsieve account from the drop-down list.
2. Select/confirm your Workspace. Learn more about workspaces [here](../../how-to/how-to-use-workspaces.md).
3. Select the option to generate on a new Pennsieve dataset or to use an existing one.
   - If you select to generate on a new Pennsieve dataset, specify a name for it.
     <!-- ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-21.gif?raw=true) -->
   - If you select to generate on an existing Pennsieve dataset, select one from the drop-down list, and tell SODA how to handle any existing files/folders specified in your dataset that may already exist on the selected Pennsieve dataset.
     <!-- ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-3.gif?raw=true) -->
4. Click `Generate` to create your dataset.

:::note
When uploading datasets with large amounts of files, a dataset upload may take longer than expected. This is regardless of the total storage size of your dataset. In the event of an unsuccessful dataset upload you will receive an error notification. You can trust that as long as there is no error notification SODA is uploading your dataset.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
