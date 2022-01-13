---
sidebar_position: 5
---

# Add edit permissions

## Background

There are four roles available for a dataset: owner, manager, editor, and viewer. Each of them provides different permissions for making changes to a dataset. These permissions are summarized in the table below. You can find out more about permissions on the associated [Pennsieve help page](https://docs.pennsieve.io/docs/dataset-permissions).

When you create a dataset, it is private and accessible only to you (you have `owner` permissions on the dataset). You can change who can access and modify your dataset by giving permissions to members or entire teams.

|                                   Permissions |       Owner        | Manager | Editor | Viewer |
| --------------------------------------------: | :----------------: | :-----: | :----: | :----: |
|                           View/download files |         ✅         |   ✅    |   ✅   |   ✅   |
|                        Edit name of a dataset |         ✅         |   ✅    |   ✅   |   ❌   |
|                           Upload/delete files |         ✅         |   ✅    |   ✅   |   ❌   |
|                                  Add metadata |         ✅         |   ✅    |   ❌   |   ❌   |
|                            Manage permissions |         ✅         |   ✅    |   ❌   |   ❌   |
|                         Change dataset status |         ✅         |   ✅    |   ❌   |   ❌   |
| Share dataset with SPARC consortium (embargo) |         ✅         |   ✅    |   ❌   |   ❌   |
|                                   Reserve DOI |         ✅         |   ✅    |   ❌   |   ❌   |
|              Submit for pre-publishing review | ✅ (+ORCID linked) |   ❌    |   ❌   |   ❌   |
|                                Delete dataset |         ✅         |   ❌    |   ❌   |   ❌   |
|                                  Change owner |         ✅         |   ❌    |   ❌   |   ❌   |

## How to

Start by selecting/confirming your Pennsieve account and dataset. If you have not connected your Pennsieve account with SODA yet, [use the instructions available here](./connect-your-pennsieve-account-with-soda). The current permissions on the selected dataset will be displayed.

## Add/edit permissions for team members

1. Click on `Add/edit user permissions`.
2. Select the **user** from the dropdown list.
3. Select a **role** from the dropdown list.
4. Click on `Add permission for user`.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Manage-permissions/add-permissions.gif?raw=true)

## Add/edit permissions for teams

1. Click on `Add/edit team permissions`.
2. Select the **team** from the dropdown list.
3. Select a **role** from the dropdown list.
4. Click on `Add permission for team`.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />