require('dotenv').config();

const { getDeployedAppsProxy, getShareProxy, getApsProxy, getIdentityAdapterServiceProxy } = require('./proxy-helpers');

var legacyHost = "http://ec2-54-209-147-180.compute-1.amazonaws.com"
// var cloudHost = "https://sse-apa.dev.alfrescocloud.com/"; //process.env.CLOUD_PROXY_HOST_ADF || process.env.PROXY_HOST_ADF;
// var cloudApps = "https://sse-apa.dev.alfrescocloud.com/"; //process.env.APP_CONFIG_APPS_DEPLOYED;
var apsHost = "http://ec2-54-209-147-180.compute-1.amazonaws.com";

module.exports = {
    ...getShareProxy(legacyHost),
    ...getApsProxy(apsHost),
    // ...getDeployedAppsProxy(cloudHost, cloudApps),
    // ...getIdentityAdapterServiceProxy(cloudHost)
};
