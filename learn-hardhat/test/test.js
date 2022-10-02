//Importing expect assertion from chai library
const { expect } = require('chai');

describe('Favorite Number Contract',()=>{

    let favNumberContract

    beforeEach(async ()=>{
        const FavoriteNumber = await ethers.getContractFactory('FavoriteNumber');
        await favNumberContract.deploy(7); //deploys our smart contract, and argument (the fav number)
    })

    //the it block for testing
    it('It should return 7 as my fav number', async ()=>{
        expect(await favNumberContract.myFavoriteNumber()).to.equal(7);
    })

    it('It should return 10 as my favorite number', async ()=>{
        const changeNumberTx = await favNumberContract.setMyFavNumber(10);
        await changeNumberTx.wait();
        expect(await favNumberContract.myFavoriteNumber);
    })
})
//we have to use async/await when working with the blockchain
//Tx = 'transaction'