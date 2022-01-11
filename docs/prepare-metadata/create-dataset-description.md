---
sidebar_position: 3
---

# Create dataset_description.xlsx

## Background

Under this feature, SODA lets you quickly and accurately prepare the dataset_description metadata file which is mandatory for all SPARC datasets. SODA provides a convenient interface, which is more intuitive than the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve and the SPARC Airtable sheet to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding "How to" page if you would like to learn about it.

## How to

1. You can start by either Creating a dataset_description.xlsx file from scratch with SODA or Continue working on an existing dataset_description.xlsx file.
2. If you want to continue working on an existing dataset_description.xlsx file, you will be prompted to either import it from your computer, or specify a Pennsieve dataset where the file is currently located. SODA will load information from such dataset_description file for further edits at your convenience.
3. The subsequent interface divides the dataset description file into six convenient sections to facilitate your task.

### Dataset Info (high-level information about your dataset)

1. Name: Descriptive title for the dataset. Since this field should match exactly with your dataset on Pennsieve, SODA lets you select it from your list of Pennsieve datasets (see "Connect to your Pennsieve account" section).
2. Description: Brief description of the study and the dataset. This is populated automatically from your dataset subtitle on Pennsieve for your convenience (see this section to add a description).
3. Dataset type: The type of this dataset, specifically whether it is experimental or computational.
4. Keywords: A set of 3-5 keywords (other than those used in the name and description) that will help in searching your dataset once published

<video
   controls
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/DD-datasetInfo.mp4"
/>

### Participant Info (information about the subjects or samples of your dataset)

1. Number of subjects: The number of unique subjects in this dataset, should match the subjects metadata file. Must be greater or equal to 1.
2. Number of samples: The number of unique samples in this dataset, should match the samples metadata file. Set to zero if there are no samples.

### Study Info (high-level information about your experiment or study)

1. Study organ system: The major organ systems related to this study.
2. Study approach: The experimental approach or approaches taken in this study.
3. Study technique: The experimental techniques used in this study.
4. Study purpose: A description of the study purpose for the structured abstract
5. Study data collection: A description of the study data collection process for this dataset. Used to generate the structured abstract.
6. Study primary conclusion: A description of the primary conclusion drawn from the study for the structured abstract.

### Award and Contributor Info (information about the SPARC award and the contributors to your dataset)

1. SPARC Award associated with this dataset: You can either type the SPARC award number or have SODA retrieve your SPARC award and its contributor information by connecting SODA with your Airtable account. Instructions are provided here.
2. Click on Add a contributor to start adding contributors to your dataset_description file.
   - Provide information about any contributor to the dataset. Note that the "Contributor" list is compiled from the SPARC Airtable sheet based on the SPARC award selected. Select one Contributor to get the ORCID ID, Contributor Affiliation, and Contributor Role populated automatically (if specified in the SPARC Airtable Sheet). Select "Other contributors" in the "Contributors" dropdown list if you'd like to enter a Contributor name manually (although we suggest entering them directly in the SPARC Airtable - restart SODA to see them in the list).
   - Check "Corresponding Author" if the contributor is a contact person/corresponding author for the dataset. At least one and only one of the contributors should be the corresponding author.
   - Click "Add contributor" to add the contributor to SODA's contributor table. Each contributor added to the table will be added to the dataset description file when it is generated.

<video
   controls
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/dd-awardInfo.mp4"
/>

### Related Information: protocol, paper, dataset, etc.

1. Click Add a protocol to add a protocol.
   - Protocol URL or DOI: URLs (if still private) / DOIs (if public) of protocols from protocols.io related to this dataset.
   - Protocol type: This will state whether your link is a "URL" or a "DOI" item. Use one of those two items to reference the type of identifier.
   - Relation to the dataset: A prespecified list of relations for common protocols used in SPARC datasets. The value in this field must be read as the 'relationship that this dataset has to the specified protocol'.
   - Protocol description: Provide a short description of the link.
2. Click Add a URL/DOI to add a link other than a protocol.
   - URL or DOI: Specify your actual URL (if resource is public) or DOI (if resource is private). This can be web links to repositories or papers (DOI).
   - Link type: This will state whether your link is a 'URL' or 'DOI' item. Use one of those two items to reference the type of link.
   - Relation to the dataset: A prespecified list of relations for common URLs or DOIs used in SPARC datasets. The value in this field must be read as the 'relationship that this dataset has to the specified URL/DOI.
   - Link description: Provide a short description of the link.

## Additional Information

1. Study collection title: Title of the larger collection of to which this dataset belongs.
2. Other funding sources: Specify other funding sources, if any. Hit 'Enter' on your keyboard after typing each. Leave empty if none.
3. Acknowledgments: Specify any acknowledgments beyond funding and contributors. Leave empty if none.

After you complete all steps, click on "Generate" to generate your dataset description file. You have the options to generate and save it on your computer or generate and upload it to Pennsieve. A warning message may show up if any mandatory fields are missing. You may decide to go back and address the issues or generate the file anyway (and address the issues later).

## Note

In the contributors' table, you can drag and drop rows to organize contributors in the order that they should appear in the dataset_description file. You can also remove one with the delete button.
