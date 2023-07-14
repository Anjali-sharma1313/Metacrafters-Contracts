// Create a variable to hold the number of NFTs (using the "let" keyword since it can be reassigned)
let numNFTs = 0;

// This function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
function mintNFT(name, color, rarity) {
    // Create an object to hold the metadata of the NFT
    const nft = {
        name: name,
        color: color,
        rarity: rarity
    };

    // Increment the number of NFTs
    numNFTs++;

    // Return the created NFT object
    return nft;
}

// This function will iterate through an array of NFTs and print their metadata to the console
function listNFTs(nftList) {
    for (let i = 0; i < nftList.length; i++) {
        console.log("Name:", nftList[i].name);
        console.log("Color:", nftList[i].color);
        console.log("Rarity:", nftList[i].rarity);
        console.log("\n");
    }
}

// This function will return the total number of minted NFTs
function getTotalSupply() {
    return numNFTs;
}

// Call your functions below this line

// Example usage:

// Mint some NFTs and store them in an array
const myNFTs = [];
myNFTs.push(mintNFT("NFT 1", "Red", "Common"));
myNFTs.push(mintNFT("NFT 2", "Blue", "Rare"));
myNFTs.push(mintNFT("NFT 3", "Green", "Epic"));

// Call the listNFTs function to print the metadata of the NFTs in the array
listNFTs(myNFTs);

// Call the getTotalSupply function to get the total number of minted NFTs
const totalNFTs = getTotalSupply();
console.log("Total Supply:", totalNFTs);
