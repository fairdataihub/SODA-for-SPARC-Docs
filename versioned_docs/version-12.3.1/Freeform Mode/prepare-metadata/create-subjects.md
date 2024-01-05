---
sidebar_position: 4
title: Create subjects.xlsx
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Create%20subjects.xlsx&description=Prepare%20Metadata
---

## Background

Under this feature, SODA lets you quickly and accurately prepare the subjects metadata file, which is mandatory for all SPARC datasets where subjects are involved in the study. SODA provides a convenient interface, which is more intuitive than the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve, NCBI Taxonomy and Scicrunch to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding "[How to](../../how-to/how-to-structure-the-subjects-metadata-file.md)" page if you would like to learn about it.

## How to

To access this interface click on the `Curate and Share` side bar option, then click on the `Free Form Curation` button and within the `Prepare Metadata` tab, click on the `Create subjects.xlsx` card.

### Step 1

You can start by either creating a subjects.xlsx file from scratch with SODA or continue working on an existing subjects.xlsx file.

If you want to continue working on an existing subjects.xlsx file, you will be prompted to either import it from your computer, or specify a Pennsieve dataset where the file is currently located. SODA will load information from such subjects file so you can edit them through the SODA interface.

### Step 2

If you are continuing to work on an existing subjects file, the subjects included in that file will be shown in a table. They can be modified or removed through the associated Edit/Copy/Delete buttons.

Click on `Add a subject` to add a new subject. This will prompt you to a form where you can provide information about that subject based on the fields listed below.

- **subject id** (Mandatory): Enter the ID of this subject. It must be unique for each subject across a dataset. The ID must start with `sub-` followed by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed.

- Experimental Setup (Mandatory if available):

  - pool id: Enter the id of the pool this subject belongs to, if applicable. It must be unique for each pool across a dataset. The ID must start with `pool-` followed by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed. E.g: pool-1.

  - experimental group: Enter the experimental group this subject is assigned to in the study, if applicable. E.g: control.

- Species Information (Mandatory if available):

  - Sex: Select the sex of the subject from the dropdown list. If unknown, leave the dropdow on "Select an option". E.g: Female.

  - Species: Click on `Add species`. In the popup, type and select the applicable option from the suggestions given in the dropdown list or click on `Find the scientific name for xxx`. SODA will automatically fill with the correct scientific name defined by NCBI Taxonomy as per the SPARC requirements.

  - Strain: Click on `Add strain`. In the popup, type and select the applicable option from the suggestions in the dropdown list or click on `Click here to check xxx` to verify that the strain is registered on Scicrunch, as per SPARC requirements. If found, the Research Resource Identifier Identification (RRID) of the strain will be automatically pulled out from [Scicrunch](https://scicrunch.org/resources/Organisms/search) by SODA and included in your subject.xslx file when generated.

  - Exact age at the start of experiment: Enter the age (e.g., hours, days, weeks, years old) or if unknown, leave it empty. For your convenience, SODA separates this entry into two fields: a number field (e.g: 1, 2, 3) and a unit field (e.g: hours, days, weeks, etc). If an ISO format is expected for this entry, enter the ISO-formatted text in the number field, and select `N/A` for the unit field.

  - Member of: Provide the ID of the population that the specimen of your subject belongs to. The ID must start with `pop-` followed by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed. E.g.: pop-1.

  - Also in dataset: Include the Pennsieve id(s) for other datasets that have data about the same subject.

- Optional details:

  - Age category: Select, from the dropdown list, the age category that the subject belongs to. Options in the dropdown list are derived from [UBERON life](http://www.ontobee.org/ontology/catalog/UBERON?iri=http://purl.obolibrary.org/obo/UBERON_0000105) cycle stage, as per SPARC requirements.

  - Age range: Provide the minimal age (youngest) and the maximum age (oldest) of the research subjects in this dataset. The format for these two fields is numerical value + space + unit (spelled out).

  - Date of birth: The date of birth of the subject.

- Protocol Information (Optional):

  - Protocol title on protocols.io: Enter the title of the protocol on protocols.io associated with this subject study.

  - Protocol URL on protocols.io: Enter the protocol.io URL of your protocol.

- Additional fields (Optional):

  - Handedness: Select from the dropdown list. This refers to the preference of the subject to use the right or left hand, if applicable.

  - Body mass: The body mass of the subject.

  - Genotype: This refers to the genetic makeup of genetically modified alleles in transgenic animals belonging to the same subject group. Ignore this field if the RRID is already provided.

  - Phenotype: Provide the phenotype of the subject.

  - Disease or disorder: Provide any disease of disorder of the subject.

  - Disease model: Provide the disease model of the subject.

  - Intervention: Provide the intervention applied to your subject (if any).

  - Reference atlas: Enter here the reference atlas and organ.

  - Experimental log file name: Provide the path to the log file. This is a file containing experimental records for each subject, whenever applicable.

  - Experimental date: Provide the date at which the experiment took place.

  - Laboratory internal id: Provide a mapping for groups that have incompatible internal identifier conventions

- Custom fields (Optional)

Click `Add custom field` button to start adding a header for a field that is not a SPARC-standard field. You will have the option to add value for this field after it is created. Click on the `trash can` icon next to a field to delete a custom field.

After you complete all steps, click on `Generate` to generate your subjects file. You have the options to generate and save it on your computer or generate and upload it directly to Pennsieve. If your dataset is not organized yet, you can save this file anywhere on your computer then import it in SODA when prompted in the [Organize dataset](../prepare-dataset/organize-dataset) feature.

:::tip
If you have a properly structured SPARC primary folder to import, you can click on `I want to import subject ID(s) from my primary folder` specified under the button `Add a subject` to import it to the table of subjects. SODA will extract the subject ID(s) (if available) onto the table of subjects for your edits.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
