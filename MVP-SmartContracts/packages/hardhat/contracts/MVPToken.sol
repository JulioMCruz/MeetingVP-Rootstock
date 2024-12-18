// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title MVP Token Contract
/// @notice ERC-20 token with a fixed supply of 1 billion tokens.
contract MVPToken is ERC20, Ownable {
    constructor() ERC20("MVP", "MVP") {
        uint256 initialSupply = 1_000_000_000 * 10 ** decimals(); // 1 billion tokens
        _mint(msg.sender, initialSupply); // Mint all tokens to the deployer's address
    }
}