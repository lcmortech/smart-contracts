const {expect} = require('chai');
const ethers = require('ethers');

describe('Token contract',()=>{
    it('Deployment should assign the total supply of tokens to the owner', async () => {
    //MUST use async/await for all transactions done on the blockchain
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory('Token');

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
})