console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
    return collection.push({ title, artist, yearPublished });
}

addToCollection("Fetty Wap", "Fetty Wap", "2015");
addToCollection("The Butterfly Effect", "Fetty Wap", "2021");
addToCollection("Indestructible", "Disturbed", "2008");
addToCollection("Immortalized", "Disturbed", "2015");
addToCollection("We are not alone", "Breaking Benjamin", "2004");
addToCollection("Dear Agony", "Breaking Benjamin", "2009");
addToCollection("Best of Pentatonix vol 1,2 and 3", "Pentatonix", "2012-2014");

console.log(collection[0]);
console.log(collection[1]);
console.log(collection[2]);
console.log(collection[3]);
console.log(collection[4]);
console.log(collection[5]);
console.log(collection[6]);

function showCollection(collection) {
    for (let i = 0; i < collection.length; i++) {
        console.log(
            `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
        );
    }
}

showCollection(collection);

function findByArtist(artist) {
    let album = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            album.push(collection[i]);
        }
    }
    return album;
}

console.log(findByArtist("Fetty Wap"));
console.log(findByArtist("Disturbed"));
console.log(findByArtist("Breaking Benjamin"));
console.log(findByArtist("Pentatonix"));
