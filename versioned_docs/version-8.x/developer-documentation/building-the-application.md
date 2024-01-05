---
sidebar_position: 2
pagination_next: null
title: Building the application
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Building%20the%20application&description=For%20Developers
---

```shell title="For Windows"
conda activate env-electron-python
cd ./src
npm run python-onefile-build

# To build only
npm run build-win

# To build and publish
npm run deploy-win
```

```shell title="For macOS"
conda activate env-electron-python
cd ./src
npm run python-onefile-build

# To build only
npm run build-mac

# To build and publish
npm run deploy-mac
```

```shell title="For Linux"
conda activate env-electron-python
cd ./src
npm run python-onefile-build

# To build only
npm run build-linux

# To build and publish
npm run deploy-linux
```

#### Package electron app

You can use the predefined build script to create a release for the app.

- Windows:

```bash
npm run build-win
```

- MAC:

```bash
npm run build-mac
```

- Linux:

```bash
npm run build-linux
```

If there are any errors, please check your build settings in the package.json. For more information regarding the build process and all the possible configuration options please refer to [electron-builder](https://www.electron.build/configuration/configuration) documentation.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
