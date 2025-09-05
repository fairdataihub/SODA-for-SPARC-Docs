---
sidebar_position: 2
title: Trouble starting the Pennsieve agent in SODA
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Trouble%20starting%20the%20Pennsieve%20agent%20in%20SODA&description=Can%27t%20start%20the%20Pennsieve%20agent%20in%20SODA&org=fairdataihub
---

## Issue Background

**The Pennsieve Agent failed to start** issue happens when the Pennsieve Agent is installed and SODA is able to interact with the agent, but the agent is not able to successfully start.

## Solution

Please follow the instructions below:

1. First let's verify that the pennsieve agent is working properly outside of SODA. To do that, open a terminal and enter the command below:

```bash
pennsieve agent start
```

If the message `Running Agent NOT as daemon` is returned in the terminal and SODA is not able to start the Pennsieve agent, please [send your log files to the SODA team](https://docs.sodaforsparc.io/docs/next/common-errors/sending-log-files-to-soda-team).

2. If an error message is returned after enting the command, there may be an issue with the Pennsieve agent. To troubleshoot it, view the "Check the Agent Log for any clues to why the agent is not functioning as expected" and then "Remove the local Pennsieve Agent Database files and restart the agent" instructions on [Pennsieve's documentation](https://docs.pennsieve.io/docs/troubleshooting-uploading-data). If these still do not solve the issue, follow the instructions at the end of that page to contact the Pennsieve team. Once the agent is working properly from the terminal, restart SODA and see if the issue is resolved.

3. If following the troubleshooting steps do not resolve the issue, please [send your log files to the SODA team](https://docs.sodaforsparc.io/docs/next/common-errors/sending-log-files-to-soda-team).

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
