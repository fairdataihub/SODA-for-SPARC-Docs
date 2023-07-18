import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export default function DownloadURL({ children, os }) {
  const [downloadURL, setDownloadURL] = useState('https://docs.fairshareapp.io');

  const getLatestVersion = async () => {
    const res = await fetch('https://api.github.com/repos/fairdataihub/SODA-for-SPARC/releases');
    const data = await res.json();

    // filter releases with tag_name that includes "-beta" or "-alpha"
    const nonBetaReleases = data.filter(
      (releaseDownload) => !releaseDownload.tag_name.includes('-beta'),
    );
    const latestRelease = nonBetaReleases[0];

    latestRelease.assets.forEach((asset) => {
      const fileName = asset.name;
      const fileExt = fileName.split('.').pop();

      if (fileExt === 'dmg' && os === 'macos') {
        setDownloadURL(asset.browser_download_url);
      }
      if (fileExt === 'exe' && os === 'windows') {
        setDownloadURL(asset.browser_download_url);
      }
      if (fileExt === 'AppImage' && os === 'linux') {
        setDownloadURL(asset.browser_download_url);
      }
    });
  };

  useEffect(() => {
    getLatestVersion();
  }, [os]);

  return (
    <a href={downloadURL} rel="noopener">
      {children}
    </a>
  );
}

DownloadURL.propTypes = {
  os: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
