---
sidebar_position: 2
title: Can't Start the Pennsieve Agent Through SODA
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Can%27t%20start%20the%20Pennsieve%20Agent%20through%20SODA&description=Common%20Pennsieve%20Agent%20errors%20and%20their%20solutions
---

## Issue Background

**The Pennsieve agent is already running** issue happens when SODA tries to initiate an upload, but an existing pennsieve_agent process is already running in the background. This oftentimes is the result of an interrupted and unfinished Pennsieve upload from a previous session.

## Solution

A general solution for this issue is to end the `pennsieve.exe` or `pennsieve` process that is still running. Click the relevant option below to learn about how to end a task/process for your operating system.

1. [Windows](https://winaero.com/kill-process-windows-10/)
2. [macOS](https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac)
3. [Ubuntu](https://www.cyberciti.biz/faq/stop-process-ubuntu-linux-command/)

![](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Common-errors/blackfynn-agent-running-error.gif?raw=true)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
