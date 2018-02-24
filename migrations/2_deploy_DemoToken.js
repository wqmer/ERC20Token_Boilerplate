var DemoToken = artifacts.require('./Demotoken.sol');

module.exports = (deployer) => {
  deployer.deploy(DemoToken, 100000000000,"DemoToken", 2 ,"DTN");
};