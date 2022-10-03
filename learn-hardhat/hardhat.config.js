require('@nomiclabs/hardhat-waffle')
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_PRIVATE_KEY = `0a0ccfcbeb7e352f5a40c5c050cb17fdc5ee41004c35306a5d79c45a94b9ff41`
module.exports = {
  solidity: "0.8.17", 
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/2wbDDezSTdgHJ078Ebcxorb8ALIyoIb_`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
//Remember to change the version to the current blockchain version