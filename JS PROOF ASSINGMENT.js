// Initialize an empty array to store NFTs
const pepeNFTs = [];

// This function creates an NFT object using the provided parameters as metadata and stores it in the above array.
function mintNFT(name, primaryColor, shirtColor, hairColor) {
    const pepe = {
        id: pepeNFTs.length + 1,
        name: name,
        color: primaryColor,
        shirtColor: shirtColor,
        hairColor: hairColor
    };

    pepeNFTs.push(pepe);
    console.log("Successfully Minted:", name);
}

// This function iterates through the array of NFTs and prints their metadata using console.log()
function listNFTs() {
    for (let i = 0; i < pepeNFTs.length; i++) {
        console.log("\n");
        console.log("ID:", pepeNFTs[i].id);
        console.log("Name:", pepeNFTs[i].name);
        console.log("Color:", pepeNFTs[i].color);
        console.log("Shirt Color:", pepeNFTs[i].shirtColor);
        console.log("Hair Color:", pepeNFTs[i].hairColor);
    }
}

// This function prints the total number of minted NFTs to the console
function getTotalSupply() {
    console.log("Total Supply:", pepeNFTs.length);
}

// Call the functions below this line

mintNFT("James", "Green", "Blue", "Black");
mintNFT("Tim", "Maroon", "Black", "Brown");
mintNFT("Mark", "Blue", "Gray", "Green");
mintNFT("Kim", "Green", "Pink", "Pink");

getTotalSupply();
listNFTs();
