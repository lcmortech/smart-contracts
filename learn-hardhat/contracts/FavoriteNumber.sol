// SPDX-License-Identifier: MIT

import 'hardhat/console.sol';

pragma solidity ^0.8.17;

contract FavoriteNumber {
    uint public myFavNumber;

    constructor(uint _number){
        myFavNumber = _number;
    }

    function setMyFavNumber(uint _number) external {
        myFavNumber = _number;
    }
}