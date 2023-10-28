---
sidebar_position: 4
title: Step 3 - Structure dataset files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%203%20-%20Structure%20dataset%20files&description=Prepare%20Dataset
---

Virtually structure your dataset using this interface as if you were organizing it on your computer but without actually modifying any local files. All your requested actions (files to be included, folders to be created, metadata information to be added, etc.) will be registered by SODA and only implemented when the dataset is generated during Step 6.

- Go inside a folder by double-clicking on it.
- Import files/folders inside a folder using drag-and-drop or the `Import` menu located in the upper right corner.
- Create a new folder using the `New folder` button located in the upper right corner. Note that this option is only allowed inside a high-level SPARC folder. To create a new high-level SPARC folder, go back to Step 2.

  :::info
  SPARC folders naming should contain only alpha-numerical values 0-9, A-Z, no empty spaces, and no special characters.
  :::

- Rename files/folders by right-clicking on the files/folders and click menu option `Rename`.
- Remove files/folders by right-clicking on the files/folders and click menu option `Delete`.
- Move files/folders by right-clicking on the files/folders and click menu option `Move`
- Simultaneously select multiple files/folders by either drag-selecting items or holding Ctrl and clicking the items.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part1.gif?raw=true)
- Use the arrow located in the upper left corner to move up a folder. The current location in the dataset is indicated right next to the arrow.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true)

#### Adding file descriptions (optional)

- Use the `Details` option from the right-click menu to see the actual path of the file and include metadata (description, Additional Metadata) which will be included in the
  manifest files if you request SODA to generate them automatically for you (Step 5).
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true)

### Duplicate Files/Folders

When importing and duplicate files/folders are detected an alert will appear to see how you would like to handle those duplicates. You have the options to:

- Skip
- Replace
- Rename

`Skip` will prompt you with a list of files and be able to select which ones you'd like to skip. For the ones left unselected you will be prompted back to see if you would like
to handle those files/folders.

`Replace` gives you the ability to update an already imported file/folder. For example if you have updated the context of a file/folder outside of SODA you can update the
file/folder within SODA to sync any new changes.

`Rename` will allow you to import the duplicate files/folders with new names. You will be prompted to rename the current duplicates and after all are given a unique name you will
be allowed to import.

`Cancel` returns you back to the duplicate prompt if you decide to not continue with one of the selections above. On hitting cancel again, duplicate files/folders will not
imported and only the new unique items will.

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Duplicate-Item.mp4"
/>

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
