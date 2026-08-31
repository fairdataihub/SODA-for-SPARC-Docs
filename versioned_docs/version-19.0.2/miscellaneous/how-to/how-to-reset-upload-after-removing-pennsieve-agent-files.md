---
sidebar_position: 16
title: How to restart an upload after removing Pennsieve Agent database files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Restart%20An%20Upload%20After%20Removing%20Pennsieve%20Agent%20Database%20Files&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

Some users encounter an issue running the Pennsieve Agent that can only be resolved by removing the Pennsieve Agent database files. If the user has uploaded files to Pennsieve successfully before the database files were deleted, and wants to continue their upload, it is necessary to reset the SODA upload process first. This page gives instructions on how to do this.

## How to reset upload if you deleted the Pennsieve Agent database files

# Prepare Dataset Step-by-Step

1. Navigate the the SODA folder on your computer located in your home directory on Mac and Linux or user directory for Windows.
2. Click the Progress Files folder
3. Open your progress file in a text editor of your choice.
4. Text search for "upload-progress" and remove this from the file as well as its children (see highlighted text in image below for reference)
   ![](/img/upload-progress.png)
5. Save the file before closing it.
6. Open SODA
7. From the SODA home page, click the `Prepare Dataset Step-by-Step` button.
8. Click the `Resume Curation` button for your progress file.
9. Click the `Generate dataset on Pennsieve` button again and the upload will restart and upload all files that have not already been uploaded to Pennsieve.

# Uplad SDS Compliant Dataset

1. Start a new progress file
2. Fill out the Pennsieve Log In page and click `Save and continue`
3. Click the `Add data to an existing dataset on Pennsieve` button
4. Click the `Select a dataset` button and select the dataset you want to finish uploading to then click Continue.
5. Import your entier dataset and then click `Save and Continue`
6. Click the `Skip existing files` option for files then click `Save and Continue`
7. Continue to the upload page and click `Generate`
