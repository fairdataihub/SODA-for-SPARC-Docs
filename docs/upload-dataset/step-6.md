---
sidebar_position: 7
title: Step 6 - Verify dataset upload
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Step%206%20-%20Generate%20dataset&description=Prepare%20Dataset&org=fairdataihub
---

Upon completing the dataset upload process, you will be have the option to verify that all of your dataset files have been processed by Pennsieve and are viewable without any issues (corrupt files, failed processing, etc).

### Running Verification

After the step 5 upload has successfully completed click the `Verify dataset upload` button. You will be navigated to a new page. SODA will begin verifying that your files have been successfully processed by Pennsieve automatically.

### Understanding the Verification Page

SODA will periodically check what stage your files are at in the Pennsieve processing pipeline. SODA will show you 


### What happens if SODA tells me all of my files have been successfully processed?
If all files have been successfully processed for you will get a message notifying you that the verification process is complete. In this case you have no more work to do and your dataset upload session has been a success.


### What happens if SODA tells me some of my files failed to be processed?
You will be provided a table that lists the path and file names of the files that have failed processing. You can download this table as a csv by clicking the `Download list` button. You also have the option to retry the upload process by clicking the `Retry upload` button. Retrying the upload at this step will only upload the files that have failed processing. No other files will be uploaded. 


import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
