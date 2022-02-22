---
sidebar_position: 4
---

import ReactPlayer from 'react-player/lazy'

# Step 3: Structure dataset files

Virtually structure your dataset using this interface as if you were organizing it on your computer but without actually modifying any local files. All your requested actions (files to be included, folders to be created, metadata information to be added, etc.) will be registered by SODA and only implemented when the dataset is generated during Step 6.

- Go inside a folder by double-clicking on it.
- Import files/folders inside a folder using drag-and-drop or the `Import` menu located in the upper right corner.
- reate a new folder using the `New folder` button located in the upper right corner. Note that this is only possible inside a high-level SPARC folder. To create a new high-level SPARC folder, go back to Step 2.
- Rename files/folders using the right-click menu option `Rename`.
- Remove files/folders using the right-click menu option `Delete`.
- Move files/folders using the right-click menu option `Move`
- Multiple-select files/folders by either drag-selecting items or holding Ctrl and clicking items.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part1.gif?raw=true)
- Use the `Details` option from the right-click menu to see the actual path of the file and include metadata (description, Additional Metadata) which will be included in the manifest files if you request SODA to generate them automatically for you (Step 5).
- Use the arrow located in the upper left corner to move up a folder. The current location in the dataset is indicated right next to the arrow.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true)

### Duplicate Files/Folders

When importing and duplicate files/folders are detected an alert will appear to see how you would like to handle those duplicates. You have the options to:

- Skip
- Replace
- Rename

`Skip` will prompt you with a list of files and be able to select which ones you'd like to skip. For the ones left unselected you will be prompted back to see if you would like to handle those files/folders.
(insert gif here)

`Replace` gives you the ability to update an already imported file/folder. For example if you have updated the context of a file/folder outside of SODA you can update the file/folder within SODA to sync any new changes.

`Rename` will allow you to import the duplicate files/folders with new names. You will be prompted to rename the current duplicates and after all are given a unique name you will be allowed to import.

`Cancel` returns you back to the duplicate prompt if you decide to not continue with one of the selections above. On hitting cancel again, duplicate files/folders will not imported and only the new unique fitems will.

<div className="player-wrapper sm:pt-60 md:pt-64 lg:pt-64">
  <ReactPlayer
    url="/videos/Duplicate-Item.mp4"
    className="react-player"
    playing
    width="100%"
    controls
  />
</div>

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
