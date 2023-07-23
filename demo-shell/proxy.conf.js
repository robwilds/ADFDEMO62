require('dotenv').config();

const { getDeployedAppsProxy, getShareProxy, getApsProxy, getIdentityAdapterServiceProxy } = require('./proxy-helpers');

var legacyHost = "http://3.90.226.222/";
// var cloudHost = "https://sse-apa.dev.alfrescocloud.com/"; //process.env.CLOUD_PROXY_HOST_ADF || process.env.PROXY_HOST_ADF;
// var cloudApps = "https://sse-apa.dev.alfrescocloud.com/"; //process.env.APP_CONFIG_APPS_DEPLOYED;
var apsHost = "http://3.90.226.222/";

module.exports = {
    ...getShareProxy(legacyHost),
    ...getApsProxy(apsHost),
    // ...getDeployedAppsProxy(cloudHost, cloudApps),
    // ...getIdentityAdapterServiceProxy(cloudHost)
};
