---
sidebar_position: 3
title: Create dataset_description.xlsx
image: https://docs.sodaforsparc.io/thumbnails/prepare-metadata/create-dataset-description.png
---

## Background

Under this feature, SODA lets you quickly and accurately prepare the dataset_description metadata file which is mandatory for all SPARC datasets. SODA provides a convenient
interface, which is more intuitive than working with the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve and the SPARC Airtable sheet
to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding
"[How to](../../how-to/how-to-structure-the-dataset-description-metadata-file.md)" page if you would like to learn about it.

## How to

To access this interface click on the `Curate and Share` side bar option, then click on the `Free Form Mode Curation` button and within the `Prepare Metadata` tab, click on
the `Create dataset_description.xlsx` card.

You can start by either creating a dataset_description.xlsx file from scratch with SODA or continue working on an existing dataset_description.xlsx file.

- If you want to continue working on an existing dataset_description.xlsx file, you will be prompted to either import it from your computer, or specify a Pennsieve dataset where the file is currently located. SODA will load information from the specified dataset_description file so you can edit them through the SODA interface.

The interface below divides inputs required for preparing the dataset_description file into six convenient sections to facilitate your task.

### Dataset Info (high-level information about your dataset)

1. Dataset title: Enter a descriptive title for the dataset. This field should exactly match your dataset title on Pennsieve.

   :::tip
   Click on `Click here to select my dataset from Pennsieve` to select the corresponding dataset on Pennsieve, with which SODA will populate the `Name` field automatically. If you have not connected your Pennsieve account with SODA yet, [follow the instructions available here](../manage-dataset/connect-your-pennsieve-account-with-soda).
   :::

2. Description: Provide a brief description of the study and the dataset. This is automatically populated from your dataset subtitle on Pennsieve for your convenience (see [this section](../manage-dataset/add-edit-description) to add a subtitle for your dataset).

3. Dataset type: Select the type of the dataset from the dropdown list. Select `Computational` if your study only includes a computational model, otherwise select `Experimental`.

4. Keywords: Enter 3 to 5 keywords (other than those used in the name and description) that will help in searching your dataset once it is published. Hit 'Enter' after each keyword.

<video
   controls
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/DD-datasetInfo.mp4"
/>

### Participant Info (information about the subjects or samples of your dataset)

1. Number of subjects: Enter the number of unique subjects in this dataset. It should match the subjects metadata file. Set to `0` if there are no subjects.

2. Number of samples: Enter the number of unique samples in this dataset. It should match the samples metadata file. Set to `0` if there are no samples.

### Study Info (high-level information about your experiment or study)

1. Study organ system: Select the the major organ systems related to this study. Some common suggestions are provided in a dropdown but custom entries are also allowed. Either select from the dropdown list or type then hit 'Enter' to register. Multiple organ systems can be specified.

2. Study approach: Enter keywords describing the experimental approach or approaches taken in this study (e.g., `electrophysiology`).

3. Study technique: The experimental techniques used in this study.

4. Study purpose: Provide a description of the study purpose. It should match with the 'Study Purpose' section of your [description on Pennsieve](../manage-dataset/add-edit-description.md).

5. Study data collection: Provide a description of the study data collection process for this dataset. It should match with the 'Data Collection' section of your [description on Pennsieve](../manage-dataset/add-edit-description).

6. Study primary conclusion: Provide a description of the primary conclusion drawn from the study. It should match with the 'Primary Conclusion' section of your [description on Pennsieve](../manage-dataset/add-edit-description).

### Award and Contributor Info (information about the SPARC award and the contributors to your dataset)

1. SPARC Award associated with this dataset: You can either enter your award number manually or have your SPARC award number automatically populated if you are connected to Airtable (see tip above).

2. Click on `Add a contributor` to start adding contributors to your dataset_description file.
   - Provide information about any contributor to the dataset. Note that the 'Contributor' list is compiled from the SPARC Airtable sheet based on the SPARC award selected. Select one Contributor to get the ORCID ID, Contributor Affiliation, and Contributor Role populated automatically (if specified in the SPARC Airtable Sheet). Select `Other contributors` in the 'Contributors' dropdown list if you'd like to enter a Contributor name manually (although we suggest entering them directly in the SPARC Airtable then restart SODA to see them in the list so they are available for future reuse).
   - Check `Corresponding Author` if the contributor is a contact person/corresponding author for the dataset. At least one and only one of the contributors should be the corresponding author.
   - Click `Add contributor` to add the contributor to SODA's contributor table. Each contributor added to the table will be added to the dataset description file when it is generated.

<video
   controls
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/dd-awardInfo.mp4"
/>

### Related Information: protocol, paper, dataset, etc.

Before completing this section, your protocol(s) related to this dataset must be prepared on protocols.io under the SPARC group according to the [instructions available here](https://sparc.science/help/1slXZSS2XtTYQsdY6mEJi5).

1. Click Add a protocol.

   - Protocol URL or DOI: Provide the URL (if still private) / DOI (if public) of your protocol from protocols.io.
   - Protocol description: Provide a short description of the protocol.

Repeat if you have multiple protocols.

2. Click Add a URL/DOI to add a link relevant to this dataset (other than a protocol).
   - URL or DOI: Specify the URL or DOI. This can be URL to a Github repository or DOI to a paper for instance.
   - Link type: Select from the dropdown whether your link is a 'URL' or 'DOI'.
   - Relation to the dataset: From the dropdown list, select the relationship between this link and the dataset. The value in this field must be read as the 'relationship that this dataset has to the specified URL/DOI'.
   - Link description: Provide a short description of the link.

### Additional Information

1.  Study collection title: Title of the larger collection of to which this dataset belongs. Leave empty if none.
2.  Other funding sources: Specify other funding sources, if any. Hit `Enter` on your keyboard after typing each. Leave empty if none.
3.  Acknowledgments: Specify any acknowledgments beyond funding and contributors. Leave empty if none.

After you complete all steps, click on `Generate` to generate your dataset description file. You have the options to generate and save it on your computer or generate and upload it to Pennsieve. If your dataset is not organized yet, you can save this file anywhere on your computer then import it in SODA when prompted in the [Organize dataset](../prepare-dataset/organize-dataset) feature. A warning message may show up if any mandatory fields are missing. You may decide to go back and address the issues or generate the file anyway (and address the issues later).

:::note
In the contributors' table, you can drag and drop rows to organize contributors in the order that they should appear in the dataset_description file. You can also remove one
with the delete button.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
