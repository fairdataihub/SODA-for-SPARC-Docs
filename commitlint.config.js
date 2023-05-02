// eslint-disable-next-line import/no-extraneous-dependencies
const { commitlintConfig } = require('@fairdataihub/config');

const config = commitlintConfig();

const scopes = ['app', 'library', 'backend', 'authentication', 'settings', 'deps', 'release'];

config.rules['scope-enum'] = [2, 'always', scopes];

module.exports = config;
