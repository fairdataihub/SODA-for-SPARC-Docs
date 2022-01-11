---
sidebar_position: 4
---

# Organize and submit a new SPARC dataset

## Background

This is the suggested workflow for preparing and submitting your SPARC datasets with SODA using the Free Form Mode features (accessible from the sidebar). All these steps are mandatory (unless marked otherwise) if you wish to satisfy the SPARC requirements. Once you complete these steps, your datasets will be curated according to the SPARC guidelines and summited to the SPARC Curation Team for review.

## Prepare Dataset on Pennsieve

### Connect your Pennsieve account with SODA

This is only required the first time you use SODA. This step will be automatically requested from you when you start SODA if you haven't connected to Pennsieve. You can also trigger this step manually by clicking the edit (pencil icon image) button at any of the Current account fields in SODA. We would suggest using the one found under the `Create a new dataset option` at `Free Form Mode > Manage Datasets`.

![](https://camo.githubusercontent.com/388cfd3023fb89515049abb608a8f70ff21208c0d8d402aafbc8ab9d98c8ec7f/68747470733a2f2f692e6962622e636f2f4e43485074347a2f696d6167652e706e67)

### Create a new dataset

To create a new dataset on Pennsieve, use the Create a new dataset option under `Free Form Mode > Manage Datasets`.

![](https://camo.githubusercontent.com/a92ee77f878c7668dd59628100ebdb12fbe4d3aba92479b720d121ce756438dc/68747470733a2f2f692e6962622e636f2f426756384c76762f696d6167652e706e67)

You can then confirm your details in the account step. Type out the name of the dataset you want to create on Pennsieve and click on Create dataset.

Note: You can use the navigation buttons in the bottom right corner of the app to go through all the mandatory steps needed to curate a dataset. These buttons will follow the same steps as detailed in this guide.

![](https://camo.githubusercontent.com/b95119c2a2f81cc5831dd78d52527e3bbc5ebcd19ea0ce05ff62deccee0b3890/68747470733a2f2f692e6962622e636f2f544c4e425064702f696d6167652e706e67)

### Make PI of the SPARC award the owner of the dataset

By default, the creator of the dataset (you) is the owner. As per SPARC guidelines, the PI of your award needs to be the owner of the dataset. You can use the feature `Make PI owner of dataset` under the `Manage Datasets` tab to accomplish this task. The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to `Current dataset`). Simply select your dataset PI from the dropdown list and click on `Make PI owner` (read and click `Yes` in the warning prompt) to make them the owner.

![](https://camo.githubusercontent.com/0eacfb7a1a28854bdb789485b2afa7778d70c0858b146044073683e0bd2d9cfe/68747470733a2f2f692e6962622e636f2f744347726a56472f696d6167652e706e67)

### Give access to other members/teams who may need to contribute to the dataset

Your dataset may require additional people or teams to be given permission to access the dataset. You can use the feature Add/edit permissions under the Manage Datasets tab to accomplish this task. Currently given permissions will be visible under Current permissions. To add additional permissions for teammates, click on Add/edit user permissions, select your teammate's name from the first dropdown list, select their desired permission/role from the second dropdown list, and click on Add permissions for user. Repeat to add more teammates.

![](https://camo.githubusercontent.com/0eacfb7a1a28854bdb789485b2afa7778d70c0858b146044073683e0bd2d9cfe/68747470733a2f2f692e6962622e636f2f744347726a56472f696d6167652e706e67)

[Learn more about the types of permissions and their restrictions.](../manage-dataset/add-edit-permissions)

### Add a subtitle

You can use the feature Add/edit subtitle under the Manage Datasets tab to add a subtitle to your dataset. The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to Current dataset). In the textbox, add two or three sentences (limit of 256 characters) that describe the content of your dataset and click on Add subtitle.

![](https://camo.githubusercontent.com/5ae2f88375f706312d1a9c73823293d7a058a2f9da99550b84de04a07b9bf88e/68747470733a2f2f692e6962622e636f2f4a4674565444502f696d6167652e706e67)

### Add a description

You can use the feature Add/edit description under the Manage Datasets The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to Current dataset). In the textbox, provide a detailed description of your dataset and click on Add description. It is typically recommended to include three sections: Study Purpose, Data Collected, and Primary Conclusion. You can see published datasets on sparc.science for inspiration.

![](https://camo.githubusercontent.com/43fb106689ac3a41eaf3d3a0faf0adcaccf31623b8d1b32c72455bcac1f14169/68747470733a2f2f692e6962622e636f2f3353597351634b2f696d6167652e706e67)

### Upload a banner image

You can use the feature Upload a banner image under the Manage Datasets tab to add a banner image to your dataset. The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to Current dataset).

- Click on "Edit banner image"
- Click on "Import image" in the new pop-up window.
- Select the image file you want to use as a banner image.
- Crop the file as desired. Note that all banner images must be square, have a minimum display size of 512x512 px (1024x1024 px preferred), and have a maximum file size of 5 MB.
- Click on "Save changes".

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Add-metadata/banner-image.gif?raw=true)

### Assign a license

You can use the feature Assign a license under Manage Datasets to assign the SPARC mandated Creative Commons Attribution (CC-BY) license to your dataset. The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to Current dataset). Simply click on Assign Creative Commons Attribution (CC-BY) license to assign the license.

![](https://camo.githubusercontent.com/4da3223b2eadcef9aecf5c545821c0f2c6f05195b8b054ea135f0e8a1ce81f8a/68747470733a2f2f692e6962622e636f2f59303170596d702f696d6167652e706e67)

## Prepare SPARC Metadata Files

### Prepare submission file

You can use the feature Create submission.xlsx under the Prepare Metadata tab to accomplish this task. Select I want to prepare a new submission.xlsx file, then fill out the three required fields for this metadata file.

1. Enter your award number. We recommend connecting your Airtable account with SODA so you can import your award number automatically and without error from the SPARC Airtable sheet (this will also come in handy later on when adding contributors to the dataset_description metadata file). To do that:
   - Click on Click here to import my SPARC award from Airtable


   ![](https://camo.githubusercontent.com/bfcf10546da716ccabee27be5974a562bbfc6f3d4e26b5d5558fcc3076e54573/68747470733a2f2f692e6962622e636f2f44396658344e732f696d6167652e706e67)


   - Click Yes on the pop-up for adding an Airtable account connection. You need to enter your Airtable API key in SODA to connect your account. To find your Airtable key, please visit your account (login if necessary) and click the Generate API Key button. If you see a Regenerate API key option you may click on the box with the dots to reveal your API key. Copy it and paste it in the dedicated field in the SODA pop-up box (click Yes if a warning prompt shows up).


   ![](https://camo.githubusercontent.com/7422484284e52c387a1d0103bc28b2db24e85a9b6b3e3e136b76a1ad8238a265/68747470733a2f2f692e6962622e636f2f6e6673514d46762f696d6167652e706e67)
   
   
   - Select your SPARC award from the dropdown and click the 'Confirm' button.
   
   
   ![](https://camo.githubusercontent.com/e6c98181aa267701b1be038abe77c0ab66a318b7362939504c2a1bdc18bc595c/68747470733a2f2f692e6962622e636f2f795051584d33462f696d6167652e706e67)
2. Enter the milestone associated with your dataset and the corresponding completion date. The milestone and date should be exactly as reported in the Data Deliverables document associated with your award (see here to find out more). We recommend that you import your Data Deliverables document in SODA to automatically extract milestone information. To do so:
   - Click on Import milestones from my Data Deliverables Document


   ![](https://camo.githubusercontent.com/d9de8d44d6285b61fca338d7955657f067f94985730a3da26d6c8198ced1be8c/68747470733a2f2f692e6962622e636f2f46627a465053712f696d6167652e706e67)


   - You can now click on the Yes, let's import it button in the first pop-up. In the second pop-up, click on the Browse here field to select the path of your Data Deliverable document. This will import all the relevant milestones and submission dates associated with that milestone.
   - You can then select the milestone(s) and completion date associated with your dataset.


   ![](https://camo.githubusercontent.com/e6c98181aa267701b1be038abe77c0ab66a318b7362939504c2a1bdc18bc595c/68747470733a2f2f692e6962622e636f2f795051584d33462f696d6167652e706e67)

Click on the Generate button and select where you want to store the submission.xlsx file on your computer. You will be asked to include this file when organizing your dataset in the later steps.

The expected structure of this file, generated automatically by SODA, is explained in our corresponding How to page if you would like to learn about it.

### Prepare dataset description file

You can find this feature under Create dataset_description.xlsx under the Prepare Metadata tab. Select I want to prepare a new dataset_description.xlsx file. The subsequent interface divides the dataset description file into six convenient sections to facilitate your task. Go through them successively and populate the various fields as indicated (Mandatory fields are indicated):

1. Dataset information
   - Dataset name: The name of the dataset you created during step A2 should be automatically listed. If not, click on the Click here to select my dataset from Pennsieve option and select your dataset. <br/><br/>
   ![](https://camo.githubusercontent.com/6784c70a94fab65a56c69433be8357c4291d8394a036713495728a3a275a4528/68747470733a2f2f692e6962622e636f2f424c63444c716e2f696d6167652e706e67)<br/> <br/>
   - Brief description/subtitle of your dataset: This field should be populated automatically with the subtitle of your dataset. It is not required to change it.
2. Study information
   - Keywords: Provide at least three keywords (press Enter on your keyboard after each).
   - Provide the number of subjects and samples in your dataset (numerical value).
3. Award and contributor information
   - Award number: Click on the Click here to select my award number and import contributor info and select your award. <br /> <br />
   ![](https://camo.githubusercontent.com/53da9515f2d57a695b63615acd51eebb61911cb2fca153de9a0ddc054d8a5db5/68747470733a2f2f692e6962622e636f2f704c3770724c732f696d6167652e706e67) <br /> <br />
   - Contributor Information: Click on Add contributor. In the new pop-up box, select the contributor from the list automatically pulled from the SPARC Airtable sheet. All the information should be automatically populated if it is available in the Airtable sheet. You only need to specify if the contributor is the contact person. Click on Add contributor. Repeat to add more contributors. In the contributors' table, you can drag and drop rows to organize contributors in the order that they should appear in the dataset_description file. You can also remove/edit one with the respective delete/edit buttons.
4. Protocol Information
   - Click on Add a protocol and enter the URL to your protocol on protocols.io.

All other information is optional.

When done, click on the Generate button to create the dataset_description.xlsx file on your computer. You will be asked to include this file when organizing your dataset in the later steps.

The expected structure of this file, generated automatically by SODA, is explained in our corresponding How to page if you would like to learn about it.

### Prepare subjects file

You can find this feature under Create subjects.xlsx under the Prepare Metadata tab. Click on I want to start a new subjects file, then click on Add a subject. In the new interface, enter first the unique subject ID for this subject.

1.  Experimental setup: Add the pool_id and experimental_group if applicable/available.
2.  Species information
      - Sex: Select one
      - Species: Type and select the applicable option from the suggestions in the dropdown list. SODA will automatically fill with the correct scientific name defined by NCBI Taxonomy as per the SPARC requirements. If not pre-registered in SODA, click on the Find the scientific name for xxx dropdown option to look for the standard terminology of your species from the NCBI Taxonomy.
      You may just type the name of the animal and click on the dropdown option to get the correct species terminology. <br/> <br/>
   ![](https://camo.githubusercontent.com/8ffce22d67e90fe62f0712bb232019a9cc97c15a0e03f746ef0fbbb6694d3b45/68747470733a2f2f692e6962622e636f2f507247664774562f696d6167652e706e67)<br/><br/>
      - Strain: Similarly to the species, type and select the applicable options from the suggestions in the dropdown list. If not pre-registered in SODA, click on the Click here to check xxx dropdown option to look for the standard strain on Scicrunch as per the SPARC requirements. SODA will automatically pull out the RRID and include it in your subjects file when it is generated. You may use the predetermined options to retrieve the correct RRID for your metadata file.
   ![](https://camo.githubusercontent.com/7ba6a7fbb04547bd53c79f6f0003562cce8d013c3922412e60fb63bb69717f39/68747470733a2f2f692e6962622e636f2f70336a436b79502f696d6167652e706e67) <br /> <br />
      - If SODA does not already have the strain within the suggestion, please click on the dropdown option to allow SODA to retrieve the appropriate RRIDs. <br /> <br />
   ![](https://camo.githubusercontent.com/dd44cc7d70a105a5e03639e659d79e80b886ffc80227f774384832d3f04eba14/68747470733a2f2f692e6962622e636f2f7868714e714d372f696d6167652e706e67) <br /> <br />
3.  Exact age: enter a numerical value in the text field and select the unit from the dropdown list.

All other information is optional.

When done, click on the Add subject button. The added subject will be included in a table of subjects. You can edit/delete/copy existing subjects from the table using the buttons in the last column.
If all the subjects in your dataset have the same characteristics, you can copy information from one subject to another by clicking on the "Copy" image icon in the last column and providing the subject id for the new subject.

When all the subjects are added, click on the Generate button to create the subjects.xlsx file on your computer. You will be asked to include this file when organizing your dataset in the later steps.

The expected structure of this file, generated automatically by SODA, is explained in our corresponding How to page if you would like to learn about it.

### Prepare samples file

You can find this feature under Create samples.xlsx under the Prepare Metadata tab. The interface is very similar to the subjects.xlsx file feature. Click on I want to start a new samples file, then click on Add a sample. In the new interface, enter first the subject ID for this sample is derived from, then enter the unique samples ID for this sample.

1.  Experimental setup: Enter applicable/available information.
2.  Specimen Information
    - Specimen type: Select one from the dropdown list
    - Specimen anatomical location: Type the location.
    - Species/strain/age: Follow instructions from the subjects.xlsx file feature

All other information is optional.

When done, click on the Add sample button. The added sample will be included in a table of samples. You can edit/delete/copy existing samples from the table using the buttons in the last column.

If all the samples in your dataset have the same characteristics, you can copy information from one sample to another by clicking on the "Copy" image icon in the last column and providing the subject and sample ids for the new sample.

When all the subjects are added, click on the Generate button to create the samples.xlsx file on your computer. You will be asked to include this file when organizing your dataset in the later steps.

The expected structure of this file, generated automatically by SODA, is explained in our corresponding How to page if you would like to learn about it.

## Organize dataset according to the SPARC Dataset Structure

### Background

All SPARC datasets must follow the top-level SPARC folder structure imposed by the How to. This top-level folder structure is shown in the figure below. If your data organization doesn't follow this structure inherently, you can create it virtually with SODA and then generate it directly on Pennsieve.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-dataset/Specify-files/SPARC-dataset-structure.PNG?raw=true)

You can use the feature Organize dataset under the Prepare Datasets tab to accomplish this task.

### Step 1: Getting Started

Click on Prepare a new dataset. This option is used to start organizing and curating a new dataset. SODA will take you step-by-step through the curation process to organize your dataset, adding your metadata files, and generating your dataset onto Pennsieve.

### Step 2: Specify high-level folders

Select the high-level folder(s) to be included in your dataset. Refer to the description provided in the figure here about the content of each folder to determine which folder you need for your dataset. A high-level folder can only be included from Step 2 and removed from Step 3. You can always come back to this step to include more folders.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/high-level-folders-1.gif?raw=true)

### Step 3: Structure dataset files

Virtually structure your dataset using this interface as if you were organizing it on your computer but without actually modifying any local files. All your requested actions (files to be included, folders to be created, metadata information to be added, etc.) will be registered by SODA and only implemented when the dataset is generated during Step 6.

These are some of the functions you can do while you are in this step:

- Go inside a folder by double-clicking on it.
- Import files/folders inside a folder using drag-and-drop or the "Import" menu located in the upper right corner.
- Create a new folder using the "New folder" button located in the upper right corner. Note that this is only possible inside a high-level SPARC folder. To create a new high-level SPARC folder, go back to Step 2.
- Rename files/folders using the right-click menu option "Rename".
- Remove files/folders using the right-click menu option "Delete".
- Move files/folders using the right-click menu option "Move".
- Multiple-select files/folders by either drag-selecting items or holding Ctrl and clicking items.
- Use the arrow located in the upper left corner to move up a folder. The current location in the dataset is indicated right next to the arrow.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part1.gif?raw=true)

#### Adding file descriptions (optional)

Use the "Details" option from the right-click menu to see the actual path of the file and include metadata (description, Additional Metadata) which will be included in the manifest files if you request SODA to generate them automatically for you (Step 5).

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true)

### Step 4: Specify high-level metadata files

Click on the applicable panel to include the high-level metadata files of your choice. Note that submission, dataset_description, and subjects files are mandatory for all datasets. The samples file is mandatory if applicable. The other files are optional.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step4-metadata-files.gif?raw=true)

### Step 5: Request manifest files

To generate and include the mandatory manifest files automatically, simply toggle the option to "Yes". Note that any existing manifest files at the target location for generating the dataset will be replaced.

![](https://camo.githubusercontent.com/fb2f030c12514bb1537b8b5ad1e14f4b983ca18e196b8fc45e732edf293eb52a/68747470733a2f2f692e6962622e636f2f3638686473564c2f6d616e69666573742d73637265656e73686f742e706e67)

### Step 6: Generate dataset

Click on the Generate directly on Pennsieve option and confirm your account.

![](https://camo.githubusercontent.com/4fc9c5a061ed9992f3cef118c0b46a049bb613aef9e9a4c2a7016355141892ad/68747470733a2f2f692e6962622e636f2f797962776842482f696d6167652e706e67)

Select I want to generate on an existing dataset. If your dataset is not already selected, click on the edit icon next to Current dataset and select the dataset that you created previously.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-3.gif?raw=true)

### Step 7: Preview dataset

This step serves as a confirmation page before SODA generates your dataset. You can preview your dataset organization with specified SPARC metadata files and specified dataset generate options. This is how your dataset will look once it is generated either on Pennsieve. To edit any details from this step, simply click on the Edit icon next to a section. This will bring you back to the associated section for edits.

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/preview-dataset.PNG?raw=true)

When you are ready to generate your dataset, click the Generate button. Wait here until the dataset is generated.

Once the dataset is generated, you will be prompted to share it with the Curation Team. Click on Yes.

## Organize dataset according to the SPARC Dataset Structure

You can find this feature under `Share with Curation Team` under the `Disseminate Dataset` tab. The dataset you created during step A2 should be automatically selected (you can select another one by clicking on the pencil symbol next to Current dataset). Simply click on Share now to share your dataset with the Curation Team for review.

You are now done! Wait to hear back from the Curation Team.
