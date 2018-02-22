var DemoToken = artifacts.require('./Demotoken.sol');

module.exports = (deployer) => {
  deployer.deploy(DemoToken, 10000000,"DemoToken", 2 ,"DTN");
};