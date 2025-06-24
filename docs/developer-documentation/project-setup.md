---
sidebar_position: 1
pagination_prev: null
title: Project Setup
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Project%20Setup&description=For%20Developers&org=fairdataihub
---

The front-end (Graphical User Interface or GUI) of SODA is built with Electron, an open-source framework developed and maintained by GitHub that conveniently combines Node.js, HTML, CSS, and Javascript, while the back-end is developed in Python (v3.9). The application is inspired by a GitHub repository and a Medium blog. All source codes and files are shared with an open-source license (MIT) to permit user modification without restrictions. The folder structure for the source code is based on the Electron standards and similar to the Electron Demo Application.

## Download source code from the GitHub repository

Either download the zip folder from the GitHub repository or run the following command from your bash shell

```shell
git clone https://github.com/fairdataihub/SODA-for-SPARC.git
```

## Prerequisites

We use Anaconda to keep track of the high level dependencies required to create this application. You can download it here: [Anaconda Individual Edition](https://www.anaconda.com/products/individual)

## Setting up your environment

The environment files required to generate the dev environment have been provided with the repository in the `tools/anaconda-env` folder.

Each operating system requires its own environment to develop in. To facilitate this task we have provided platform specific environment files. Use the one that is relevant for your system.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

```shell title="For Windows"
conda env create -f ./tools/anaconda-env/environment-Windows.yml
conda activate env-electron-python
npm install
```

```shell title="For macOS"
conda env create -f ./tools/anaconda-env/environment-MAC.yml
conda activate env-electron-python
npm install
```

```shell title="For linux"
conda env create -f ./tools/anaconda-env/environment-Linux.yml
conda activate env-electron-python
npm install
```

## Running the application

You can now launch the application with the following command for all Operating Systems.

```bash
npm run dev
```

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

- Python: 3.9
- Nodejs: ^18.0.0

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
