---
sidebar_position: 1
pagination_prev: null
---

# Project Setup

The front-end (Graphical User Interface or GUI) of SODA is built with Electron, an open-source framework developed and maintained by GitHub that conveniently combines Node.js, HTML, CSS, and Javascript, while the back-end is developed in Python (v3.6). The application is inspired by a GitHub repository and a Medium blog. All source codes and files are shared with an open-source license (MIT) to permit user modification without restrictions. The folder structure for the source code is based on the Electron standards and similar to the Electron Demo Application.

## Download source code from the GitHub repository

Either download the zip folder from the GitHub repository or run the following command from your bash shell

```shell
git clone https://github.com/fairdataihub/SODA-for-SPARC.git
```

## Prerequisites

### Installing C++ development libraries

#### Windows

- Download [Visual Studio 2017](https://download.visualstudio.microsoft.com/download/pr/dfb60031-5f2b-4236-a36b-25a0197459bc/789aa74d8838804c37e2d0ea484e5d9a4958bc5cc5d2f6132542f2b637b9c17d/vs_Community.exe), run the executable file
- In the installer, select `Desktop development with C++` and check `VC++ 2015.3 v14.00`

#### macOS

- Install [Xcode](https://developer.apple.com/download/)
- Refer here for installing ['brew'](https://docs.brew.sh/Installation) if your Mac doesn't already have it.

```
$ brew install gcc
$ brew cask install emacs
```

#### Linux

- [Install GCC](https://linuxize.com/post/how-to-install-gcc-compiler-on-ubuntu-18-04/) and [Emacs](https://www.gnu.org/software/emacs/) on Ubuntu

```
$ sudo apt update
$ sudo apt install build-essential
$ sudo apt-get install emacs
```

## Setting up your environment

We use Anaconda to keep track of the high level dependencies required to create this application. The environment files required to generate the dev environment have been provided with the repository in the `dev` folder.

:::tip
Download Anaconda here: [Anaconda Individual Edition](https://www.anaconda.com/products/individual)
:::

Each operating system requires its own environment to develop in. To facilitate this task we have provided platform specific environment files. Use the one that is relevant for your system.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

```shell title="For Windows"
cd ./tools/anaconda-env
conda env create -f environment-Windows.yml
cd ../src/
conda activate env-electron-python
npm install
```

```shell title="For macOS"
cd ./tools/anaconda-env
conda env create -f environment-MAC.yml
cd ../src/
conda activate env-electron-python
npm install
```

```shell title="For linux"
cd ./tools/anaconda-env
conda env create -f environment-Linux.yml
cd ../src/
conda activate env-electron-python
npm install
```

:::caution
For Windows, you also need the `win-node-env` package. This should automatically have been installed as an optional dependency from the `package.json` but if it doesn't you can use the following command to add it to your project:
:::

```
npm install -g win-node-env
```

:::info
If `electron-rebuild .` gives you an error, try deleting the `.electron-gyp` folder from your user profile and try again.
:::

- This should launch the application. You can now edit the code files in the 'src' folder and run `npm start` to see/test your changes

## Installing packages

### Python

For python packages we prefer that you use [conda-forge](https://anaconda.org/conda-forge) if possible. This makes exporting your new environment file much easier. If a package that you require is not available here, you can also use pip to install your package.

```shell
conda install -c conda-forge <package-name>
pip install <package-name>
```

### NodeJS

You can use the vast library provided via [npm](https://www.npmjs.com/) to add any funcionality via JavaScript.

```shell
yarn add <package-name>
```

## Language and framework versions

The minimum required programming language and compiler versions are provided below. Please be aware that this is subject to change.

- Python: 3.6
- Nodejs: ^10.13.0

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
