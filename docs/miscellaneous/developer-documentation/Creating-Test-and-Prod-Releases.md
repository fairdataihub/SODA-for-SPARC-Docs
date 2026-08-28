---
sidebar_position: 3
title: Creating Test and Prod Releases
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Creating%20Test%20and%20Prod%20Releases&description=For%20Developers&org=fairdataihub
---

## Automated Builds with GitHub Actions

The application is automatically built and deployed when code is pushed to the `main` or `staging` branches. GitHub Actions workflows handle the build and release process for all platforms:

- **[Windows Build Workflow](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/.github/workflows/Build-and-deploy-win.yml)** - Automatically builds and deploys Windows releases
- **[macOS Build Workflow](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/.github/workflows/Build-and-deploy-mac.yml)** - Automatically builds and deploys macOS releases
- **[Linux Build Workflow](https://github.com/fairdataihub/SODA-for-SPARC/blob/main/.github/workflows/Build-and-deploy-linux.yml)** - Automatically builds and deploys Linux releases

These workflows run the build scripts, package the Electron application, and publish releases to GitHub when changes are pushed.

## Creating Beta Releases

To create beta releases:

1. Find and replace all version strings in SODA (e.g., `19.0.0`) with the beta version (e.g., `19.0.0-beta`)
2. **If you made changes to pysodafair:** Update the pysodafair version number and push to the `staging` branch in pysodafair. This will trigger automatic publication of a beta release to [testpypi](https://test.pypi.org/)
3. Merge the changes into the `staging` branch
4. The build process will automatically create beta builds for all platforms

:::note
The build process will not create new builds if beta builds already exist for that version. Delete existing beta builds in the GitHub releases section before creating new ones.
:::

## Creating Production Releases

To create production releases:

1. Ensure all changes are finalized and tested
2. **Versioning:** Find and replace all version strings in SODA to remove the `-beta` suffix in the opposite manner of how it's done for beta releases (e.g., `19.0.0-beta` → `19.0.0`)
3. **Review pysodafair:** Ensure that any logs added to pysodafair that are inside loops are removed, as they can overload the server
4. **Remove testing console statements:** Delete all testing `console.log()`, `console.error()`, and other `console.(...)` statements
5. **If you made changes to pysodafair:** Update the pysodafair version number and push to the `main` branch in pysodafair. This will trigger automatic publication of a production release to [pypi](https://pypi.org/)
6. Merge changes into the `main` branch
7. The automated workflows will build and deploy production releases for all platforms
8. Releases will be published to the GitHub releases section with the corresponding version tag

:::note
The build process will not create new builds if production builds already exist for that version. Delete existing production builds in the GitHub releases section before creating new ones.
:::

## Publishing a Release

Once the automated builds have completed and releases are created on GitHub:

1. Navigate to [SODA-for-SPARC Releases](https://github.com/fairdataihub/SODA-for-SPARC/releases)
2. Find the release you want to publish and click the **Edit** button
3. Add the following to the Release notes (update 19.0.0 with the desired release version):

```
For Windows: [SODA-for-SPARC-Setup-19.0.0.exe](https://github.com/fairdataihub/SODA-for-SPARC/releases/download/v19.0.0/soda-for-sparc-19.0.0-setup.exe)

For Linux: [SODA-for-SPARC-19.0.0.AppImage](https://github.com/fairdataihub/SODA-for-SPARC/releases/download/v19.0.0/SODA-for-SPARC-19.0.0.AppImage)

For macOS: [SODA-for-SPARC-19.0.0.dmg](https://github.com/fairdataihub/SODA-for-SPARC/releases/download/v19.0.0/SODA-for-SPARC-19.0.0.dmg)

For instructions on how to install and use SODA, please refer [here](https://docs.sodaforsparc.io/docs/getting-started/download-soda)
```

4. Click the **Publish** button to finalize the release

5. Once the release has been published, download an old version of SODA and ensure that you are auto-updated to the newest release

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
