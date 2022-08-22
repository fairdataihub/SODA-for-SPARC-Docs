import React from 'react';

import compatJSON from '../../docs.compatibility.json';

export default function VersionCompatibility() {
  const reversedArray = JSON.parse(JSON.stringify(compatJSON));
  reversedArray.reverse();

  return (
    <table>
      <thead>
        <tr>
          <th>Documentation Version</th>
          <th>SODA for SPARC Version</th>
        </tr>
      </thead>
      <tbody>
        {reversedArray.map((version) => (
          <tr key={version.docsVersion}>
            <td>{version.docsVersion}</td>
            <td>{version.appVersion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
