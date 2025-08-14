---
sidebar_position: 8
pagination_next: null
title: How to reinstall the Pennsieve Agent
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Reinstall%20the%20Pennsieve%20Agent&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

Sometimes you may need to reinstall the Pennsieve Agent. Here are the steps for doing so on Windows, Mac and Linux.

### Mac

1. Open a terminal window
2. Run the following commands:

```bash
# stop the pennsieve agent
pennsieve agent stop

# remove the folder that stores the Pennsieve Agent database files
rm -r ~/.pennsieve

# remove the Pennsieve Agent from its installation location
sudo rm -r /usr/local/opt/pennsieve

# remove the symlink
rm /usr/local/bin/pennsieve
```

### Windows

1. Open a command prompt
2. Run the following commands:

```bash
# stop the pennsieve agent
pennsieve agent stop

# remove the folder that stores the Pennsieve Agent database files
rm -r ~/.pennsieve
```

3. Navigate to 'Add or Remove Programs' in the Control Panel
4. Select 'Pennsieve Agent' and click 'Uninstall'

### Linux (Ubuntu)

1. Open a terminal window
2. Run the following commands:

```bash
# stop the pennsieve agent
pennsieve agent stop

# remove the folder that stores the Pennsieve Agent database files
rm -r ~/.pennsieve

# uninstall the Pennsieve Agent using dpkg
sudo dpkg -P pennsieve
```

## Next Steps

Next reinstall the Pennsieve Agent as described in [How to install the Pennsieve Agent](../getting-started//organize-and-submit-sparc-datasets-with-soda.md).
You should now be able to continue your dataset curation.
