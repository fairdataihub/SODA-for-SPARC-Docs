---
sidebar_position: 8
title: Create Manifest files
---

## Background

Manifest files are mandatory for all datasets. To learn more about this metadata file please refer to our corresponding "[How to](../how-to/how-to-structure-the-manifest-metadata-file.md)" page.

This section will allow you to generate manifest files for your pre-existing datasets stored locally and on Pennsieve.

:::tip
If you do not have pre-existing datasets SODA allows you to create a new dataset and generate manifest files at the same time. [Instructions are provided here](../prepare-dataset/organize-dataset.md).
:::

## How to

1. You can start by either choosing to generate a manifest file for a pre-existing dataset stored on your local computer or on Pennsieve.
2. Select where the manifest files will be generated.
   - For local datasets user the `Browse here` input to point SODA to your dataset's location.
     ![](https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Prepare-metadata/Manifest/manifest-local-dataset.PNG?raw=true)
   - For Pennsieve datasets use the dropdown to select which Pennsieve dataset you would like to create Manifest files for.
     ![](https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Prepare-metadata/Manifest/manifest-pennsieve.PNG?raw=true)
3. (Optional) You can edit SODA-generated manifest files by clicking on `Yes, let's edit the manifest files`. If you do not wish to do so, simply click `No, generate now` to start generating the manifest files.
    - When editing manifest files you may edit the `Description` or `Additional Metadata` columns in your dataset's manifest files before generating them to the desired destination.
    - When editing manifest files you can also add or remove custom columns using the `Context Menu`. To do this select a column header and then right click on it to activate the `Context Menu`.
      ![](https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Prepare-metadata/Manifest/insert-columns.png?raw=true)

4. After you finish editing the manifest files at Step 3, click `Generate now`.

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/manifest.mp4"
/>

:::tip
When you are in the manifest file's editing interface, click on the arrow symbol next to a folder to expand it.  
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
