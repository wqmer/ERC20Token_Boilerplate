var DemoToken = artifacts.require('./Demotoken.sol');

module.exports = (deployer) => {
  deployer.deploy(DemoToken);
};