const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  return  singleSpaDefaults({
    orgName: "micro",
    projectName: "react-app",
    webpackConfigEnv,
  });
};
