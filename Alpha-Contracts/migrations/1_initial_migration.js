const Migrations = artifacts.require("Migrations");
const ToknFactory = artifacts.require("ToknFactory");
const ToknITO = artifacts.require("ToknITO");

module.exports = async function (deployer) {
  // console.log(accounts[1]);
  await deployer.deploy(Migrations);
  await deployer.deploy(ToknFactory, "");
  const toknFactory = await ToknFactory.deployed();
  await deployer.deploy(
    ToknITO,
    toknFactory.address,

    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  );
};
// "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
