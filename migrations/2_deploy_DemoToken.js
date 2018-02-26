var DemoToken = artifacts.require('./Demotoken.sol');

module.exports = (deployer) => {
  deployer.deploy(DemoToken, 1000000,"DemoToken", 2 ,"DTN");
};