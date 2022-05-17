---
sidebar_position: 6
---

# Step 5: Request manifest files

Manifest files are mandatory for all datasets. To learn more about this metadata file we refer to our corresponding "[How to](../how-to/how-to-structure-the-manifest-metadata-file.md)" page.

To generate and include manifest files automatically, simply toggle the option to `Yes`. Then, when you generate the dataset (Step 6), a **manifest.xlsx** file will be added to each high-level SPARC folder with the `filename`, `timestamp`, and `file type` fields automatically populated in the correct format while the `description` and `Additional Metadata` fields will be filled when specified during Step 3.

:::caution
Any existing manifest files at the target location for generating the dataset will be replaced.
:::

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/request-manifests.PNG?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
