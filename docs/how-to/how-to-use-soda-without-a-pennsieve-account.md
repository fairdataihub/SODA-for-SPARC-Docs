---
sidebar_position: 10
title: How to use SODA without a Pennsieve account
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Use%2FSwitch%20Workspaces&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

SODA provides a limited set of features available for users that do not have a Pennsieve account / access to the Pennsieve platform.
The services that SODA provides without having access to the Pennsieve platform generally revolve around creating metadata
files required by the SPARC dataset structure locally. Some examples for generating metadata files can be found below.

[Download My Document](../../static/test-dataset.zip)

## Example 1: Generating manifest files locally

The SPARC dataset structure requires manifest files to be placed in each high level folder of a dataset. SODA provides a feature that generates manifest files for a dataset
with the minimum required metadata by the SPARC dataset structure.

### Testing this feature

1. [Download a sample dataset to test the manifest file generation ](../../static/test-dataset.zip)

## Generate manifest files locally

1. Navigate to a task or feature that requires authentication. When using End to End Curation, you will have the ability to change workspaces on the 'Pennsieve log in' tab.
2. Look for the pencil icon located next to your current workspace.
3. Click the pencil icon, and a dropdown menu will appear.
4. From the dropdown, choose the workspace you wish to switch to.
5. Finally, click the "Confirm" button to make the switch.

## Download SPARC metadata templates

1. Close out of SODA if it is currently running.
2. Sign in to your [Pennsieve account](https://app.pennsieve.io/).
3. In the bottom left corner of the Pennsieve interface, hover over your account details, and select 'Switch to Private Workspace.'
4. Choose the workspace you would like to use in SODA when you open it back up.
5. **Important:** Follow the instructions [here](../common-errors/deleting-pennsieve-config-files) to delete your Pennsieve config files.
6. After deleting your Pennsieve config files, open SODA, and it will automatically switch to your new workspace.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
