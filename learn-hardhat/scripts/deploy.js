const { ethers } = require("hardhat");

async function main(){
    //Create a contract factory
    const FavNumber = await ethers.getContractFactory('FavoriteNumber');
    const favNumber = await FavNumber.deploy(7);

    await favNumber.deployed();

    console.log('FavoriteNumber contract was deployed to:', favNumber.address);
}

main()
