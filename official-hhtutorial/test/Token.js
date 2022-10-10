const {expect} = require('chai');
const ethers = require('ethers');

describe('Token contract',()=>{
    it('Deployment should assign the total supply of tokens to the owner', async () => {
    //MUST use async/await for all transactions done on the blockchain

        //A Signer in ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts. Here we're getting a list of the accounts in the node we're connected to, which in this case is Hardhat Network, and we're only keeping the first one.
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory('Token');

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
})