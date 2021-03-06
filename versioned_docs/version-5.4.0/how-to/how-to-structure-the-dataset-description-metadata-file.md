---
sidebar_position: 2
title: How to structure the dataset description metadata file
image: https://docs.sodaforsparc.io/thumbnails/how-to/how-to-structure-the-dataset-description-metadata-file.png
---

## Background

SODA helps you prepare the [dataset description metadata file](../prepare-metadata/create-dataset-description.md) conveniently. While SODA automatically generates the file in the required structure, we explain here how it must be structured according to the SPARC rules in order to provide some insight about the structure of the file generated by SODA.

## How to

- Format: The dataset description file is accepted in either xlsx, csv, or json format. SODA generates it in the xlsx format based on the template provided by the Curation Team.
- Location in the dataset: The dataset_description file must be included in the high-level dataset folder.
- Content: The `Metadata element` and `Value` columns are mandatory as well as the `Definition` and `Example` columns, which should remain unchanged. Some of the `Metadata element` are mandatory (highlighted in bold below) for all datasets and must be provided at least one `Value`. If more than one `Value` is to be provided (for instance multiple `Contributors`) for a `Metadata Item`, each subsequent value column must be named `Value 2`, `Value 3`, `Value 4`, and so forth.
  - **Name**: Descriptive title for the dataset. This field should match exactly with your dataset name on Pennsieve.
  - **Description**: Brief description of the study and the data set. Equivalent to the abstract of a scientific paper. This could match the subtitle provided on Pennsieve.
  - **Keywords**: A set of 3-5 keywords other than already mentioned in the above elements that will aid in search of your dataset once published on the SPARC portal. Each keyword must be provided in a separate column.
  - **Contributors**: Name of any contributors to the dataset. These individuals need not have been authors on any publications describing the data, but should be acknowledged for their role in producing and publishing the dataset. If more than one, add each contributor in a new column. For each contributor it is mandatory at least one affiliation, at least one role, and role as contact person.
  - **Contributor ORCID ID**: This is the contributor's ORCID ID number. If you do not have one, you can sign up for one at [orcid.org](https://orcid.org). It must be in the format `https://orcid.org/xxxx-xxxx-xxxx-xxxx`. It is not mandatory but highly recommended.
  - **Contributor Affiliation**: Institutional affiliation for contributors. A ror ID in the `https://ror.org/xxxxxxxxx` format could be provided if available. If multiple affiliations, each must be semi-colon separated in a single cell.
  - **Contributor Role**: Role(s) of the contributor. It must one of the following roles provided by the Data Cite schema: PrincipleInvestigator, Creator, CoInvestigator, ContactPerson, DataCollector, DataCurator, DataManager, Distributor, Editor, Producer, ProjectLeader, ProjectManager, ProjectMember, RelatedPerson, Researcher, ResearchGroup, Sponsor, Supervisor, WorkPackageLeader, Other. The definition of each of these roles is provided in the document here . The role `ContactPerson` must be provided for the person marked as `Yes` in the `Is Contact Person` element of the `Metadata Item` (this is done automatically in SODA). If more than one role is to be specified for a contributor, each must be comma-separated in a single cell.
  - _Is Contact Person_: Specify `Yes` if the contributor is a contact person for the dataset, otherwise specify `No`. One and only one of the contributors must be marked `Yes`.
  - Acknowledgements: Acknowledgements beyond funding and contributors
  - **Funding**: Specify the number of your SPARC award (mandatory in the OT2OD0XXXXX format) and other funding award if applicable (optional). If multiple award numbers are specified, each award number must be specified in a separate column.
  - Originating Article DOI: DOIs of published articles that were generated from this dataset
  - **Protocol URL or DOI**: URLs (if still private) / DOIs (if public) of protocols from protocols.io related to this dataset
  - Additional Links: URLs of additional resources used by this dataset (e.g., a link to a code repository)
  - Link Description: Short description of URL content.
  - **Number of subjects**: Number of unique subjects in this dataset, should match subjects metadata file.
  - **Number of samples**: Number of unique samples in this dataset, should match samples metadata file. Set to zero if there are no samples.
  - Completeness of data set: Is the data set as uploaded complete or is it part of an ongoing study? Use `hasNext` to indicate that you expect more data on different subjects as a continuation of this study. Use ???hasChildren??? to indicate that you expect more data on the same subjects or samples derived from those subjects. Leave empty if none of these two apply.
  - Parent dataset ID: If this is a part of a larger data set, or references subjects or samples from a parent dataset, provide the Pennsieve ID of the prior batch in the `N:dataset:c5c2f40f-76be-4979-bfc4-b9f9947231cf` format. You need only give us the Pennsieve ID of the last batch, not all batches. If samples and subjects are from multiple parent datasets please create a comma separated list of all parent Pennsieve IDs.
  - Title for complete data set: Please give us a provisional title for the entire data set.
  - Metadata Version **DO NOT CHANGE**: The `Value` for this must not be changed

:::info
There should be only one of `Originating Article DOI`, `Protocol URL or DOI`, or `Additional Links` specified in each column. If there are multiple of those elements, each must be in a separate column. This is to avoid confusion about what the `Link Description` is for in case it is provided.
:::

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
