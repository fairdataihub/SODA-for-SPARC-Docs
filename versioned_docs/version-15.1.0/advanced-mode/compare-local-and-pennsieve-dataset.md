---
sidebar_position: 4
title: Compare Local and Pennsieve Dataset
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%207%20-%20Preview%20dataset&description=Prepare%20Dataset&org=fairdataihub
---

import PageFeedback from '@site/src/components/PageFeedback';

This feature allows you to compare a dataset stored on Pennsieve with a dataset stored locally.

## Background

After uploading a dataset some users want to look at the individual files and folders on their local dataset to make sure each one is on Pennsieve. This feature allows you to
automatically compare the files and folders in your local dataset with the files in your Pennsieve dataset.

## How to

To access this interface click on the `Advanced Features` at the bottom of the homepage, then click on the `Compare Local and Remote Dataset` card. Once accessed follow the onscreen
instructions to compare the datasets. After comparing the datasets you will be presented with results.

## Understanding the results

Results will be displayed in tables. If the datasets are the same there will be no results and a message will be displayed saying the datasets are the same. If the datasets are different you will
be presented with up to two tables. The first table is called `Files that are on Pennsieve and not in your local dataset` and contains a list of files and folders that are on Pennsieve but not in your local dataset.
The second table is called `Files that are local and not in your Pennsieve dataset` and contains a list of files and folders that are in your local dataset but not on Pennsieve.

## What can you do with your results?

For results in the `Files that are on Pennsieve and not in your local dataset` table you can do the following:

- Download the files in CSV format with the `Get File List in CSV` button so that you may manually decide what to do with these files.
- Delete the files from Pennsieve with the `Delete Files from Pennsieve` button.

For results in the `Files that are local and not in your Pennsieve dataset` you can do the following:

- Download the files in CSV format with the `Get File List in CSV` button so that you may manually decide what to do with these files.
- Upload the local files to Pennsieve with the `Upload Upload Selected Files from Pennsieve` button.

:::note
You can only upload SDS compliant files and folders using SODA. If you want to upload non-SDS compliant files and folders you will need to do so manually.
:::

<PageFeedback />
