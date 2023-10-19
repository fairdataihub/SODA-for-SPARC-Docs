---
sidebar_position: 6
title: API Version Mismatch
image: https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=API%20Version%20Mismatch&description=Common%20errors%20and%20their%20solutions
---

## Issue Background

Upon downloading/auto-updating the old server was never replaced by the most up to date server.

## Solution

**This solution is for Linux users only.**

1. Check if there is a server running in the background by typing `app` in the `System Monitor` and ending this process.
2. Uninstall/remove the SODA AppImage by deleting it.
3. Download and reinstall [SODA](https://github.com/fairdataihub/SODA-for-SPARC/releases/download/v12.2.0/SODA-for-SPARC-12.2.0.AppImage)

Sometimes upon following this process and reinstalling SODA the same issue appears. This can happen when the `app` process does not appear in the System Monitor even though
it is running in the background. If this happens you can use the following terminal commands in lieu of step 1 to find the `app` process and end it before completing steps 2 and 3:

1. Check for the server by running this command in the terminal: `lsof -i:4242`
   - If there is a result ( not an empty console ) then end the 'app' service by running this command in the terminal: `kill -9 <pid>`

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
