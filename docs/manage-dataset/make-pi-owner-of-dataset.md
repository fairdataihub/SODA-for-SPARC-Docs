---
sidebar_position: 4
title: Make PI owner of dataset
image: https://docs.sodaforsparc.io/thumbnails/manage-dataset/make-pi-owner-of-dataset.png
---

## Background

There are four permission privileges available for a dataset on Pennsieve: owner, manager, editor, and viewer. Each of them provides different permissions for making changes to a dataset. These permissions are summarized in the table avaialble [here](../manage-dataset/add-edit-permissions).

When you create a dataset, you have `owner` permissions on the dataset. There can only be one `owner` on a Pennsieve dataset. As per SPARC rules, the PI on the SPARC award associated with the dataset must be made `owner` of the dataset. This is because only the `owner` can submit a dataset for publishing and SPARC requires the PI to do so.

## Prerequisite

The PI of your SPARC award must have a Pennsieve account and have access to the SPARC Consortium organization on Pennsieve (see the Prerequisite section [here](../manage-dataset/connect-your-pennsieve-account-with-soda) for details).

## How to

To access this interface click on the `Free Form Mode` side bar option, then click on the `Manage Datasets` tab, and finally click on the `Make PI owner of dataset` card.

1. Select/confirm your Pennsieve account and dataset. If you have not connected your Pennsieve account with SODA yet, [use the instructions available here](./connect-your-pennsieve-account-with-soda).
2. Select your SPARC award PI's name in the drop-down list.
3. Click on `Make PI owner`.

:::note
You will automatically be assigned `manager` permissions to the dataset if you were the owner of the dataset.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
