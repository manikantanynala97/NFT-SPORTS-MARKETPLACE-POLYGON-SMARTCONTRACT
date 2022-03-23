const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmbSLY2hzrpS1vckpXDwUKGfDJyWpGz6AN7Wo16Gr8xZnV/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const NFTMarketplaceContract = await ethers.getContractFactory("NFTSportsMarketplace");

  // deploy the contract
  const deployedNFTMarketplaceContract = await NFTMarketplaceContract.deploy(metadataURL);

  await  deployedNFTMarketplaceContract.deployed();


  // print the address of the deployed contract
  console.log("NFT SPORTS MARKETPLACE CONTRACT ADDRESS", deployedNFTMarketplaceContract.address);
}

// Call the main function and catch if there is any error
main().then(() => process.exit(0)).catch((error) => {console.error(error);process.exit(1);});