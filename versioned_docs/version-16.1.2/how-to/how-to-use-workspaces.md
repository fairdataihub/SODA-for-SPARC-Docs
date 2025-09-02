---
sidebar_position: 9
title: How to Use/Switch Workspaces
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Use%2FSwitch%20Workspaces&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

Workspaces are a concept used in the Pennsieve platform as a way way to organize datasets and users into groups. A workspace is only accessible through invitation from the workspace Owner or Administrator. Once part of a workspace you can access datasets based on your access rights. Your access rights are determined by your Workspace Role. For more information on Workspace Roles and workpsace management see the official Pennsieve documentation [here](https://docs.pennsieve.io/docs/workspace-management#multiple-workspaces).

## How SODA Handles Workspaces

SODA will automatically utilize your default workspace after you have connected your account with Pennsieve.
If you have access to only one workspace then that workspace is your default workspace. If you have access to multiple workspaces then in most cases the default workspace is the workspace you last accessed on Pennsieve. Any work you do in SODA will be done for a dataset in your default (the workspace last accessed on Pennsieve) workspace unless you manually switch to a different workspace within SODA.

:::info
You can easily see which workspace you are currently using in SODA by navigating to the **Manage Accounts** tab in the left sidebar. The workspace you are currently using will be displayed in your
account details section.
:::

## How to switch workspaces within SODA if you sign in with a username/password

1. Navigate to the **Manage Accounts** tab in the left sidebar of SODA.
2. Look for the `Account Options` table and click the `Change Workspace` option.
3. Select the workspace you would like to use in SODA from the dropdown menu.
4. Enter your email and password so SODA can authenticate you with Pennsieve.
5. Click the `Switch Organization` button.

## How to switch workspaces if you sign in with an ORCiD or API Key

1. Close out of SODA if it is currently running.
2. Sign in to your [Pennsieve account](https://app.pennsieve.io/).
3. In the bottom left corner of the Pennsieve interface, hover over your account details, and select 'Switch to Private Workspace.'
4. Choose the workspace you would like to use in SODA when you open it back up.
5. **Important:** Follow the instructions [here](../common-errors/deleting-pennsieve-config-files) to delete your Pennsieve config files.
6. After deleting your Pennsieve config files, open SODA and sign in again with your ORCiD or API Key using instructions [here](../connecting-to-pennsieve/connecting-with-api-key.md). SODA will now use the workspace you selected in Pennsieve.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
