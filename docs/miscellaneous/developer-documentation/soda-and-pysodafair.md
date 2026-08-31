---
sidebar_position: 2
pagination_prev: null
title: Working with pysodafair
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Project%20Setup&description=For%20Developers&org=fairdataihub
---

## About pysodafair

pysodafair is a Python library that provides backend functionality for SODA. It handles critical dataset management operations, such as generating manifest files and uploading datasets to Pennsieve. When making modifications to this process, you will generally need to make changes to pysodafair.

## Making Changes to pysodafair

To develop and test changes to pysodafair:

1. Clone the pysodafair repository:

```shell
git clone https://github.com/fairdataihub/pysodafair
```

2. Create a new branch off of `staging`:

```shell
git checkout staging
git checkout -b your-branch-name
```

3. Make your changes to the code in your branch

4. Activate the conda environment:

```shell
conda activate env-electron-python
```

5. Install pysodafair in editable mode to test your changes locally:

```shell
pip install -e .
```

6. Launch SODA to test your pysodafair changes:

```shell
npm run dev
```

The application will now use your modified version of pysodafair, allowing you to test the changes that were made with SODA running locally.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
