---
sidebar_position: 4
title: Step 3 - Dataset Selection
image: https://kalai.fairdataihub.org/api/generate?title=Step%203%20-%20Dataset%20Selection&description=Structure%20your%20data%20locally%20to%20match%20your%20Pennsieve%20destination.&app=soda-for-sparc&org=fairdataihub
---

On this step, you will select the folder containing your data to upload. How you structure your data locally inside the folder depends on whether you're creating a new dataset or adding to an existing one. Select the appropriate option below to see the instructions for your situation.

**When uploading to a new dataset**, see ["Selecting data when uploading a new dataset"](#selecting-data-when-uploading-a-new-dataset) below.

**When uploading to an existing dataset**, see ["Selecting data when uploading to an existing dataset"](#selecting-data-when-uploading-to-an-existing-dataset) below.

## Selecting data when uploading a new dataset

Select (or drag and drop) the single folder that contains your entire dataset. Your dataset should already be organized inside this folder according to the SPARC Dataset Structure.

---

## Selecting data when uploading to an existing dataset

Choose the appropriate section below based on your situation:

**When you have the complete dataset locally with modifications ready to upload**, see ["If you have the complete dataset locally with modifications ready to upload"](#if-you-have-the-complete-dataset-locally-with-modifications-ready-to-upload) below.

**When you are a collaborator adding your own data to an existing dataset you do not have locally**, see ["If you are contributing data to a dataset you do not have locally"](#if-you-are-contributing-data-to-a-dataset-you-do-not-have-locally) below.

:::tip
If you are able to download the full dataset from Pennsieve or can have it sent to you, this makes the updating an existing dataset process much easier. You can then add your data to it locally and follow the first workflow instead. No need to manually recreate folder structures.
:::

### If you have the complete dataset locally with modifications ready to upload

If you have a complete local copy of the dataset that exists on Pennsieve and have made modifications or additions to it locally, simply select (or drag and drop) the folder containing your updated dataset.

**Important:** SODA will only upload new or updated files to Pennsieve. If you deleted files or folders locally, they will **not** be removed from Pennsieve. SODA is additive only. It adds or updates files but does not delete existing data on Pennsieve.

**What to expect:**

- Only new files will be uploaded to Pennsieve
- Files that already exist on Pennsieve will have the option to be either skipped or replace (you will be able to select what happens in a subsequent step)
- Files or folders deleted locally that exist on Pennsieve will remain on Pennsieve unchanged

---

### If you are contributing data to a dataset you do not have locally

You will need to recreate the folder paths for the data you are adding so your files end up in the right place on Pennsieve. Since SODA does not display the dataset structure that exists on Pennsieve, you must manually match the nested folder paths for your files. For example, if you want to add files to `primary/sub-1/data/` on Pennsieve, your local folder structure must also be `primary/sub-1/data/` with your files inside—not just `sub-1/data/`. This ensures SODA uploads your files to the correct location.

**Before you start:**

- Identify the specific folder paths on Pennsieve where you plan to add your files
- Create only those matching folder paths locally (you don't need to recreate the entire dataset's folder structure)
- Place the new data that you would like to add in the appropriate local folders

**What to expect:**

- Your new files will be uploaded to the matching folders on Pennsieve
- Existing data on Pennsieve remains unchanged unless you placed files in the same location and choose the "replace existing files" option in a subsequent step

**Example: Adding files to an existing folder on Pennsieve**

If you are adding files to a folder that already exists on Pennsieve, create that same folder locally and place your new files inside it:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem', marginBottom: '2rem', alignItems: 'start'}}>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>Sample existing structure on Pennsieve</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The folders and subfolders already in your dataset on Pennsieve</p>
    <div style={{minHeight: '320px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <img src="/img/upload-dataset-step-3-before.png" alt="Pennsieve folder structure example" style={{border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', maxWidth: '500px'}} />
    </div>
  </div>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>How you should structure your data locally</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The matching folder structure you create locally before uploading</p>
    <div style={{minHeight: '320px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <img src="/img/upload-dataset-step-3-after.png" alt="Local folder structure that matches Pennsieve" style={{border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', maxWidth: '500px'}} />
    </div>
  </div>
</div>

**Example: Adding folders to an existing structure on Pennsieve**

If you are adding entirely new folders that don't exist on Pennsieve, create those new folders locally with the same names and structure they should have on your dataset:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem', marginBottom: '2rem', alignItems: 'start'}}>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>Existing structure on Pennsieve</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The folders and subfolders already in your dataset on Pennsieve</p>
    <div style={{minHeight: '320px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <img src="/img/upload-dataset-step-3-before-folders.png" alt="Pennsieve folder structure example" style={{border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', maxWidth: '500px'}} />
    </div>
  </div>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>How you should structure your data locally</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The matching folder structure you create locally before uploading</p>
    <div style={{minHeight: '320px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <img src="/img/upload-dataset-step-3-after-folders.png" alt="Local folder structure that matches Pennsieve" style={{border: '1px solid #ddd', borderRadius: '4px', padding: '1rem', maxWidth: '500px'}} />
    </div>
  </div>
</div>

---

import PageFeedback from '@site/src/components/PageFeedback';
<PageFeedback />
