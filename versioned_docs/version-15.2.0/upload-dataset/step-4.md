---
sidebar_position: 6
title: Step 4 - Request manifest files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%205%20-%20Request%20manifest%20files&description=Prepare%20Dataset&org=fairdataihub
---

Manifest files are mandatory for all datasets. To learn more about this metadata file we refer to our corresponding
"[How to](../how-to/how-to-structure-the-manifest-metadata-file.md)" page.

:::info
For uploading to an existing dataset, SODA will not generate manifests to prevent conflicts. It is recommended to update your manifest files after upload in the "Advanced Features" of SODA. You can use the [Create Manifest files](../advanced-mode/create-manifest-files.md) feature.
:::

For uploads going to a new Pennsieve dataset, simply toggle the option to `Yes`. Then a **manifest.xlsx** file will be added
to each high-level SPARC folder with the `filename`, `timestamp`, and `file type` fields automatically populated in the correct format while the `description` and
`Additional Metadata` fields can be added by the user by selecting on a high-level folder to make manifest edits. Upon making edits, hitting the save and exit button
will create manifest.xlsx files to be added upon dataset generation.

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/soda-for-sparc-manifests.mp4"
/>

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
