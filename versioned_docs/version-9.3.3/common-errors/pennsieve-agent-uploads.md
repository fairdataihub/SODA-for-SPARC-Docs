---
sidebar_position: 3
title: Pennsieve agent fails to upload a dataset
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Pennsieve%20agent%20fails%20to%20upload%20a%20dataset&description=Common%20errors%20and%20their%20solutions
---

## Issue Background

SODA uses the Pennsieve Agent to upload datasets to Pennsieve. At the time of writing, the Pennsieve Agent will occasionally fail to upload a dataset that is composed of a very high number of files. It is important to note that datasets that take up a large amount of storage space should have no problem being uploaded; unless said datasets have a very high number of files.

The error will occur in the `Prepare datasets` tab under the `Organize dataset` section or in the `Manage Datasets` tab under the `Upload a Local Dataset` section when trying to upload a dataset, and will look like this:

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Common-errors/pennsieve-agent-error.PNG?raw=true)

## Solution

Upload the dataset folder(s) one at a time or in smaller groups using the 'Upload Local Dataset' feature in SODA. By doing so you can eventually push all of your dataset folders up to Pennsieve. You can then use the Pennsieve File Viewer to organize your dataset if uploading using this strategy forced you to lose the dataset's folder hierarchy.

Here is how to do this in more detail:

1. Navigate to 'Upload a Local Dataset' under the `Manage Datasets` tab.
2. Select the Pennsieve dataset you would like to upload your dataset files and folder to.
3. Browse to the location of your dataset and select an individual data folder to upload.
4. Click `Upload dataset`
5. Repeat until all of your dataset folders are uploaded to Pennsieve.
6. Navigate to [Pennsieve's site](https://app.pennsieve.io)
7. Search for your dataset and select it.
8. In the side bar select `Files`
9. Reorganize your dataset using the File viewer interface.

## Manifest File Generation

If you want to create manifest files but are having trouble with the Pennsieve Agent because of the amount of files within your dataset then there is a workaround using SODA.

1. Navigate to `Generate Manifest Files` under the `Prepare Metadata` tab.
2. Select `Existing Local Dataset`
3. Click `Generate`
4. Navigate to [Pennsieve's site](https://app.pennsieve.io) and select your dataset.
5. In the side bar select `Files`
6. Use Pennsieve's `Add File` feature to upload your manifest files to Pennsieve.
   - It can expedite the process if you navigate to the folder you would like to place the Manifest into before uploading. This is because uploading manifest files to the root of the dataset directory will add a suffix indicating file name duplication. These will have to be renamed once moved to their correct directory.
