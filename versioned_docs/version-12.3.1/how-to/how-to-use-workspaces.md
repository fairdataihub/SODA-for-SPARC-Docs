---
sidebar_position: 9
title: How to Use/Switch Workspaces
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Use%2FSwitch%20Workspaces&description=%27How%20to%27%20SPARC%20series
---

## Background

Workspaces are a way to organize datasets and Pennsieve users into groups. A workspace is only accessible through invitation from the workspace Owner or Administrator. Once part of a workspace you can access datasets based on your access rights. Your access rights are determined by your Workspace Role. For more information on Workspace Roles and workpsace management see the official Pennsieve documentation [here](https://docs.pennsieve.io/docs/workspace-management#multiple-workspaces).

## How SODA for SPARC Handles Workspaces

SODA for SPARC will automatically utilize your default workspace after you have connected your account with Pennsieve.
If you have access to only one workspace then that workspace is your default workspace. If you have access to multiple workspaces then in most cases the default workspace is the workspace you last accessed on Pennsieve. Any work you do in SODA for SPARC will be done for a dataset in your default workspace.

## How to switch workspaces within SODA if you sign in with a username/password

1. Navigate to a task or feature that requires authentication. When using End to End Curation, you will have the ability to change workspaces on the 'Pennsieve log in' tab.
2. Look for the pencil icon located next to your current workspace.
3. Click the pencil icon, and a dropdown menu will appear.
4. From the dropdown, choose the workspace you wish to switch to.
5. Finally, click the "Confirm" button to make the switch.

## How to switch workspaces if you sign in with an ORCiD or API Key

1. Close out of SODA if it is currently running.
2. Sign in to your [Pennsieve account](https://app.pennsieve.io/).
3. In the bottom left corner of the Pennsieve interface, hover over your account details, and select 'Switch to Private Workspace.'
4. Choose the workspace you would like to use in SODA when you open it back up.
5. **Important:** Follow the instructions [here](../common-errors/deleting-pennsieve-config-files) to delete your Pennsieve config files.
6. After deleting your Pennsieve config files, open SODA, and it will automatically switch to your new workspace.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
