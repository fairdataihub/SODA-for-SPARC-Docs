---
sidebar_position: 2
title: Building the application
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Building%20the%20application&description=For%20Developers&org=fairdataihub
---

import PageFeedback from '@site/src/components/PageFeedback';

```shell title="For Windows"
conda activate env-electron-python
npm run python-onefile-build-win

# To build only
npm run build

# To build and publish
npm run deploy-win
```

```shell title="For macOS"
conda activate env-electron-python
npm run python-onefile-build-unix

# To build only
npm run build

# To build and publish
npm run deploy-mac
```

```shell title="For Linux"
conda activate env-electron-python
npm run python-onefile-build-unix

# To build only
npm run build

# To build and publish
npm run deploy-linux
```

#### Package electron app

You can use the predefined build script to create a release for the app.

- Windows:

```bash
npm run deploy-win
```

- MAC:

```bash
npm run deploy-mac
```

- Linux:

```bash
npm run deploy-linux
```

If there are any errors, please check your build settings in the package.json. For more information regarding the build process and all the possible configuration options please refer to [electron-builder](https://www.electron.build/configuration/configuration) documentation.

<PageFeedback />
