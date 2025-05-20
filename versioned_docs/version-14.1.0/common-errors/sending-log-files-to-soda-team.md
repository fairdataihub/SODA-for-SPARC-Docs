---
sidebar_position: 4
title: Sending log files to SODA Team
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Sending%20log%20files%20to%20SODA%20Team&description=Common%20errors%20and%20their%20solutions&org=fairdataihub
---

import PageFeedback from '@site/src/components/PageFeedback';

## Background

The SODA app saves all errors in several log files on your computer. In order to solve user issues, the SODA Team usually needs to take a look at those log files.

## How to obtain the log files

### Automatically

To automatically gather your log files:

1. Select the `Contact Us` tab in the navigation menu/sidebar.
2. Click `Gather Logs` and then select a location to store the log files.
3. They will be stored in a folder called `SODA-For-SPARC-Logs`

### Manually

You can also get the log files manually. There are two locations where log files are stored. The first location is the log files for the Electron process. THe second location stores log files for the SODA server. When possible, both should be gathered and sent to the SODA team.

#### Electron Process Log Files

1. Windows: _C:\Users\your-username\AppData\Roaming\SODA for SPARC\logs_
2. macOS: _~/your-username/Library/Logs/SODA_
3. Ubuntu: _/home/your-username/.config/SODA/logs_

#### SODA Server Log Files

1. Windows: C:\Users\your-username\SODA\logs
2. macOS: ~/your-username/SODA/logs
3. Ubuntu: /home/your-username/SODA/logs

### Common issues regarding the log files

Unable to find the AppData (Windows), .config (Ubuntu), or Library (macOS) folder

Solution: It is very likely that the folder is hidden on your computer. To learn about how to show hidden files and folders, [please visit here](https://fairdataihub.org/sodaforsparc/docs/common-errors/Issues-regarding-hidden-files-or-folders).

## How to send the log files to the SODA team

Unless instructed otherwise by the SODA team, you can email the log files with an explanation of your issue at help@fairdataihub.org

<PageFeedback />
