const envNames = ['NODE_ENV', 'TARGET'];

process.env.TARGET = process.env.TARGET || 'index';

module.exports = {
  envObject: envNames.reduce(
    (acc, key) => ({ ...acc, [key]: JSON.stringify(process.env[key]) }),
    {},
  ),
};
