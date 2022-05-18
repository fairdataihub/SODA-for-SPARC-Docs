---
sidebar_position: 2
pagination_next: null
title: Building the application
image: https://docs.sodaforsparc.io/thumbnails/developer-documentation/building-the-application.png
---

```shell title="For Windows"
conda activate env-electron-python
cd ./src
npm run python-onefile-build-win

# To build only
npm run build-win

# To build and publish
npm run deploy-win
```

:::note
Ensure that the `api.spec` file in the root of the repository has a `binaries` path set to your anaconda3 installation directory. If it doesn't, manually change the `binaries` path to your anaconda3 installation directory. Then run the `python-onefile-build-win` command. 
:::

:::caution
On Windows, after running the `npm run python-onefile-build-win` command, make sure the `pyzmq.libs` folder is included in `pysodadist/api` before going on with packaging the app. If not, make a copy of the `pyzmq.libs` folder from `C:\your_account\Anaconda3\envs\{environment name}\Lib\site-packages` and paste it in the `pysodadist/api` folder.
:::

If the above python packaging fails, try the following PyInstaller command to create your python one file build:

```shell title="For Windows"
cd ./src
# To package the python server
python -m PyInstaller pysoda/api.py --distpath pysodadist --add-binary "path\\to\\anaconda3\\envs\\env-electron-python\\Lib\\site-packages\\pyzmq.libs\\*;pyzmq.libs" --onefile --clean
# Then continue with the rest of the packaging process

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