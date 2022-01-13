---
sidebar_position: 4
---

# Create subjects.xlsx

## Background

Under this feature, SODA lets you quickly and accurately prepare the subjects metadata file which is mandatory for all SPARC datasets. SODA provides a convenient interface, which is more intuitive than the Excel spreadsheet template. It also makes use of information from your dataset on Pennsieve, NCBI Taxonomy, Scicrunch, and protocols.io to help you populate some of the fields easily. The expected structure of this file, generated automatically by SODA, is explained in our corresponding "[How to](../how-to/how-to-structure-the-subjects-metadata-file.md)" page if you would like to learn about it.

## How to

### Step 1

Currently, there are 2 ways to start creating your subjects.xlsx file with SODA:

1A. Start from scratch with SODA

1B. Continue working on an existing subjects.xlsx file

If you start with:

(1A): You can go straight to step 2.

If you start with:

(1B): You will be able to specify the location of the existing subjects file: either from your computer or from a Pennsieve dataset. Clicking `Confirm` after specifying the file path or a Pennsieve dataset will load the information from the file onto SODA.

### Step 2

You will be able to add new subjects or edit/delete existing subjects (if any). If at least 1 subject is added, a table of subjects will be provided with each row containing a subject and the tasks associated with it (Edit/Copy/Delete).

Clicking on `Add a subject` will prompt you to a form where you can add a new subject by entering information about it. The form contains the below fields with mandatory fields written in bold and optional fields in italic.

<video 
  controls 
  width="100%" 
  src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Subjects-interface.mp4" 
/>

- **subject id**: Lab-based schema for identifying each subject. This field should match the primary's sub-folder names. The subject_id must be unique.
- Experimental Setup (Mandatory if available):
  - pool id: If data is collected on multiple subjects at the same time include the identifier of the pool where the data file will be found. If this is included it should be the name of the top level folder inside primary. E.g: pool 1.
  - experimental group: Experimental group subject is assigned to in research project. E.g: control.
- Species Information (Mandatory if available):
  - Sex: This is the sex of the subject, or if unknown, leave it empty. E.g: Female.
  - Species: This is the species of the subject. When users start typing to search for a species, SODA provides species suggestions based on the NCBI taxonomy. E.g: Rattus
  - Strain: This is the organism strain of the subject. When users start typing to search for a strain, SODA provides strain suggestions based on the common strains observed from SPARC datasets. Once a strain is specified, the Research Resource Identifier Identification (RRID) of the strain will be automatically pulled out from [Scicrunch](https://scicrunch.org/resources/Organisms/search) by SODA.
  - Exact age at the start of experiment: Age of the subject (e.g., hours, days, weeks, years old) or if unknown, leave it empty. For your convenience, SODA separates this entry into 2 fields: A number field (e.g: 1, 2, 3) and a unit field (e.g: hours, days, weeks, etc). If an ISO format is expected for this entry, enter the ISO-formatted text in the number field, and select `N/A` for the unit field.
  - Member of: Provide a population that the specimen of your subject belongs to.
  - Also in dataset: Include the Pennsieve id(s) for other datasets that have data about the same specimen.
- Optional details:
  - _Age category_: The age category that the subject belongs to. An search field with suggestions based on list derived from [UBERON life](http://www.ontobee.org/ontology/catalog/UBERON?iri=http://purl.obolibrary.org/obo/UBERON_0000105) cycle stage is provided in the interface for your convenience.
  - _Age range_: This is the minimal age (youngest) and the maximum age (oldest) of the research subjects. The format for these 2 fields is numerical value + space + unit (spelled out).
  - _Date of birth_: The date of birth of the subject.

<video 
  controls 
  width="100%" 
  src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Subjects-species.mp4" 
/>

- Protocol Information (Optional):
  - _Protocol title on protocols.io_: This field refers to the title of the protocol within Protocols.io once the research protocol is uploaded to Protocols.io. In SODA, users can connect to their protocols.io account by clicking on `Help me with my protocol information` under the Protocol Information tab. An login interface will instruct users to sign in their account in the browser at [protocols.io](https://www.protocols.io/developers). An access token is required for automatic extraction of the protocol titles and links and can be easily obtained from the provided website once they are signed in. Once users successfully connect their account with with SODA, they can search in the input field for their protocol titles.
  - _Protocol.io links_: This refers to the Protocol.io URL for the protocol title. In SODA, when users select a protocol title in the previous field (Protocol title), the protocol location or link will be automatically filled out for this field.

<video 
  controls 
  width="100%" 
  src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Subjects-protocols.mp4" 
/>

- Additional fields (Optional):
  - _Handedness_: This refers to the preference of the subject to use the right or left hand, whenever applicable.
  - _Body mass_: The body mass of the subject.
  - _Genotype_: This refers to the genetic makeup of genetically modified alleles in transgenic animals belonging to the same subject group. Ignore this field if the RRID is already provided.
  - _Phenotype_: Provide the phenotype of the subject.
  - _Disease or disorder_: Provide any disease of disorder of the subject.
  - _Disease model_: Provide the disease model of the subject..
  - _Intervention_: Provide the intervention applied to your subject (if any).
  - _Reference atlas_: Enter here the reference atlas and organ.
  - _Experimental log file name_: This is a file containing experimental records for each sample, whenever applicable.
  - _Experimental date_: Provide the date at which the experiment takes place.
  - _Laboratory internal id_: Provide a mapping for groups that have incompatible internal identifier conventions.
- Custom fields (Optional)

Click `Add custom field` button to start adding a header for a field that is not a SPARC-standard subjects.xlsx field. You will have the option to add value for this field after it is created. Click on the `trash can` icon next to a field to delete a custom field.

After you complete all steps, click on `Generate` to generate your subjects file. You have the options to generate and save it on your computer or generate and upload it to Pennsieve.

:::tip
If you have a properly structured SPARC primary folder to import, you can click on `I want to import subject ID(s) from my primary folder` specified under the button `Add a subject` to import it to the table of subjects. SODA will extract the subject ID(s) (if available) onto the table of subjects for your edits.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />