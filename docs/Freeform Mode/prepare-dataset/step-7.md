---
sidebar_position: 8
title: Step 7 - Validate dataset
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Step%206%20-%20Generate%20dataset&description=Prepare%20Dataset
---

Now that the dataset is prepared validate it to ensure it follows the SPARC Dataset Structure before uploading it to Pennsieve.

### Running Validation

- To run validation, click the `Validate Dataset` button.
  <!-- ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-datasets-validate-button.png?raw=true) -->
- The validation process will take a few moments to complete.
- Once validation is complete you can re-run validation as often as desired by clicking the `Validate Dataset` button again.

### Interpreting Results

- If validation is successful you will receive a message notifying you that your dataset is valid and a table with results.
  ![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-datasets-validation-results.png?raw=true)
- The resulting table has two columns:
  - `Path` - The path to the file, folder, or field that was validated.
  - `Message` - The message informing you what was determined to be invalid about the file, folder, or field specified in the `Path` column.
- To fix your errors, simply alter your dataset to correct the given error messages then re-run validation for confirmation.
- It is recommended that, if possible, you fix most errors before uploading your dataset to Pennsieve.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
