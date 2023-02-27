import { ethers } from "hardhat";
import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

async function main() {

    const [owner] = await ethers.getSigners();

    const contractOne = "0xb6364550499baca567Ae0fb361b20AA5b908de2a";

    const contractTwo = "0x080c23415Bd7f11fd8CAea9D132a89E866028AF3";

    const contractThree = "0x7e897a5FDc03F0E2Cf24b5A7e28B6439F3194de7";

    const contractFour = "0xfb56F5F6D8D0A712778D82127B25b8533426D785";

    const contractFive = "0xFF7D5c7dA613A91f31915c7bf6F4ab07a2B37EE9";

    //@ts-ignore
    const web3 = new Web3(process.env.MAINNET_FORK);

    const readStorageOne = await web3.eth.getStorageAt(contractOne, 1);
    console.log("Contract storage at position 1:", readStorageOne);

    const readStorageTwo = await web3.eth.getStorageAt(contractTwo, 1);
    console.log("Contract storage at position 1:", readStorageTwo);

    const readStorageThree = await web3.eth.getStorageAt(contractThree, 0);
    console.log("Contract storage at position 0:", readStorageThree);

    const readStorageFour = await web3.eth.getStorageAt(contractFour, 2);
    console.log("Contract storage at position 2:", readStorageFour);

    const readStorageFive = await web3.eth.getStorageAt(contractFive, 1);
    console.log("Contract storage at position 1:", readStorageFive);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
