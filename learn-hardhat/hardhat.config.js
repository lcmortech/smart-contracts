require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.17", 
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/2wbDDezSTdgHJ078Ebcxorb8ALIyoIb_`,
      accounts: [`${process.env.GOERLI_PRIVATE_KEY}`]
    }
  }
};