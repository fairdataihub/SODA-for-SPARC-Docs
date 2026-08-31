---
sidebar_position: 2
title: Trouble starting the Pennsieve agent in SODA
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Trouble%20starting%20the%20Pennsieve%20agent%20in%20SODA&description=Can%27t%20start%20the%20Pennsieve%20agent%20in%20SODA&org=fairdataihub
---

## Issue Background

**The Pennsieve Agent failed to start** issue can happen in two scenarios:

1. The agent is not installed on the computer.
2. The Agent is installed but does not run.

If scenario 1 applies to you please see this page in the documentation for how to install the Pennsieve agent [here](https://docs.pennsieve.io/docs/installation). If you have the agent installed but it is not running, please follow the instructions below to troubleshoot the issue.

## Determining the Cause of the Issue

### How to Troubleshoot the Pennsieve Agent Not Starting

Follow these steps to diagnose and resolve issues starting the Pennsieve Agent:

1. **Try to Start the Agent Manually**

   - Open your terminal and run:
     ```bash
     pennsieve agent start
     ```
   - This will attempt to start the Pennsieve Agent outside of SODA and provide helpful error messages.

2. **Check the Terminal Output**

   - **If you see:**
     - `Running Agent NOT as daemon` or a message saying the Agent has started:  
       SODA is not detecting the running Agent. [Send your log files to the SODA team](./sending-log-files-to-soda-team) for further help.
     - `command not found: pennsieve` but you believe the Agent is installed:  
       SODA cannot find the Pennsieve Agent. [Send your log files to the SODA team](./sending-log-files-to-soda-team) for assistance.
     - **Any other error message:**  
       Continue to the next step for troubleshooting based on the error you see.

3. **If You Cannot Start the Agent from the Terminal**
   - Follow the troubleshooting steps below based on the error output in the SODA UI. To find the error output in SODA, look for the area circled in red in the screenshot below.

### Permission Denied Error

This issue applies to you if you see the following (or something similar) in the SODA UI:

```bash
bash: /c/Program Files (x86)/Pennsieve/pennsieve: Permission denied
```

This can have one, or both, of the following causes:

#### SmartScreen Defender Blocking the Pennsieve Agent

If you are using Windows 10 or 11 this issue may be caused by SmartScreen Defender. To determine if SmartScreen Defender is blocking the Pennsieve Agent, and unblock it, follow the instructions below:

1. Open the File Explorer and navigate to the Pennsieve Agent installation folder (usually `C:\Program Files (x86)\Pennsieve`).
2. Right-click on the `pennsieve.exe` file and select "Properties".
3. In the Properties window, go to the "General" tab.
4. If there is a message at the bottom of the window that says "This file came from another computer and might be blocked to help protect this computer", check the box that says "Unblock" and then click "Apply" and "OK".
5. Try starting the Pennsieve Agent again from the terminal by running `pennsieve agent start` and see if the issue is resolved.

#### Smart App Control Blocking the Pennsieve Agent

If you are using Windows 11, and unblocking the Pennsieve Agent as described above did not resolve the issue, it may be caused by Smart App Control. To check and resolve:

- **Check if Smart App Control is enabled:**

  - If you received a message that states "Smart App Control has blocked this app" then Smart App Control is enabled and blocking the Pennsieve Agent.
  - If the above is uncertain, you can also follow the instructions to determine if Smart App Control is on and being enforced [here](https://learn.microsoft.com/en-us/windows/apps/develop/smart-app-control/overview#how-can-i-tell-if-smart-app-control-running-in-evaluation-or-enforcement-mode).

- **If Smart App Control is enabled, optionally disable it by doing the following:**
  :::note
  Disabling Smart App Control is generally not recommended, as it provides important security protections for your computer. If disabling it is not an option for you, please contact the SODA team by emailing us at help@fairdataihub.org for further assistance.
  :::
  - If you are using a computer provided by your employer or institution, contact your IT department to see if they can provide a solution that does not involve disabling Smart App Control.
  - If you are using a personal computer and decide to disable Smart App Control, follow the instructions [here](https://learn.microsoft.com/en-us/windows/apps/develop/smart-app-control/overview#how-can-i-disable-smart-app-control).
- **If Smart App Control is not enabled:**

  - Follow the next troubleshooting steps below to determine the cause of the issue.

#### User Profile with Restricted Permissions

If you are using a user profile with restricted permissions on your computer, this may be causing the issue. If you are using a computer provided by
your employer or institution, you may want to reach out to your IT department to see if this is the case and if they can provide a solution. If you
are using a personal computer, you can check if your user profile has restricted permissions by following the instructions [here](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works#user-account-control-and-user-profiles). If you find that your user profile has restricted permissions, you can try creating a new user profile with administrative permissions and see if that resolves the issue.

### UNIQUE constraint failed

This applies to you if you see the following (or something similar) in the SODA UI:

```bash
UNIQUE constraint failed: user_settings.id
```

This is a known issue you may encounter when using the Pennsieve Agent. To resolve this issue you should remove the Agent database files
and try again. To do this, follow the instructions on removing the database files available [here](../how-to/how-to-remove-pennsieve-agent-db-files).

### NotAuthorizedException: Incorrect username or password

This applies to you if you see the following (or something similar) in the SODA UI:

```bash
NotAuthorizedException: Incorrect username or password.
```

This is a known issue you may encounter when using the Pennsieve Agent. To resolve this issue you should remove the Agent database files
and try again. To do this, follow the instructions on removing the database files available [here](../how-to/how-to-remove-pennsieve-agent-db-files).

### UserSettings

This applies to you if you see the following keyword (or something similar) in the SODA UI:

```bash
UserSettings
```

This is a known issue you may encounter when using the Pennsieve Agent. To resolve this issue you should remove the Agent database files
and try again. To do this, follow the instructions on removing the database files available [here](../how-to/how-to-remove-pennsieve-agent-db-files).

### Bad CPU Type

This applies to you if you see the following (or something similar) in the SODA UI:

```bash
Bad CPU type in executable
```

This issue can occur on Mac computers with Intel chips while running certain versions of the Pennsieve Agent. This cannot be resolved, but you can work around it by installing an older version of the Pennsieve Agent manually. Follow these steps:

1. Download an older version of the Pennsieve Agent installer. You can find the versions of the installer available on the Pennsieve Github Repository [here](https://github.com/pennsieve/pennsieve-agent/releases).
2. Manually install the Pennsieve Agent by following the instructions available [here](https://docs.pennsieve.io/docs/installation).
3. After installation, open your terminal and try running the Agent:

```bash
pennsieve agent start
```

4. If it does not work, try a different (older) version of the installer and repeat the steps above until you find one that works on your system.

## Still Having Issues?

If following the troubleshooting steps did not resolve the issue, or you are unsure about what steps apply to you
please [send your log files to the SODA team](./sending-log-files-to-soda-team).

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
