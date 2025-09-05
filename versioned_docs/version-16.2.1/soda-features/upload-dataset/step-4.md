---
sidebar_position: 6
title: Step 4 - Request manifest files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%205%20-%20Request%20manifest%20files&description=Prepare%20Dataset&org=fairdataihub
---

Manifest files are mandatory for all datasets.

For uploads going to a new Pennsieve dataset, simply toggle the option to `Yes`. Then a **manifest.xlsx** file will be added at the root of your dataset with the `filename`, `timestamp`, and `file type` fields automatically populated in the correct format. The additional fields in the manifest file can be edited by clicking the 'Preview/Edit Manifest file' button, making the desired changes in the manifest file editor, and then clicking 'Save and Exit'.

:::info
At the moment, SODA will not automatically fill out the `entity` column in the manifest file. You will need to fill this out manually. If you have
a large number of files, you can generate the manfiest file locally to update the Entity column. If you do this, please click the `Use Locally Generated Manifest` button so that SODA uploads the manifest
file you edited locally to Pennsieve.
:::

<video
   controls
   autoPlay
   loop
   width="100%"
   src="https://github.com/fairdataihub/SODA-for-SPARC/raw/sds3/docs/documentation/Videos/soda-for-sparc-manifests.mp4"
/>

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
