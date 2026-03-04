---
sidebar_position: 1
title: Installing the Pennsieve agent
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Installing%20the%20Pennsieve%20agent&description=Common%20errors%20and%20their%20solutions&org=fairdataihub
---

## Background

Generally, installing the Pennsieve Agent is as simple as clicking the Pennsieve installer and following the prompts. However, some users encounter roadblocks when trying to install the Pennsieve Agent. These often depend upon the OS and the permissions of the user profile on the computer. If you are having trouble installing the Pennsieve Agent, please follow the instructions below to troubleshoot the issue.

## Windows

There are multiple issues that can cause problems. In no particular order, these include:

### SmartScreen Defender blocking the Pennsieve Agent

How to confirm and resolve if SmartScreen Defender is blocking the Pennsieve Agent from installing:

1. Open the File Explorer and navigate to the Pennsieve Agent installation folder (usually `C:\Program Files (x86)\Pennsieve`).
2. Right-click on the `pennsieve.exe` file and select "Properties".
3. In the Properties window, go to the "General" tab.
4. If there is a message at the bottom of the window that says "This file came from another computer and might be blocked to help protect this computer", check the box that says "Unblock" and then click "Apply" and "OK".
5. Try starting the Pennsieve Agent again from the terminal by running `pennsieve agent start` and see if the issue is resolved.

### Smart App Control blocking the Pennsieve Agent (Windows 11 only)

If you are using Windows 11, you will receive a toast notification stating that Smart App Control has blocked the Pennsieve Agent from running. In this case,
it is worth trying the prior instructions to unblock. If that does not work the only solutions are to disable Smart App Control (not recommended) or to use a different computer that does not have Smart App Control enabled. To check if Smart App Control is enabled, and to disable it if you choose to do so, follow the instructions [here](https://learn.microsoft.com/en-us/windows/apps/develop/smart-app-control/overview#how-can-i-disable-smart-app-control).

:::Note
It is not recommended to disable Smart App Control, as it provides important security protections for your computer. If you are using an institution procided computer
contact your IT department. If you are on a personal computer it is still not recommended but if it is up to your discretion.
If disabling it is not an option for you, or you simply do not like the idea, please contact the SODA team by emailing us at
help@fairdataihub.org.
:::

### User profile with restricted permissions

If you are using a user profile with restricted permissions on your computer, this may be causing the issue. If you are using a computer provided by your employer or institution, you may want to reach out to your IT department to see if this is the case and if they can provide a solution. If you are using a personal computer, you can check if your user profile has restricted permissions by following the instructions [here](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works#user-account-control-and-user-profiles). If you find that your user profile has restricted permissions, you can try creating a new user profile with administrative permissions and see if that resolves the issue.

## MacOS

There are multiple issues that can cause problems. In no particular order, these include:

### User profile with restricted permissions

If you are using a user profile with restricted permissions on your computer, this may be causing the issue. If you are using a computer provided by your employer or institution, you may want to reach out to your IT department to see if this is the case and if they can provide a solution. If you are using a personal computer, you can check if your user profile has restricted permissions by following the instructions [here](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works#user-account-control-and-user-profiles). If you find that your user profile has restricted permissions, you can try creating a new user profile with administrative permissions and see if that resolves the issue.

### MacOS security settings blocking the Pennsieve Agent

If this happens you will see a message that says "pennsieve" cannot be opened because the developer cannot be verified. To resolve this, open your System Preferences, go to "Security & Privacy", and under the "General" tab, you should see a message at the bottom that says "pennsieve was blocked from use because it is not from an identified developer". Click the "Open Anyway" button next to this message, and then confirm that you want to open the application. After doing this, try starting the Pennsieve Agent again from the terminal by running `pennsieve agent start` and see if the issue is resolved.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
