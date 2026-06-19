---
sidebar_position: 4
title: Step 3 - Dataset Selection
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%203%20-%20Structure%20dataset%20files&description=Prepare%20Dataset&org=fairdataihub
---

**When uploading to a new dataset**, see ["Selecting data when uploading a new dataset"](#selecting-data-when-uploading-a-new-dataset) below.

**When uploading to an existing dataset**, see ["Selecting data when uploading to an existing dataset"](#selecting-data-when-uploading-to-an-existing-dataset) below.

## Selecting data when uploading a new dataset

Select (or drag and drop) the single folder that contains your entire dataset. Your dataset should already be organized inside this folder according to the SPARC Dataset Structure.

![](/img/upload-dataset-folder-select.png)

---

## Choose the appropriate section below based on whether you are uploading to a new or existing dataset.

**When you have the complete dataset locally with modifications ready to upload**, see ["If you have the complete dataset locally with modifications ready to upload"](#if-you-have-the-complete-dataset-locally-with-modifications-ready-to-upload) below.

**When you are contributing data to a dataset you do not have locally**, see ["If you are contributing data to a dataset you do not have locally"](#if-you-are-contributing-data-to-a-dataset-you-do-not-have-locally) below.

### If you have the complete dataset locally with modifications ready to upload

If you have a complete local copy of the dataset that exists on Pennsieve and have made modifications or additions to it locally, simply select (or drag and drop) the folder containing your updated dataset.

**Important:** SODA will only upload new or updated files to Pennsieve. If you deleted files or folders locally, they will **not** be removed from Pennsieve. SODA is additive only. It adds or updates files but does not delete existing data on Pennsieve.

**What to expect:**

- Only new files will be uploaded to Pennsieve
- Files that already exist on Pennsieve will have the option to be either skipped or replace (you will be able to select what happens in a subsequent step)
- Files or folders deleted locally that exist on Pennsieve will remain on Pennsieve unchanged

---

### If you are contributing data to a dataset you do not have locally

You will need to ensure the folders you are adding match the existing structure on Pennsieve so your files go to the correct locations. Since SODA does not display the dataset structure that exists on Pennsieve, you must manually create the matching folder hierarchy locally for the data you plan to upload.

**Before you start:**

- Determine what folder structure exists on Pennsieve (e.g., `primary`, `derivative`, etc.)
- Create matching folders locally with the same names and hierarchy
- Place your new files in the appropriate local folders

**What to expect:**

- Your new files will be uploaded to the matching folders on Pennsieve
- Existing data on Pennsieve remains unchanged unless you placed files in the same location and choose the "replace existing files" option in a subsequent step

**Examples below show how to align your local structure with Pennsieve:**

**Example: Adding files to an existing structure on Pennsieve**

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', marginBottom: '2rem', alignItems: 'start'}}>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>Existing structure on Pennsieve</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The folders and subfolders already on your dataset</p>
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

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', marginBottom: '2rem', alignItems: 'start'}}>
  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <p style={{marginTop: '0', marginBottom: '1rem', fontWeight: '500'}}>Existing structure on Pennsieve</p>
    <p style={{fontSize: '0.9rem', color: '#666', margin: '0 0 1rem 0'}}>The folders and subfolders already on your dataset</p>
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
