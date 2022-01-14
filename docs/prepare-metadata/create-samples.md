---
sidebar_position: 5
---

# Create samples.xlsx

## Background

Under this feature, SODA lets you quickly and accurately prepare the dataset_description metadata file which is recommended for SPARC datasets. SODA provides a convenient interface, which is more intuitive than the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve, NCBI Taxonomy, Scicrunch, and protocols.io to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding "[How to](../how-to/how-to-structure-the-samples-metadata-file.md)" page if you would like to learn about it.

## How to

### Step 1

Currently, there are 2 ways to start creating your samples.xlsx file with SODA:

1A. Start from scratch with SODA

1B. Continue working on an existing samples.xlsx file

If you start with:

(1A): You can go straight to step 2.

If you start with:

(1B): You will be able to specify the location of the existing subjects file: either from your computer or from a Pennsieve dataset. Clicking `Confirm` after specifying the file path or a Pennsieve dataset will load the information from the file onto SODA.

### Step 2

You will be able to add new samples or edit/delete existing samples (if any). If at least 1 sample is added, a table of samples will be provided with each row containing a subject, its sample, and the tasks associated with it (Edit/Delete).

Clicking on `Add a sample` will prompt you to a form where you can add a new sample by entering information about it. The form contains the below fields with mandatory fields written in bold.

<video 
  controls 
  width="100%" 
  src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Samples-interface.mp4" 
/>

- **subject** id: Lab-based schema for identifying each subject. This field should match the primary's sub-folder names. The subject_id must be unique.
- **sample id**: Lab-based schema for identifying each sample. The sample id must be unique across the whole dataset.
- Experimental Setup (Mandatory if available):
  - pool id: If data is collected on multiple subjects at the same time include the identifier of the pool where the data file will be found. If this is included it should be the name of the top level folder inside primary. E.g: pool 1.
  - experimental group: Experimental group subject is assigned to in research project. E.g: control.
  - wasDerivedFromSample: This is the sample_id of the sample from which the current sample was derived (e.g., slice, tissue punch, biopsy, etc.).
- Species Information (Mandatory if available):
  - Sample type: This refers to the physical type of the specimen from which the data were extracted.
  - Sample anatomical location: This is the organ, or sub-region of organ from which the data were extracted.
  - Member of: Provide a population that the specimen or sample belongs to.
  - Also in dataset: Include the Pennsieve id(s) for other datasets that have data about the same specimen.
- Protocol Information (Optional):
  - _Protocol title on protocols.io_: This field refers to the title of the protocol within Protocols.io once the research protocol is uploaded to Protocols.io. In SODA, users can connect to their protocols.io account by clicking on `Help me with my protocol information` under the Protocol Information tab. An login interface will instruct users to sign in their account in the browser at [protocols.io](https://www.protocols.io/developers). An access token is required for automatic extraction of the protocol titles and links and can be easily obtained from the provided website once they are signed in. Once users successfully connect their account with with SODA, they can search in the input field for their protocol titles.
  - _Protocol.io links_: This refers to the Protocol.io URL for the protocol title. In SODA, when users select a protocol title in the previous field (Protocol title), the protocol location or link will be automatically filled out for this field.
- Additional fields (Optional):
  - _Laboratory internal id_: Provide a mapping for groups that have incompatible internal identifier conventions.
  - _Date of derivation_: Provide the date at which the subject was collected.
  - _Pathology_: Provide the pathological condition of the sample if applicable.
  - _Laterality_: This indicates which one of a pair of organs (i.e: kidneys or lungs) the sample is.
  - _Cell type_: Provide the cell type of your subject.
  - _Plane of section_: Provide the plane of section of your subject.
  - _Reference atlas_: Enter here the reference atlas and organ.
  - _Experimental log file name_: This is a file containing experimental records for each sample, whenever applicable.
- Custom fields (Optional)

Click `Add custom field` to start adding a header for a field that is not a SPARC-standard samples.xlsx field. You will have the option to add value for this field after it is created. Click on the `trash can` icon next to a field to delete a custom field.

After you complete all steps, click on `Generate` to generate your samples file. You have the options to generate and save it on your computer or generate and upload it to Pennsieve.

:::tip
If you have a properly structured SPARC primary folder to import, you can click on `I want to import subject ID(s) from my primary folder` specified under the button `Add a sample` to import it to the table of subjects. SODA will extract the subject ID(s) (if available) onto the table of subjects for your edits.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
