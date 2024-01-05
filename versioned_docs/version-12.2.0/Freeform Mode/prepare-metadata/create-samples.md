---
sidebar_position: 5
title: Create samples.xlsx
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Create%20samples.xlsx&description=Prepare%20Metadata
---

## Background

Under this feature, SODA lets you quickly and accurately prepare the samples metadata file which is recommended for SPARC datasets. SODA provides a convenient interface,
which is more intuitive than the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve, NCBI Taxonomy and Scicrunch
to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding
"[How to](../../how-to/how-to-structure-the-samples-metadata-file.md)" page if you would like to learn about it.

## How to

To access this interface click on the `Curate and Share` side bar option, then click on the `Free Form Curation` and within the `Prepare Metadata` tab, click on
the `Create samples.xlsx` card.

### Step 1

You can start by either creating a samples.xlsx file from scratch with SODA or continue working on an existing samples.xlsx file.

If you want to continue working on an existing samples.xlsx file, you will be prompted to either import it from your computer, or specify a Pennsieve dataset
where the file is currently located. SODA will load information from such samples file so you can edit them through the SODA interface.

### Step 2

If you are continuing to work on an existing samples file, the samples included in that file will be shown in a table. They can be modified or removed through the
associated Edit/Copy/Delete buttons.

Click on `Add a sample` to add a new samples. This will prompt you to a form where you can provide information about that sample based on the fields listed below.

<!-- <video
  controls
  width="100%"
  src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Samples-interface.mp4"
/> -->

- **subject** id (mandatory): Enter the ID of the subject this sample belongs to. It must be unique for each subject across a dataset. The ID must start with `sub-`
  followed by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed.

- **sample id** (mandatory): Enter the ID of this sample. It must be unique for each sample belonging to a same subject. The ID must start with `sam-` followed
  by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed.

- Experimental Setup (Mandatory if available):

  - pool id: Enter the id of the pool this sample's subject belongs to, if applicable. It must be unique for each pool across a dataset. The ID must start with `
pool-` followed by any series of alpha-numeric characters (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed. E.g: pool-1.

  - experimental group: Enter the experimental group this subject is assigned to in the study, if applicable. E.g: control.

  - wasDerivedFromSample: Enter the ID of the sample from which the current sample was derived from (e.g., slice, tissue punch, biopsy, etc.).

- Species Information (Mandatory if available):

  - Sample type: Select from the dropdown list. This refers to the physical type of the specimen from which the data were extracted.

  - Sample anatomical location: Specify the organ, or sub-region of organ from which the sample was extracted.

  - Member of: Provide the ID of the population that the specimen of your subject belongs to. The ID must start with `pop-` followed by any series of alpha-numeric characters
    (upper and lower cases allowed) or dash `-`. No other characters (including white space) are allowed. E.g.: pop-1.

  - Also in dataset: Include the Pennsieve id(s) for other datasets that have data about the same subject.

- Protocol Information (Optional):

  - Protocol title on protocols.io: Enter the title of the protocol on protocols.io associated with this subject study.

  - Protocol URL on protocols.io: Enter the protocol.io URL of your protocol.

- Additional fields (Optional):

  - Laboratory internal id: Provide a mapping for groups that have incompatible internal identifier conventions.

  - Date of derivation: Provide the date at which the sample was collected.

  - Pathology: Provide the pathological condition of the sample if applicable.

  - Laterality: Select from the dropdown list. This indicates which one of a pair of organs (i.e: kidneys or lungs) the sample is.

  - Cell type: Provide the cell type of your subject.

  - Plane of section: Select from the dropdown list. This refers to the plane of section of your sample.

  - Reference atlas: Enter here the reference atlas and organ.

  - Experimental log file name: Provide the path to the log file. This is a file containing experimental records for each sample, whenever applicable.

- Custom fields (Optional)

Click `Add custom field` to start adding a header for a field that is not a SPARC-standard samples.xlsx field. You will have the option to add value for this
field after it is created. Click on the `trash can` icon next to a field to delete a custom field.

After you complete all steps, click on `Generate` to generate your samples file. You have the options to generate and save it on your computer or generate and upload
it directly to Pennsieve. If your dataset is not organized yet, you can save this file anywhere on your computer then import it in SODA when prompted in the
[Organize dataset](../prepare-dataset/organize-dataset) feature.

:::tip
If you have a properly structured SPARC primary folder to import, you can click on `I want to import subject ID(s) from my primary folder` specified under the button
`Add a sample` to import it to the table of subjects. SODA will extract the subject and sample ID(s) (if available) onto the table of samples for your edits.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
