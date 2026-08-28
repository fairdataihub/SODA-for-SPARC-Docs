---
sidebar_position: 15
title: How to remove Pennsieve Agent database files
image: https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=How%20to%20Remove%20Pennsieve%20Agent%20Database%20Files&description=%27How%20to%27%20SPARC%20series&org=fairdataihub
---

## Background

Some users encounter an issue running the Pennsieve Agent that can only be resolved by removing the Pennsieve Agent database files. This page provides instructions on how to remove these files and how to restart the Agent aftwerwards. Please note that removing the database files will require that you connect your Pennsieve credentials to the Agent again.

:::note
If you have upload progress you will need to reset your upload after removing your Pennsieve Database files. Follow the [instructions here](./how-to-reset-upload-after-removing-pennsieve-agent-files.md) on how to accomplish this. Also, please note that removing your Pennsieve database files and resetting your upload will not remove any files you already have uploaded to the Pennsieve platform.
:::

## Instructions

## MACOS

Delete the following files:

- `~/.pennsieve/pennsieve_agent.db`
- `~/.pennsieve/pennsieve_agent.db-shm`
- `~/.pennsieve/pennsieve_agent.db-wal`

## Windows

Delete the following files:

- `C:\Users\{username}\.pennsieve\pennsieve_agent.db`
- `C:\Users\{username}\.pennsieve\pennsieve_agent.db-shm`
- `C:\Users\{username}\.pennsieve\pennsieve_agent.db-wal`

## Linux

Delete the following files:

- `~/.pennsieve/pennsieve_agent.db`
- `~/.pennsieve/pennsieve_agent.db-shm`
- `~/.pennsieve/pennsieve_agent.db-wal`
