const envNames = ['NODE_ENV', 'TARGET'];
const webSiteList = ['index', 'about'];

process.env.TARGET = process.env.TARGET || 'index';
if (!webSiteList.includes(process.env.TARGET)) {
  throw Error('Target Website not defined');
}

module.exports = {
  envObject: envNames.reduce(
    (acc, key) => ({ ...acc, [key]: JSON.stringify(process.env[key]) }),
    {},
  ),
};
