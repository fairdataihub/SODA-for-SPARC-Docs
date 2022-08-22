import React from 'react';

import compatJSON from '../../docs.compatibility.json';

export default function VersionCompatibility() {
  return (
    <table>
      <thead>
        <tr>
          <th>Documentation Version</th>
          <th>SODA for SPARC Version</th>
        </tr>
      </thead>
      <tbody>
        {compatJSON.map((version) => (
          <tr key={version.docsVersion}>
            <td>{version.docsVersion}</td>
            <td>{version.appVersion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
