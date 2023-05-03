---
sidebar_position: 6
title: Add edit permissions
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Add%2Fedit%20permissions&description=Manage%20Dataset
---

## Background

There are four roles available for a dataset: owner, manager, editor, and viewer. Each of them provides different permissions for making changes to a dataset. These permissions are summarized in the table below. You can find out more about permissions on the associated [Pennsieve help page](https://docs.pennsieve.io/docs/dataset-permissions).

When you create a dataset, it is private and accessible only to you (you have `owner` permissions on the dataset). You can change who can access and modify your dataset by giving permissions to members or entire teams.

|                     Permissions |       Owner        | Manager | Editor | Viewer |
| ------------------------------: | :----------------: | :-----: | :----: | :----: |
|             View/download files |         ✅         |   ✅    |   ✅   |   ✅   |
|          Edit name of a dataset |         ✅         |   ✅    |   ✅   |   ❌   |
|             Upload/delete files |         ✅         |   ✅    |   ✅   |   ❌   |
|                    Add metadata |         ✅         |   ✅    |   ❌   |   ❌   |
|              Manage permissions |         ✅         |   ✅    |   ❌   |   ❌   |
|           Change dataset status |         ✅         |   ✅    |   ❌   |   ❌   |
|                     Reserve DOI |         ✅         |   ✅    |   ❌   |   ❌   |
| Submit dataset to Curation Team | ✅ (+ORCID linked) |   ❌    |   ❌   |   ❌   |
|                  Delete dataset |         ✅         |   ❌    |   ❌   |   ❌   |
|                    Change owner |         ✅         |   ❌    |   ❌   |   ❌   |

## Prerequisite

Team members who need to contribute to your dataset must have a Pennsieve account and have access to the SPARC Consortium organization on Pennsieve (see the Prerequisite section [here](../manage-dataset/connect-your-pennsieve-account-with-soda) for details).

## How to

To access this interface click on the `Curate and Share` side bar option, then click on the `Free Form Mode Curation` button and within the `Manage Datasets` tab, click on the `Add/edit permissions` card.

Start by selecting/confirming your Pennsieve account and dataset. If you have not connected your Pennsieve account with SODA yet, [use the instructions available here](./connect-your-pennsieve-account-with-soda). The current permissions on the selected dataset will be displayed.

### Add/edit permissions for team members

Follow these steps to give permissions to a team member:

1. Click on `Add/edit user permissions`.
2. Select the **user** from the dropdown list.
3. Select a **role** from the dropdown list.
4. Click on `Add permission for user`.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Manage-permissions/add-permissions.gif?raw=true)

### Add/edit permissions for teams

Follow these steps to give permissions to an entire Pennsieve team:

1. Click on `Add/edit team permissions`.
2. Select the **team** from the dropdown list.
3. Select a **role** from the dropdown list.
4. Click on `Add permission for team`.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
