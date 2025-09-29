---
sidebar_position: 1
title: Create Manifest files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Create%20Manifest%20Files&description=Prepare%20Metadata&org=fairdataihub
---

## Background

Manifest files are mandatory for all datasets.

This section will allow you to generate manifest files for your pre-existing datasets stored locally and on Pennsieve.

:::tip
If you do not have pre-existing datasets SODA allows you to create a new dataset and generate manifest files at the same time.  
[Instructions are provided here](../upload-dataset/organize-dataset).
:::

## How to

To access this interface click on the `Advanced Features` button on the bottom of the homepage, then click on the on the `Create manifest.xlsx` card.

1. You can start by either choosing to generate a manifest.xlsx file for a pre-existing dataset stored on your local computer or on Pennsieve.

2. Select where the manifest.xlsx files will be generated.

   - For local datasets user the `Browse here` input to point SODA to your dataset's location.

   - For Pennsieve datasets use the dropdown to select which Pennsieve dataset you would like to create Manifest files for.

3. A tree structure of your dataset will appear to demonstrate the Manifest files that will be generated. You can click `Continue` to move forward.

4. (Optional) After clicking `Continue` you can edit SODA-generated manifest files by clicking on the `manifest.xlsx` file of the high level folder you would like to edit. If you do not wish to do so, simply click `No, generate now` to start generating the manifest files.

   - When editing manifest files you may edit the `Description` or `Additional Metadata` columns in your dataset's manifest files before generating them to the desired destination.
   - When editing manifest files you can also add or remove custom columns using the `Context Menu`. To do this select a column header and then right click on it to activate the `Context Menu`.

   :::info
   If the dataset contains manifest.xlsx files, SODA will load the existing manifest files for your edits. Note that at this moment, only the manifest.xlsx files are supported by SODA (not any other manifest file types).  
   :::

   ![](https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Prepare-metadata/Manifest/manifest-editor-context-menu.png?raw=true)

5. After you finish editing the manifest files at Step 3, click `Generate now`.

:::tip
When you are in the manifest file's editing interface, click on the arrow symbol next to a folder to expand it.  
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
